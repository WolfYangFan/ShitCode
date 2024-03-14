<!DOCTYPE html>
<html lang="en" style="scroll-behavior: smooth;">
<head>
    <meta charset="UTF-8">
    <title>新课堂首页</title>
    <link rel="stylesheet" href="../amaze-ui/assets/css/amazeui.css">
    <script src="../jquery/jquery-3.3.1.min.js"></script>
    <script src="../amaze-ui/assets/js/amazeui.js"></script>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/certify.css">
    <script src="../js/swiper.min.js"></script>
    <script type="text/javascript" src="https://s23.cnzz.com/z_stat.php?id=1276868394&web_id=1276868394"></script>
    <!--    <script src="jquery/global.js"></script>-->
    <style>
        body>a{
            display:none;
        }
        a:hover {
            color: #0e90d2;
        }
        .am-slider-a4 .am-control-nav li a.am-active {
            background-color: #FF0606;
            cursor: default;
        }

        /*跟随导航*/
        .fllow_nav > ul > li {
            list-style: none;
            color: black;
            float: left;
            margin-right: 0%;
        }

        .fllow_nav > ul > li:hover {
            cursor: pointer;
        }

        .fllow_nav_title:hover {
            color: red;
        }

        .show_class > p > span:hover {
            color: red;
            cursor: pointer;
        }

        /*功能模块*/
        .point_demo {
            color: #3B516A;
        }

        .point_demo:hover {
            color: #FA6F66;
        }

        /*体验中心*/
        .am-u-sm-3:hover {
            cursor: pointer;
        }

        .bg_try:hover {
            opacity: .8;
            cursor: pointer;
        }

        /*师资力量*/
        .opacity {
            opacity: 1;
        }

        .teacher_title > li {
            list-style: none;
        }

        /*新闻模块*/
        .news_title > li {
            float: left;
        }
        .am-slider-a4 .am-control-nav {
            left: -1%;
            width: 100%;
            position: absolute;
            bottom: -10%;
            text-align: center;
            line-height: 0;
        }

        .news_title_demo {
            border-top: 2px solid transparent;
            margin-right: 4%;
            text-align: left;
            border-bottom: 1px solid #F1F1F1;
            padding: 10px 10px 10px 10px;
            width: 250px;
            height: 380px;
        }
        .news_title_demo:hover {
            box-shadow: 1px 1px 8px;
            border-top: 2px solid red;
            cursor: pointer;
        }

        .news_title_demo > p {
            font-size: 14px;
            color: #999;
            margin-top: 8%;
        }

        /*分享体验*/
        .class_star{
            float: left;
            margin-right: 2%;
        }
        #read_more:hover{
            cursor: pointer;
            color:red;
        }

        /*轮播按钮*/
        .wrapper {
            display: flex;
            justify-content: center;
        }
        .cta {
            display: flex;
            padding: 2px 50px;
            text-decoration: none;
            font-size: 28px;
            color: white;
            background:#409EFF;
            transition: 1s;
            box-shadow: 6px 6px 0 black;
            -webkit-transform: skewX(-15deg);
            transform: skewX(-15deg);
        }
        .cta:focus {
            outline: none;
        }
        .cta:hover {
            color:white;
            transition: 0.5s;
            box-shadow: 10px 10px 0 #FBC638;
        }
        .btn_right {
            transition: 0.5s;
            margin-right: 0px;
        }
        .cta:hover   .btn_right{
            transition: 0.5s;
            margin-right: 45px;
        }
        .cta>span {
            -webkit-transform: skewX(15deg);
            transform: skewX(15deg)
        }
        .btn_right {
            width: 20px;
            margin-left: 30px;
            position: relative;
            top: 12%;
        }
        /**************SVG****************/
        path.one {
            transition: 0.4s;
            -webkit-transform: translateX(-60%);
            transform: translateX(-60%);
        }
        path.two {
            transition: 0.5s;
            -webkit-transform: translateX(-30%);
            transform: translateX(-30%);
        }
        .cta:hover path.three {
            -webkit-animation: color_anim 1s infinite 0.2s;
            animation: color_anim 1s infinite 0.2s;
        }
        .cta:hover path.one {
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
            -webkit-animation: color_anim 1s infinite 0.6s;
            animation: color_anim 1s infinite 0.6s;
        }
        .cta:hover path.two {
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
            -webkit-animation: color_anim 1s infinite 0.4s;
            animation: color_anim 1s infinite 0.4s;
        }
        .am-slider-a2 {
            -webkit-box-shadow:none;
            box-shadow:none;
        }

        /* SVG animations */

        @-webkit-keyframes color_anim {
            0% {
                fill: white;
            }
            50% {
                fill: #FBC638;
            }
            100% {
                fill: white;
            }
        }

        @keyframes color_anim {
            0% {
                fill: white;
            }
            50% {
                fill: #FBC638;
            }
            100% {
                fill: white;
            }
        }
        @keyframes lunbo1 {
            from {-webkit-transform: scale(1.2);
                transform: scale(1.2);
            }
            to{-webkit-transform: scale(1);
                transform: scale(1);
            }
        }
        @keyframes lunboImg {
            from {
                top:220px;
                opacity: 0;
                /*-webkit-transform: scale(1.2);*/
                /*transform: scale(1.2);*/
            }
            to{
                top:200px;
                opacity: 1;
                /*-webkit-transform: scale(1);*/
                /*transform: scale(1);*/
            }
        }
        .chat_main{
            display:none;
        }
        @media (min-width:1400px){
            .afterSale{
                right:6%;
                top:30%;
            }
            .logoNav{
                margin-left: 8%;
            }
        }
        @media (max-width: 1400px) {
            .afterSale{
                right:8%;
                top:30%;
            }
            .logoNav{
                margin-left:0%;
            }
        }
        .footNav>div>a{
            margin-right:16px;
        }
        .footNav>div>a:hover{
            color:#1C9EFF;
        }
    </style>
