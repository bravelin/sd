<style>
    @import '../styles/page/home.css';
</style>
<template>
    <div id="home-page" class="page-section">
        <div class="wrap-bg" :style="{ height: (global.winHeight - 60)+'px' }">
            <div class="wrap">
                <h1>点滴石豆 因你而精彩</h1>
                <div id="news-wrap">
                    <div>
                        <div class="mask"><span>专家指导</span></div>
                    </div>
                    <div>
                        <h2>"连接伙伴，共享未来"</h2>
                        <h3>中新石豆亮相第十一届文博会博得喝彩</h3>
                    </div>
                    <div>
                        <div class="mask"><span>现场讲解</span></div>
                    </div>
                    <div>
                        <div class="mask"><span>93WiFi覆盖会场</span></div>
                    </div>
                    <div>
                        <div class="mask"><span>石豆亮相第十一届文博会</span></div>
                    </div>
                    <div>
                        <div class="mask"><span>总结报告</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-wrap">Copyright © 2017 中新石豆</div>
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
