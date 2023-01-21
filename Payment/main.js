import { createApp, ref, watch } from 'https://cdn.staticfile.org/vue/3.2.45/vue.esm-browser.prod.js'

async function Get(url, data = {}) {
    const res = await fetch(url, {
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
    });
    return res.json();
}

const client = {
    order: {
        fetch(coId) {
            return Get('/api/order/' + coId + '/detail');
        },
        createChannelOrder(coId, channel) {
            return Get('/api/order/' + coId + '/' + channel);
        },
        status(coId) {
            return Get('/api/order/' + coId + '/status');
        }
    }
}

createApp({
    setup() {
        const coId = window.location.hash.split('#')[1];
        const app = ref({});
        const order = ref({});
        const orderExpireTime = ref(1);
        const orderStatus = ref(false);
        const adaptars = ref({});
        const currentAdaptar = ref('');
        const adaptarData = ref({});
        const currentAdaptarData = ref({
            loading: false,
            data: {}
        });
        const input = ref();
        let checkExpire;
        let intervalId;

        client.order.fetch(coId).then(res => {
            if (res.code != 200) return window.mdui.snackbar(res.msg, { position: 'right-bottom' });

            app.value = res.app;
            order.value = res.order;
            adaptars.value = res.adaptars;

            setInterval(checkExpire = () => {
                orderExpireTime.value = order.value.expire_at - Math.floor(new Date().getTime() / 1000);
            }, 1000);
            checkExpire();
        });

        watch(currentAdaptar, (adaptar) => {
            if (adaptarData.value[adaptar]) {
                currentAdaptarData.value = adaptarData.value[adaptar];
            } else {
                currentAdaptarData.value.loading = true;
                client.order.createChannelOrder(coId, adaptar).then(res => {
                    currentAdaptarData.value.loading = false;
                    if (res.code != 200) return window.mdui.snackbar(res.msg, { position: 'right-bottom' });

                    currentAdaptarData.value = adaptarData.value[adaptar] = {
                        loading: false,
                        qrcode: res.qrcode
                    };

                    if (res.wake_url) currentAdaptarData.value.wake_url = res.wake_url;

                    if (!intervalId && !orderStatus.value) {
                        intervalId = setInterval(() => {
                            client.order.status(coId).then(res => {
                                if (res.code != 200) return window.mdui.snackbar(res.msg, { position: 'right-bottom' });
                                if (res.status) {
                                    orderStatus.value = true;
                                    clearInterval(intervalId);
                                    setTimeout(() => {
                                        window.location.href = app.value.url;
                                    }, 3000);
                                    return window.mdui.snackbar('支付成功', { position: 'right-bottom' });
                                }
                                if (orderExpireTime.value < 0) {
                                    clearInterval(intervalId);
                                }
                            });
                        }, 3000);
                    }
                });
            }
        });

        function selectAdaptar() {
            if (!input.value) return window.mdui.snackbar('请先选择支付方式。', { position: 'right-bottom' });
            currentAdaptar.value = input.value;
        }

        return { coId, app, order, orderExpireTime, orderStatus, adaptars, currentAdaptar, currentAdaptarData, input, selectAdaptar };
    }
}).mount('#app')