</head>
<body>
<div style="width: 100%;height: 100%;z-index: 999;">
    <!--跟随导航-->
    <div class="fllow_nav" style="transition:.8s;opacity:0;display:block;text-align:center;line-height:0px;width:100%;background:#DFE9EB;height:0px;position:fixed;top:0%;z-index: 99999;">
        <ul style="font-size:14px;margin:0 auto;width:720px;height:100%;">
            <li><span class="fllow_nav_title" onclick="to_other('logo')"
                      style="color:red;">返回顶部</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
            <li><span class="fllow_nav_title"
                      onclick="href('free_class.php')">体验课</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
            <li><span class="fllow_nav_title"
                      onclick="href('system.php')">课程体系</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
            <li><span class="fllow_nav_title"
                      onclick="href('teacher.php')">名师荟萃</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
            <li><span class="fllow_nav_title"
                      onclick="href('share.php')">家长分享</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
            <li><span class="fllow_nav_title"
                      onclick="href('news.php')">企业动态</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
            <li><span class="fllow_nav_title"
                      onclick="href('find.php')">招贤纳士</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
            <!--            <li><span class="fllow_nav_title"-->
            <!--                      onclick="href('introduce.php')">推荐阅读</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>-->
            <li><span class="fllow_nav_title"
                      onclick="href('about.php')">关于新课堂</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
        </ul>
    </div>
    <!--页面头部-->
    <div style="width:100%;" class="am-g">
        <div style="width:100%;height:40px;background:#333333;color:#cccccc;line-height:40px;">
                    <div style="display:inline-block;width:50%;margin-left:20%;font-size:14px;">
                        <img src="img/title_header.png" style="margin-bottom:2px;">
                        <span>欢迎来到新课堂在线教育</span>
                        <span style='margin-left:80px;'>新课堂&nbsp;&nbsp;&nbsp;新教育&nbsp;&nbsp;&nbsp;新希望</span>
                        <div style="display:inline-block;float:right;font-size:16px;">
                            <i class="am-icon-phone-square" style="color:#cccccc;"></i>&nbsp;
                            <span>400-600-4152</span>
                        </div>
                    </div>
                </div>        <div>
            <!--logo+导航栏-->
            <div class="logoNav" style="width:80%;display:inline-flex;position:absolute;z-index:9;margin-top:20px;">
                <div style="width:25%;">
                    <img src="img/logo.png" style="float:right;width:160px;" id="logo">
                </div>
                <div style="width:75%;color:black;margin-top:16px;padding-left:10%;">
                    <ul class="nav">
                        <li onclick="to_index()">首页</li><li onclick="to_freeVideo()">体验课</li><li onclick="to_system()">课程体系</li><li onclick="to_teacher()">名师荟萃</li><li onclick="to_share()">家长分享</li><li onclick="to_news()">企业动态</li><li onclick="to_find()">招贤纳士</li><li onclick="to_about()">关于新课堂</li>                    </ul>
                </div>
            </div>
        </div>
        <!--轮播-->
        <div style="width:100%;height:100%;">
            <div data-am-widget="slider" class="am-slider am-slider-a2"
                 data-am-slider='{&quot;directionNav&quot;:false}' style="height:100%;">
                <ul class="am-slides">
                    <li>
                        <div style="width:100%;">
                            <img src="img/index_lunbo1.png" style="animation: lunbo1 12s ease both;">
                        </div>
                    </li>
                    <li>
                        <!--                        <div style="position: absolute;z-index: 9;width: 60%;margin-left: 20%;top:20%;">-->
                        <!--                            <img src="img/lunbo2Word.png" style="text-align: center;">-->
                        <!--                        </div>-->
                        <div style="left:20%;position:absolute;top:64%;">
                            <div class="wrapper">
                                <a class="cta" href="free_class.php">
                                    <span class="btn_system">点击体验</span>
                                    <span class="btn_right">
                                        <svg width="66px" height="36px" viewBox="0 0 66 36" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                        <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                        <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                                        </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div style="width:100%;">
                            <img src="img/index_lunbo2.png" style="">
                        </div>
                    </li>
                    <li>
                        <!--                        <div style="top:32%;position:absolute;left:42%;">-->
                        <!--                            <div class="wrapper">-->
                        <!--                                <a class="cta" href="system.php" style="background:#F28003;">-->
                        <!--                                    <span class="btn_system">点击了解</span>-->
                        <!--                                    <span class="btn_right">-->
                        <!--                                        <svg width="66px" height="36px" viewBox="0 0 66 36" version="1.1">-->
                        <!--                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
                        <!--                                        <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>-->
                        <!--                                        <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>-->
                        <!--                                        <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>-->
                        <!--                                        </g>-->
                        <!--                                        </svg>-->
                        <!--                                    </span>-->
                        <!--                                </a>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <div style="width:100%;">
                            <img src="img/index_lunbo3.png" style="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--功能模块-->
        <div class="am-g am-g-fixed"
             style="position:relative;width: 1180px;left: 50%;margin-left:-500px;top:-10%;height:120px;z-index:98;border-radius:4px;box-shadow: 0 30px 40px 0 rgba(0, 0, 0, 0.10);margin-top:-4%;">
            <div class="am-u-sm-3" style="border-radius: 4px;background: rgba(255, 255, 255, 1);transition: .2s;">
                <i>
                    <img src="img/events-icon1.png" style="width: 30%;margin-top: 12%;" id="free_class_icon">
                </i>
                <div style="margin-left: 36%;margin-top: -26%;">
                    <h2 class="point_demo" id="free_class_title" style="font-size:18px;line-height:22px;"
                        onclick="href('free_class.php')">免费体验专区</h2>
                    <p style="color: #95989D;margin-top: -11%;font-size: 14px;">热门课程0元试用</p>
                </div>
            </div>
            <div class="am-u-sm-3" style="border-radius: 4px;background: rgba(255, 255, 255, 1);transition: .2s;">
                <i>
                    <img src="img/events-icon2.png" style="width: 30%;margin-top: 12%;" id="system_icon">
                </i>
                <div style="margin-left: 36%;margin-top: -26%;">
                    <h2 class="point_demo" style="font-size:18px;line-height:22px;" id="system_title"
                        onclick="href('system.php')">课程体系介绍</h2>
                    <p style="color: #95989D;margin-top: -11%;font-size: 14px;">语数英全面升级</p>
                </div>
            </div>
            <div class="am-u-sm-3" style="border-radius: 4px;background: rgba(255, 255, 255, 1);transition: .2s;">
                <i>
                    <img src="img/events-icon3.png" style="width: 30%;margin-top: 12%;" id="teacher_icon">
                </i>
                <div style="margin-left: 36%;margin-top: -26%;">
                    <h2 class="point_demo" style="font-size:18px;line-height:22px;" id="teacher_title"
                        onclick="href('teacher.php')">名师荟萃课堂</h2>
                    <p style="color: #95989D;margin-top: -11%;font-size: 14px;">高效题集笔记</p>
                </div>
            </div>
            <div class="am-u-sm-3" style="border-radius: 4px;background: rgba(255, 255, 255, 1);transition: .2s;">
                <i>
                    <img src="img/events-icon4.png" style="width: 30%;margin-top: 12%;" id="news_icon">
                </i>
                <div style="margin-left: 36%;margin-top: -26%;">
                    <h2 class="point_demo" style="font-size:18px;line-height:22px;" id="news_title"
                        onclick="href('news.php')">最新课堂动态</h2>
                    <p style="color: #95989D;margin-top: -11%;font-size: 14px;">紧跟课程更新</p>
                </div>
            </div>
        </div>
    </div>
    <!--页面主体-->
    <div style="width:100%;" class="am-g">
        <!--体验视频-->
        <div class="am-u-sm-12" style="margin-top: 4%;background:#F8F8F8;width: 100%;text-align:center;"
             id="share_head">
            <!--体验中心-->
            <div class="am-u-sm-12">
