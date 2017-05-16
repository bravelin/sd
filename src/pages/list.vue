<style>
    @import '../styles/page/list.css';
</style>
<template>
    <div id="list-page" class="page-section" :style="{ 'min-height': (global.winHeight - 60)+'px' }">
        <div class="wrap">
            <div class="clear-fix">
                <div class="left">
                    <h3>热门分类</h3>
                    <ul class="clear-fix">
                        <li><img />abc</li>
                        <li><img />abc</li>
                        <li><img />abc</li>
                        <li><img />abc</li>
                        <li><img />abc</li>
                        <li><img />abc</li>
                    </ul>
                </div>
                <div class="right">
                    <h3>精彩推荐</h3>
                    <ul>
                        <li><img /><div>1111</div><div>232323232323232323232323232323</div></li>
                        <li><img /><div>1111</div><div>2222</div></li>
                        <li><img /><div>1111</div><div>2222</div></li>
                        <li><img /><div>1111</div><div>2222</div></li>
                    </ul>
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
