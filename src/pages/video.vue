<style>
    @import '../styles/page/video.css';
</style>
<template>
    <div id="video-page" :style="{ 'min-height': (global.winHeight - 60)+'px' }">
        <div class="wrap blue">
            <div class="content clear-fix">
                <h2>近期最热</h2>
                <div class="item">
                    <img src="/static/video/1-1.jpg"/>
                    <div>
                        <img src="/static/video/1.jpg"/>
                        <div>星际争霸对抗<span>游戏竞技</span></div>
                        <div>隐约的吃货</div>
                    </div>
                </div>
                <div class="item">
                    <img src="/static/video/1-2.jpg"/>
                    <div>
                        <img src="/static/video/2.jpg"/>
                        <div>帝国时代2<span>热门推荐</span></div>
                        <div>马超</div>
                    </div>
                </div>
                <div class="item">
                    <img src="/static/video/1-3.jpg"/>
                    <div>
                        <img src="/static/video/3.jpg"/>
                        <div>穿越火线<span>游戏竞技</span></div>
                        <div>月亮之上</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap pad">
            <div class="content clear-fix">
                <h2>游戏解说</h2>
                <div class="item">
                    <img src="/static/video/2-1.jpg"/>
                    <div>
                        <img src="/static/video/4.jpg"/>
                        <div>魔兽争霸<span>游戏竞技</span></div>
                        <div>吃遍中国</div>
                    </div>
                </div>
                <div class="item">
                    <img src="/static/video/2-2.jpg"/>
                    <div>
                        <img src="/static/video/5.jpg"/>
                        <div>英雄联盟精英赛<span>游戏竞技</span></div>
                        <div>干了这杯酒</div>
                    </div>
                </div>
                <div class="item">
                    <img src="/static/video/2-3.jpg"/>
                    <div>
                        <img src="/static/video/6.jpg"/>
                        <div>王者荣耀<span>游戏竞技</span></div>
                        <div>我爱着你</div>
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
        },
        mounted: function () {
        }
    }
</script>