<!--                <h1 style="margin-top:2%;font-size:2em;padding-bottom:1%;background: url(img/indexTitleline.png) no-repeat;background-position: center 100%;">新课堂直播展示</h1>-->
<!--                <p style="color:grey;">主讲教师在线直播，通过标准化，趣味化的课程，让学生爱上学习</p>-->
                <h1 style="margin-top:2%;font-size:2em;padding-bottom:1%;background: url(img/indexTitleline.png) no-repeat;background-position: center 100%;">新课堂授课展示</h1>
                <p style="color:grey;">主讲教师在线授课，通过标准化，趣味化的课程，让学生爱上学习</p>
                <!--照片墙-->
                <div style="padding-bottom:60px;padding-top:60px;">
                    <div style="margin: 0 auto;position:relative;background-size: 100%;">
                        <div class="swiper-container" id="swiper1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" style="text-align: center;">
                                    <div class="photo" style="width:96%;margin:0 auto;">
                                        <div style="display:inline-flex;">
                                            <div class='photo_demo' style='background:url(img/index_video_border.png) no-repeat;background-size:100%;width:300px;height:360px;margin:0px 30px;'>
                                                          <img src="../xAdmin/rimg.php?id=15056" style="width:338px;height:320px;" /> 
                                                    </div><div class='photo_demo' style='background:url(img/index_video_border.png) no-repeat;background-size:100%;width:300px;height:360px;margin:0px 30px;'>
                                                          <img src="../xAdmin/rimg.php?id=15063" style="width:338px;height:320px;" /> 
                                                    </div><div class='photo_demo' style='background:url(img/index_video_border.png) no-repeat;background-size:100%;width:300px;height:360px;margin:0px 30px;'>
                                                          <img src="../xAdmin/rimg.php?id=15070" style="width:338px;height:320px;" /> 
                                                    </div>                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide" style="text-align: center;">
                                    <div class="photo" style="width:96%;margin:0 auto;">
                                        <div style="display:inline-flex;">
                                            <div class='photo_demo' style='background:url(img/index_video_border.png) no-repeat;background-size:100%;width:300px;height:360px;margin:0px 30px;'>
                                                          <img src="../xAdmin/rimg.php?id=15077" style="width:338px;height:320px;" /> 
                                                    </div><div class='photo_demo' style='background:url(img/index_video_border.png) no-repeat;background-size:100%;width:300px;height:360px;margin:0px 30px;'>
                                                          <img src="../xAdmin/rimg.php?id=15084" style="width:338px;height:320px;" /> 
                                                    </div><div class='photo_demo' style='background:url(img/index_video_border.png) no-repeat;background-size:100%;width:300px;height:360px;margin:0px 30px;'>
                                                          <img src="../xAdmin/rimg.php?id=15091" style="width:338px;height:320px;" /> 
                                                    </div>                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--课程体系-->
        <div class="am-u-sm-12" style="width:80%;margin-left:10%;margin-top:2%;text-align:center;" id="system_head">
            <h1 style="font-size:2em;padding-bottom:1%;background: url(img/indexTitleline.png) no-repeat;background-position: center 100%;">新课堂专业课程</h1>
            <div style="width:100%;">
                <p style="color: grey;">由10年以上课程研发经验的教研团队精心研发，新课堂一线名师主讲
                </p>
            </div>
            <div style="width:100%;">
                <div class="swiper-containerSystem">
                    <div class="swiper-wrapper">
