<style>
    @import '../styles/page/home.css';
</style>
<template>
    <div id="home-page" class="page-section">
        <div class="wrap-bg" :style="{ height: (global.winHeight - 60)+'px' }">
            <div class="wrap">
                <h1>公司简介</h1>
                <div id="news-wrap">
                    <div>
                        <div class="mask"><span></span></div>
                    </div>
                    <div>
                        <h3>深圳市中新石豆传媒技术有限公司隶属于深圳市石豆软件技术有限公司控股子公司，是一家专业从事互联网技术开发及运营的互联网企业。业务以互联网平台运营为主，旗下包含手机游戏运营，软件分发等项目。<router-link :to="{name: 'about'}">更多介绍>></router-link></h3>
                    </div>
                    <div>
                        <div class="mask"><span></span></div>
                    </div>
                    <div>
                        <div class="mask"><span></span></div>
                    </div>
                    <div>
                        <div class="mask"><span></span></div>
                    </div>
                    <div>
                        <div class="mask"><span></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-wrap">Copyright © 2017 中新石豆传媒技术有限公司<a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17041476号</a></div>
    </div>
</template>
<script>
    import { Global } from '../libs/global'

    module.exports = {
        data: function () {
            return {
                global: Global
            }
        }
    }
</script>
