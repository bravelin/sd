<style>
    @import '../styles/page/list.css';
</style>
<template>
    <div id="list-page" class="page-section" :style="{ 'min-height': (global.winHeight - 60)+'px' }">
        <div class="wrap t1">
            <div></div>
        </div>
        <div class="wrap t2">
            <div>
                <h3>热门游戏解说</h3>
                <ul class="clear-fix">
                    <li><div>MSI季中冠军赛小组赛第五日比赛重播</div></li>
                    <li><div>小张的直播间：8500单排</div></li>
                    <li><div>小伙子，你这什么枪啊</div></li>
                </ul>
            </div>
        </div>
        <div class="wrap t3">
            <div>
                <div class="left">
                    <h3>往期热播视频回顾</h3>
                    <ul>
                        <li><div>穿越火线</div></li>
                        <li><div>星际争霸</div></li>
                        <li><div>王者荣耀</div></li>
                    </ul>
                </div>
                <div class="right">
                    <h3>热门游戏</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
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