<!--                        <div class="swiper-slide">-->
<!--                            <div style="width:100%;display: inline-flex;">-->
<!--                                <div style="width:50%;padding-top:4%;">-->
<!--                                    <img src="img/classtype1.png" style="width:80%;">-->
<!--                                </div>-->
<!--                                <div style="width:50%;padding-top:4%;text-align: left;">-->
<!--                                    <div style="margin-left:8%;">-->
<!--                                        <p style="font-size:22px;">新课堂自主研发基础强化班</p>-->
<!--                                        <p>从认识到理解，专业课程从培养孩子的兴趣开始</p>-->
<!--                                        <p>课程内容知识点精讲、细讲</p>-->
<!--                                        <p>课程根据学段和学科特色，融入集体教研专家老师的智慧</p>-->
<!--                                        <p>授课中包含配套测评，活学活用</p>-->
<!--                                    </div>-->
<!--                                    <div style="margin-top:18%;margin-left:8%;">-->
<!--                                        <i class="am-icon-rmb" style="font-size:22px;color:tomato"></i>&nbsp;-->
<!--                                        <span style="font-size:36px;color:tomato;font-weight:500;">3580</span>&nbsp;<span style="font-size:24px;color:grey;">/3个月</span>-->
<!--<!--                                        <button onclick="window.location.href='system.php'" style="margin-left:4%;margin-bottom:2%;font-size:18px;color:white;background:#1C9EFF;border:none;border-radius:4px;width:160px;height:45px;">点击了解课程</button>-->
<!--                                        <button onclick="window.location.href='test.php?price=3580'" style="margin-left:4%;margin-bottom:2%;font-size:18px;color:white;background:#1C9EFF;border:none;border-radius:4px;width:160px;height:45px;">点击购买课程</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                        <div class="swiper-slide">
                            <div style="width:100%;display: inline-flex;">
                                <div style="width:50%;padding-top:4%;">
                                    <img src="img/classtype2.png" style="width:80%;">
                                </div>
                                <div style="width:50%;padding-top:4%;text-align: left;">
                                    <div style="margin-left:8%;">
                                        <p style="font-size:22px;">新课堂自主研发全面提分班</p>
                                        <p>从听懂到运用，让孩子进一步提升</p>
                                        <p>全面系统的分析、详细的讲授</p>
                                        <p>灵活运用知识，提升做题能力</p>
                                        <p>查漏补缺，夯实基础，提升能力，让学生突破各个重难点</p>
                                    </div>
                                    <div style="margin-top:18%;margin-left:8%;">
                                        <i class="am-icon-rmb" style="font-size:22px;color:tomato"></i>&nbsp;
                                        <span style="font-size:36px;color:tomato;font-weight:500;">3580</span>&nbsp;<span
                                                style="font-size:24px;color:grey;">/3个月</span>
                                        <button onclick="window.location.href='test.php?price=4800'" style="margin-left:4%;margin-bottom:2%;font-size:18px;color:white;background:#1C9EFF;border:none;border-radius:4px;width:160px;height:45px;">
                                            点击购买课程
                                        </button>
<!--                                        <button onclick="window.location.href='system.php'" style="margin-left:4%;margin-bottom:2%;font-size:18px;color:white;background:#1C9EFF;border:none;border-radius:4px;width:160px;height:45px;">-->
<!--                                            点击了解课程-->
<!--                                        </button>-->
                                    </div>
                                    <!--                                <div style="width:100%;margin-top:1%;">-->
                                    <!--                                    <p style="font-size:28px;font-weight: 800;margin-top: 4%;">基础强化班</p>-->
                                    <!--                                    <div style="width:80%;margin-left:10%;text-align: left;margin-top:6%;font-size:28px;color:grey;">-->
                                    <!--                                        <p>从认识到理解，从听懂到运用，让孩子进一步提升</p>-->
                                    <!--                                        <p>课程内容知识点知识点精讲、细讲。</p>-->
                                    <!--                                        <p>课程根据学段和学科特色，融入集体教研专家老师的智慧。</p>-->
                                    <!--                                        <p>授课中包含配套测评，活学活用。</p>-->
                                    <!--                                    </div>-->
                                    <!--                                    <div class="btnSystem" style="width:220px;color:tomato;height:63px;border-radius:22px;border:2px solid tomato;margin-left:10%;text-align: left;margin-top:6%;" onclick="window.location.href='system.php'">-->
                                    <!--                                        <div>-->
                                    <!---->
                                    <!--                                        </div>-->
                                    <!--                                        <p style="line-height:56px;font-size:28px;text-align: center;cursor: pointer;">点击了解课程</p>-->
                                    <!--                                    </div>-->
                                    <!--                                </div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-paginationSystem"></div>
                </div>
            </div>
        </div>
        <!--师资力量-->
        <div class="am-u-sm-12" style="background:#F8F8F8;margin-top:2%;text-align: center;padding-bottom:2%;" id="teacher_head">
            <h1 style="margin-top:2%;font-size:2em;padding-bottom:1%;background: url(img/indexTitleline.png) no-repeat;background-position: center 100%;">新课堂名师汇聚</h1>
            <p style="color:grey;">超过100，000节课程，好的师资力量让孩子的进步看得见</p>
            <div style="display:inline-flex;">
                <div style="width:55%;text-align: right;">
                    <img src="img/teacherType.png" style="width:90%;">
                </div>
                <div style="width:45%;text-align: left;">
                    <div style="margin-top:26%;margin-left:4%;">
                        <h2 style="color: #FA5117;">主讲+助教、答疑+督课 “三师模式”</h2>
                        <div style="margin-top:6%;">
