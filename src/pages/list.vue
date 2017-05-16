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
                        <li><img src="/static/video/1-1.jpg"/>星际争霸对抗</li>
                        <li><img src="/static/video/1-2.jpg"/>帝国时代2</li>
                        <li><img src="/static/video/1-3.jpg"/>穿越火线</li>
                        <li><img src="/static/video/2-1.jpg"/>魔兽争霸</li>
                        <li><img src="/static/video/2-2.jpg"/>英雄联盟精英赛</li>
                        <li><img src="/static/video/2-3.jpg"/>王者荣耀</li>
                    </ul>
                </div>
                <div class="right">
                    <h3>精彩推荐</h3>
                    <ul>
                        <li><img src="/static/list/1.png"/><div>裁决之地</div><div>注重PK的即时战斗</div></li>
                        <li><img src="/static/list/2.png"/><div>帝尊</div><div>极致3D第一动作</div></li>
                        <li><img src="/static/list/3.png"/><div>口袋妖怪联盟</div><div>打造最具诚意的对战</div></li>
                        <li><img src="/static/list/4.png"/><div>神魔</div><div>纯手绘的场景与人物</div></li>
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
