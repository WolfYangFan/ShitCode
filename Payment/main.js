import { createApp, ref, watch } from 'https://cdn.staticfile.org/vue/3.2.45/vue.esm-browser.prod.js'

const apiPrefix = '/'; // 测试环境 / 生产环境 切换选项

async function httpGet(url, data = {}) {
    const res = await fetch(url, {
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
    });
    return res.json();
}

const client = {
    order: {
        fetch(coId) {
            return httpGet(apiPrefix + 'api/order/' + coId + '/detail'); // 订单详情
        },
        createChannelOrder(coId, channel) {
            return httpGet(apiPrefix + 'api/order/' + coId + '/' + channel); // 各个平台支付详情
        },
        status(coId) {
            return httpGet(apiPrefix + 'api/order/' + coId + '/status'); // 轮询支付状态
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
            if (res.code != 200) return window.mdui.snackbar(res.msg, { position: 'right-bottom' }); // 错误信息直接提示

            app.value = res.app;
            order.value = res.order;
            adaptars.value = res.adaptars;

            setInterval(checkExpire = () => {
                orderExpireTime.value = order.value.expire_at - Math.floor(new Date().getTime() / 1000);
            }, 1000); // 每秒检测是否过期
            checkExpire(); // 运行检测
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
                        qrcode: res.qrcode // qrcode应该是base64编码的
                    };

                    if (res.wake_url) currentAdaptarData.value.wake_url = res.wake_url; // 唤醒APP操作

                    if (!intervalId && !orderStatus.value) {
                        intervalId = setInterval(() => {
                            client.order.status(coId).then(res => {
                                if (res.code != 200) return window.mdui.snackbar(res.msg, { position: 'right-bottom' });
                                if (res.status) {
                                    orderStatus.value = true;
                                    clearInterval(intervalId);
                                    setTimeout(() => {
                                        window.location.href = app.value.url; // 跳转回指定页面
                                    }, 3000); // 3秒后跳转
                                    return window.mdui.snackbar('支付成功', { position: 'right-bottom' }); // 右下角提示信息
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
            if (!input.value) return window.mdui.snackbar('请先选择支付方式。', { position: 'right-bottom' }); // 右下角提示信息
            currentAdaptar.value = input.value;
        }

        return { coId, app, order, orderExpireTime, orderStatus, adaptars, currentAdaptar, currentAdaptarData, input, selectAdaptar };
    }
}).mount('#app')