<!--                            <h3 style="margin-bottom:0;">主讲老师在线视频直播</h3>-->
                            <h3 style="margin-bottom:0;">主讲老师在线视频授课</h3>
                            <p style="margin-top:0;color:grey;">通过设定标准化、模块化、趣味化的课程，全面系统地进行同步授课，让学生轻松学习、爱上学习。</p>
                        </div>
                        <div style="margin-top:6%;">
                            <h3 style="margin-bottom:0;">优秀助教全程答疑</h3>
                            <p style="margin-top:0;color:grey;">9:00至21:00百名助教悉心守候，细心答疑。</p>
                        </div>
                        <div style="margin-top:6%;">
                            <h3 style="margin-bottom:0;">全程督课服务</h3>
                            <p style="margin-top:0;color:grey;">对成绩及学习情况进行全程跟踪反馈，充分了解每个学生。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--新闻动态-->
        <div class="am-u-sm-12" style="padding:2%;background:url(img/indexNewsbg.jpg) repeat;text-align:center;width:100%;margin-top:2%;margin-bottom:2%;" id="news_head">
            <h1 style="font-size:2em;color:white;">新课堂最新动态</h1>
            <p style="color:white;">新课堂不仅仅是同学学习的乐园，更是师生共同快乐成长的大家庭</p>
            <div style="display: inline-block;width:100%;margin-top:2%;">
                <div data-am-widget="slider" class="am-slider am-slider-a4"
                     data-am-slider='{&quot;directionNav&quot;:false}'>
                    <ul class="am-slides">
                        <li> <div style="display:inline-flex;margin-right:2%;background:white;">
                                            <div class="news_title_demo" style='padding:0px;border-bottom:none;' onclick='window.location.href="news.php?id=419"'>
                                                <div><img src="../xAdmin/rimg.php?id=25675" style="width:250px;height:130px;"></div>
                                                <h3 style='text-align:center;margin-top: 4%;color:black;padding:0px 10px;'>新课堂网校写给各位考生的一封信</h3>
                                                <p style='padding: 0px 8px;'><p>新课堂网校教育的初心是“立德树人”，办学宗旨是“让每个孩子得到优秀老师的辅导”。只有承载着使命与担当的教育才能拥有无穷的力量，才能守护生命的茁壮成长、塑造人类的美好未来。书海遨游十几载，今朝学成试锋芒。各位考生，请给自己一个微笑，对自己说一句“加油”，自信地迈进考场。新课堂网校愿在背后默默守护你们！陪伴你们！</p></p>
                                                <p style='padding: 0px 8px;'>时间：2020-07-03</p>
                                            </div>
                                        </div> <div style="display:inline-flex;margin-right:2%;background:white;">
                                            <div class="news_title_demo" style='padding:0px;border-bottom:none;' onclick='window.location.href="news.php?id=412"'>
                                                <div><img src="../xAdmin/rimg.php?id=25654" style="width:250px;height:130px;"></div>
                                                <h3 style='text-align:center;margin-top: 4%;color:black;padding:0px 10px;'>新课堂网校暑假班，强势来袭，速看！</h3>
                                                <p style='padding: 0px 8px;'><p>一年一度的暑假即将来临，想必每一位家长都希望自己的孩子在放松娱乐的同时，能把握好暑假时间进行自我完善，实现自我突破。</p><p>这个过程的跨越如果有一个很好的衔接，孩子会很轻松地进入新的年级。为此，新课堂网校为幼儿到高中的孩子们量身定制了暑假特色课程。这个暑假，让您的孩子足不出户，就能完美蜕变！</p></p>
                                                <p style='padding: 0px 8px;'>时间：2020-06-30</p>
                                            </div>
                                        </div> <div style="display:inline-flex;margin-right:2%;background:white;">
                                            <div class="news_title_demo" style='padding:0px;border-bottom:none;' onclick='window.location.href="news.php?id=405"'>
                                                <div><img src="../xAdmin/rimg.php?id=24695" style="width:250px;height:130px;"></div>
                                                <h3 style='text-align:center;margin-top: 4%;color:black;padding:0px 10px;'>重磅！高考倒计时，新课堂网校内部押题资料——改革创新类作文</h3>
                                                <p style='padding: 0px 8px;'><p>纵观最近几年的高考作文题目，我们发现一个特点：政治化倾向有渐强趋势。于是有人戏说，近几年的高考作文题目都是政治老师出的。虽然是玩笑，但是为了应试，政治化倾向的题目不容忽视，所以新课堂网校专家组在上期给出了大家家国情怀类作文的提示与解析。同时，还有另一类高考作文主题备受我们新课堂高考押题组的青睐，那就是改革创新类作文。</p></p>
                                                <p style='padding: 0px 8px;'>时间：2020-06-02</p>
                                            </div>
                                        </div> <div style="display:inline-flex;margin-right:2%;background:white;">
                                            <div class="news_title_demo" style='padding:0px;border-bottom:none;' onclick='window.location.href="news.php?id=398"'>
                                                <div><img src="../xAdmin/rimg.php?id=24394" style="width:250px;height:130px;"></div>
                                                <h3 style='text-align:center;margin-top: 4%;color:black;padding:0px 10px;'>新课堂网校直播预习正式上线</h3>
                                                <p style='padding: 0px 8px;'><p></p><p>为什么新课堂网校要选择直播预习呢？</p><p>根据新课堂辅导老师的反馈，学生在预习时常常抓不住重点，在预习的过程中时常走偏预习重点的路线，还有部分学生没有养成预习的习惯，可以说从未在课前预习过。新课堂网校抓住事情的矛头后，新课堂全体辅导老师全面开展预习直播工作，目的为引导学生走在正确的预习道路上，抓住下节课上课的重点，为改变学生不预习的坏习惯，督促学生上课。</p><br /></p>
                                                <p style='padding: 0px 8px;'>时间：2020-05-20</p>
                                            </div>
                                        </div></li><li> <div style="display:inline-flex;margin-right:2%;background:white;">
                                            <div class="news_title_demo" style='padding:0px;border-bottom:none;' onclick='window.location.href="news.php?id=391"'>
                                                <div><img src="../xAdmin/rimg.php?id=24387" style="width:250px;height:130px;"></div>
                                                <h3 style='text-align:center;margin-top: 4%;color:black;padding:0px 10px;'>新课堂积极响应教育部：中小学复课要防止赶进度超容量</h3>
                                                <p style='padding: 0px 8px;'><p>新课堂网校相信，风雨过后总能见彩虹。引用《我不是完美小孩》的一句话与大家共勉：“世界愈悲伤，我愈快乐。当人心愈险恶，我要愈善良。当挫折来了，我要挺身面对。我要做一个乐观向上，不退缩不屈不饶不怨天尤人的人，勇敢去接受人生所有挑战的人。”在这个特殊的开学季，新课堂网校希望每一个孩子都能拥有高逆商，在未来的道路上无畏前行，所向披靡！</p></p>
                                                <p style='padding: 0px 8px;'>时间：2020-05-20</p>
                                            </div>
                                        </div> <div style="display:inline-flex;margin-right:2%;background:white;">
                                            <div class="news_title_demo" style='padding:0px;border-bottom:none;' onclick='window.location.href="news.php?id=384"'>
                                                <div><img src="../xAdmin/rimg.php?id=24380" style="width:250px;height:130px;"></div>
                                                <h3 style='text-align:center;margin-top: 4%;color:black;padding:0px 10px;'>融合+创新，构建“新课堂”</h3>
                                                <p style='padding: 0px 8px;'><p>2020年“十三五”规划和十年教育中长期规划纲要的收官之年，同时，2020年也是“十四五”规划开好局、起好步、打基础的关键一年。为积极响应国家号召，新课堂网校主动融入，前瞻谋划，紧紧围绕“一三五”和十年教育中长期规划纲要，构建新的教育教学新模式。</p></p>
                                                <p style='padding: 0px 8px;'>时间：2020-05-20</p>
                                            </div>
                                        </div> <div style="display:inline-flex;margin-right:2%;background:white;">
                                            <div class="news_title_demo" style='padding:0px;border-bottom:none;' onclick='window.location.href="news.php?id=377"'>
                                                <div><img src="../xAdmin/rimg.php?id=24373" style="width:250px;height:130px;"></div>
                                                <h3 style='text-align:center;margin-top: 4%;color:black;padding:0px 10px;'>“世界记忆大师”造访新课堂网校</h3>
                                                <p style='padding: 0px 8px;'><p>5月13日，“世界记忆冠军”邹璐建与“世界脑力锦标赛国际一级裁判”晏军荣两位老师莅临新课堂网校，与新课堂网校老师们就如何训练孩子记忆力和思维能力进行深度研讨。</p></p>
                                                <p style='padding: 0px 8px;'>时间：2020-05-20</p>
                                            </div>
                                        </div> <div style="display:inline-flex;margin-right:2%;background:white;">
                                            <div class="news_title_demo" style='padding:0px;border-bottom:none;' onclick='window.location.href="news.php?id=370"'>
                                                <div><img src="../xAdmin/rimg.php?id=24261" style="width:250px;height:130px;"></div>
                                                <h3 style='text-align:center;margin-top: 4%;color:black;padding:0px 10px;'>新课网校积极响应国家卫健委号召：课程时间控制在2.5小时以内</h3>
                                                <p style='padding: 0px 8px;'><p>近日，国家卫健委发布了《儿童青少年新冠肺炎疫情期间近视预防指引（更新版）》，其中对线上学习时间做出明确限制。新课堂网线作为国内一线教育品牌，积极响应国家卫健委号召，将课程时间控制在2.5小时内，充分利用课堂里每一分钟，专为孩子讲解重点、难点。<br /><br /><br /></p></p>
                                                <p style='padding: 0px 8px;'>时间：2020-05-05</p>
                                            </div>
                                        </div>                    </ul>
                </div>
            </div>
        </div>
        <!--分享体验-->
        <div class="am-u-sm-12" style="background:#F8F8F8;margin-top:2%;padding-top:2%;padding-bottom:2%;text-align: center">
            <h1 style="font-size:2em;padding-bottom:1%;background: url(img/indexTitleline.png) no-repeat;background-position: center 100%;">新课堂学习之星</h1>
            <p style="color:grey;">通过新课堂的学习教育，同学们都在不同科目上取得优异的成绩</p>
            <div class="move" style="width:1000px;text-align:center;margin:0 auto;overflow:hidden;padding-top:2%;">
                <div style="width:1000px;text-align:center;margin:0 auto;display:inline-flex;position:relative;right:0%;">
                    <div style="width:20%;margin-right:4%;min-width:300px;height:600px;background:url(img/bg_phone.png) no-repeat;background-size:100% 100%;">
                              <img src="../xAdmin/rimg.php?id=9036" style="width:80%;position: relative;height:432px;top:11.5%;">
                           </div><div style="width:20%;margin-right:4%;min-width:300px;height:600px;background:url(img/bg_phone.png) no-repeat;background-size:100% 100%;">
                              <img src="../xAdmin/rimg.php?id=5473" style="width:80%;position: relative;height:432px;top:11.5%;">
                           </div><div style="width:20%;margin-right:4%;min-width:300px;height:600px;background:url(img/bg_phone.png) no-repeat;background-size:100% 100%;">
                              <img src="../xAdmin/rimg.php?id=5480" style="width:80%;position: relative;height:432px;top:11.5%;">
                           </div><div style="width:20%;margin-right:4%;min-width:300px;height:600px;background:url(img/bg_phone.png) no-repeat;background-size:100% 100%;">
                              <img src="../xAdmin/rimg.php?id=5487" style="width:80%;position: relative;height:432px;top:11.5%;">
                           </div><div style="width:20%;margin-right:4%;min-width:300px;height:600px;background:url(img/bg_phone.png) no-repeat;background-size:100% 100%;">
                              <img src="../xAdmin/rimg.php?id=8490" style="width:80%;position: relative;height:432px;top:11.5%;">
                           </div><div style="width:20%;margin-right:4%;min-width:300px;height:600px;background:url(img/bg_phone.png) no-repeat;background-size:100% 100%;">
                              <img src="../xAdmin/rimg.php?id=9043" style="width:80%;position: relative;height:432px;top:11.5%;">
                           </div>                </div>
            </div>
        </div>
    </div>
    <!--页面尾部-->
    <div style="width:100%;height:200px;background:#3F3F3F;padding-top:20px;color:white;text-align: center;" class="am-g">
                <div style="width:1020px;height:160px;padding-top:20px;display:inline-flex;text-align: center;font-size:12px;">
                    <img src="img/logo.png" style="width:120px;height:60px;">
                    <div class="footNav" style="margin-left:50px;">
                        <div>
                            <a style="color:white;" onclick="window.location.href='free_class.php'">体验视频</a>
                            <a style="color:white;" onclick="window.location.href='system.php'">课程体系</a>
                            <a style="color:white;" onclick="window.location.href='teacher.php'">名师荟萃</a>
                            <a style="color:white;" onclick="window.location.href='share.php?action=word'">意见反馈</a>
                            <a style="color:white;" onclick="window.location.href='news.php'">企业动态</a>
                            <a style="color:white;" onclick="window.location.href='find.php'">人才招聘</a>
                        </div>
                        <p style="text-align: left;">公司地址：江西省南昌市西湖区桃苑大街金源大厦A座18楼</p>
                        <p style="text-align: left;">版权所有 <span id='version' onclick="window.location.href='http://www.beian.miit.gov.cn'"></span></p>
                        <p style="text-align: left;">服务咨询热线: 400-600-4152</p>
                    </div>
                    <div style="margin-left:80px;">
                        <p style="margin-bottom:0px;">关注微信公众号</p>
                        <p style="margin-top:6px;"><img src="img/wechat.png" style="width:100px;height:100px;"></p>
                    </div>
                </div>
            </div>    <!--飘窗-->
        <div style="position:fixed;top:42%;right:0%;color: white;z-index:99;display:inline-flex;">
                    <div id="wechatEvm"
                         style="display:none;width:200px;height:200px;background:black;position:relative;top:60px;right:6px;">
                        <!--            <p style="color:grey;font-size:14px;text-align: center;">扫描二维码添加微信，即可在线咨询</p>-->
                        <img src="img/wechatEvm.jpg" style="width:200px;height:200px;">
                    </div>
                    <div id="appEvm"
                         style="display:none;width:200px;height:200px;background:transparent;position:relative;top:108px;right:6px;">
                        <img src="img/app.jpg" style="width:200px;height:200px;">
                    </div>
                    <div>
                        <div style="text-align: center;">
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2565238566&amp;site=qq&amp;menu=yes"
                               class="am-icon-qq"
                               style="color:white;font-size:32px;width: 80px;height: 80px;display: block;margin-bottom: 1px;background:#7EBAD9;cursor: pointer;outline: none;">
                                <p style="font-size:14px;">QQ咨询</p>
                            </a>
                        </div>
                        <div style="text-align: center;">
                            <a class="am-icon-weixin"
                               style="color:white;font-size:32px;width: 80px;height: 80px;display: block;margin-bottom: 1px;background:#58B265;cursor: pointer;outline: none;">
                                <p style="font-size:14px;">微信咨询</p>
                            </a>
                        </div>
                        <div style="text-align: center;">
                            <a class="am-icon-mobile am-icon-md" 
                               style="color:white;font-size:26px;width: 80px;height: 80px;display: block;margin-bottom: 1px;background:tomato;cursor: pointer;outline: none;">
                                <p style="font-size:14px;">下载APP</p>
                            </a>
                        </div>
                        <div style="text-align: center;">
                            <a onclick="to_other('logo')" class="am-icon-upload"
                               style="color:white;font-size:20px;width: 80px;height:60px;display: block;margin-bottom: 1px;background:grey;cursor: pointer;outline: none;">
                                <p style="font-size:14px;">返回顶部</p>
                            </a>
                        </div>
                    </div>
                </div></div>
</body>
<script>
    //  获取当前页面导航
    $(function () {
        $('.nav').children('li').eq(0).css({ 'color':'#F28203','border-bottom':'3px solid #F28203'})
    });

    //优秀老师轮播
    $(function(){
        var mySwiper = new Swiper('#swiper1',{
            effect : 'fade',
            loop: true,
            autoplay: {
                disableOnInteraction: false,
            },
//            autoplay:false,
            delay:5000,
            speed:3000,
        });
    });

    // 头部导航栏
    function to_index() {
                    window.location.href='index.php';
                }function to_freeVideo() {
                    window.location.href='free_class.php';
                }function to_system() {
                    window.location.href='system.php';
                }function to_teacher() {
                    window.location.href='teacher.php';
                }function to_share() {
                    window.location.href='share.php';
                }function to_news() {
                    window.location.href='news.php';
                }function to_find() {
                    window.location.href='find.php';
                }function to_about() {
                    window.location.href='about.php';
                }
    //   鼠标滚轮事件
    $(function () {
        $(document).scroll(function () {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > 1000 && scrollTop < 1600) {
//                $('#system_left').css({'opacity': '1', 'transition': '2s'});
//                $('#system_right').css({'opacity': '1', 'transition': '2s'});
            } else if (scrollTop > 1600 && scrollTop < 2200) {
//                console.log('到达老师模块');
                $('.teacher_title li').css({'left':'0%','transition':'2s'});
//                $('.pro').css({'opacity':'1','transition':'5s'});
            } else if (scrollTop < 300) {
                $('.fllow_nav').css({'height': '0px', 'line-height': '0px', 'opacity': '0', 'transition': '.5s'});
            } else {
                $('.fllow_nav').css({'height': '40px', 'line-height': '40px', 'opacity': '1', 'transition': '.5s'});
            }

        });
    });

    // 播放视频
    function createVideo(Url){
        var frag = document.createDocumentFragment();
        var iframe = document.createElement("iframe");
        iframe.setAttribute('src',Url);
        iframe.style.width = '80%';
        iframe.style.height = '80%';
        iframe.style.position = 'absolute';
        iframe.style.left = '8%';
        iframe.style.top = '12%';
        iframe.style.zIndex = '9999';
        frag.appendChild(iframe);
        document.getElementById("video").appendChild(frag);
        var object = document.getElementsByTagName("object")[0];
//        object.setAttributes('autoplay','false');
    }
    // 播放
    function playVideo(Url, Type) {
        $("#video:hidden").css("display", "block");
        createVideo(Url, Type);
    };
    // 关闭
    $("#close_video").on("click", function () {
//        var object = document.getElementsByTagName("object")[0];
//        var embed = document.getElementsByTagName("embed")[0];
//        object.setAttribute("ended", "ended");
        var iframe = document.getElementsByTagName('iframe')[0];
        iframe.parentNode.removeChild(iframe);
//        object.parentNode.removeChild(object);
        $("#video").css("display", "none");
    });

    //  视频播放3D轮播
    $(function () {
        certifySwiper = new Swiper('#certify .swiper-container', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 3,
            autoplay: {
                delay: 5000//5秒切换一次v
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                //clickable :true,
            },
            on: {
                progress: function (progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        translate = slideProgress * modify * 260 + 'px';
                        scale = 1 - Math.abs(slideProgress) / 5;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }

                }
            }

        })
    });

    //  跟随导航的跳转
    function href(address) {
        window.location.href = address;
    }

    //  聊天分享
    $('.move').mouseover(function(e){
        var X=e.pageX-$(this).offset().left; //获取当前鼠标相对img的X坐标
        if(X>=0&&X<530){
            $('.move').children().css({'right':'0%','transition':'8s'});
        }else if(X>=530) {
            $('.move').children().css({'right': '100%', 'transition': '8s'});
        }
//      else if(X>=530&&X<795){
//            $('.move').children().css({'right':'100%','transition':'16s'});
//        }else if(X>=795){
//            $('.move').children().css({'right':'100%','transition':'8s'});
//        }
    });
    $('.move').mouseout(function(){
        $('.move').children().css({'right':'0%'});
    });

    //  功能模块悬停
    $(function () {
        $("#free_class_title").hover(function () {
            $("#free_class_icon").attr("src", "img/events-icon1-active.png");
        }, function () {
            $("#free_class_icon").attr("src", "img/events-icon1.png");
        });
        $("#system_title").hover(function () {
            $("#system_icon").attr("src", "img/events-icon2-active.png");
        }, function () {
            $("#system_icon").attr("src", "img/events-icon2.png");
        });
        $("#teacher_title").hover(function () {
            $("#teacher_icon").attr("src", "img/events-icon3-active.png");
        }, function () {
            $("#teacher_icon").attr("src", "img/events-icon3.png");
        });
        $("#news_title").hover(function () {
            $("#news_icon").attr("src", "img/events-icon4-active.png");
        }, function () {
            $("#news_icon").attr("src", "img/events-icon4.png");
        });
    });

    // 课程体系
    var mySwiper = new Swiper('.swiper-containerSystem',{
        speed:1000,
        loop:false,
        autoplay:false,
        effect : 'cube',
        cubeEffect: {
            slideShadows: true,
            shadow: false,
            shadowOffset: 100,
            shadowScale: 0.6
        },
//        pagination: {
//            el: '.swiper-paginationSystem',
//            clickable :true,
//        },
    });
    // 了解课程体系按钮
    $('.btnSystem').hover(function (){
        $(this).css({'background':'tomato','color':'white'});
    },function(){
        $(this).css({'background':'white','color':'tomato'});
    });

    //  锚点
    function to_other(obj) {
        document.getElementById(obj).scrollIntoView();
    }
    //微信二维码悬停
    $('.am-icon-weixin').hover(function (){
        $('#wechatEvm').css({'transition':'1s','display':'block'})
    },function(){
        $('#wechatEvm').css({'transition':'1s','display':'none'})
    });
    //下载APP悬停
    $('.am-icon-mobile').hover(function (){
        $('#appEvm').css({'transition':'1s','display':'block'})
    },function(){
        $('#appEvm').css({'transition':'1s','display':'none'})
    });
</script>
</html>
