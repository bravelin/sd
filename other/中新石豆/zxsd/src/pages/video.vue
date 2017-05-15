<style>
    @import '../styles/page/video.css';
</style>
<template>
    <div id="video-page" :style="{ 'min-height': (global.winHeight - 60)+'px' }">
        <div class="wrap pad">
            <div class="video">
                <video ref="v1" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="metadata" width="100%" height="100%" data-setup="{}" poster="/static/img/video/1.jpg">
                    <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="wrap blue">
            <div class="content">地球表面被各大陆地分隔为彼此相通的广大水域称为海洋，其总面积约为3.6亿平方公里，约占地球表面积的71%，平均水深约3795m。海洋中含有十三亿五千多万立方千米的水，约占地球上总水量的97%，而可用于人类饮用只占2%。地球四个主要的大洋为太平洋、大西洋、印度洋、北冰洋，大部分以陆地和海底地形线为界。目前为止，人类已探索的海底只有5%，还有95%大海的海底是未知的。</div>
        </div>
        <div class="wrap pad">
            <div class="video">
                <video ref="v2" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="metadata" width="100%" height="100%" data-setup="{}">
                    <source src="/static/video/1.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="wrap blue">
            <div class="content">地三鲜是一道最普通也最受欢迎的东北菜。
                原来我几乎每次去东北菜馆都会点，因为里面的三种食材都是我的最爱。
                油炸之后的土豆尤其好吃。
                味道虽然好，可是因为都先要油炸，所以不够符合现在的健康标准。
                含油量高的素菜，热量比肉类还要高。
                怎样能做出油量少，味道又不打折扣的地三鲜呢？
                关键就是处理好最吸油的茄子。
                只要能够让茄子少挂油，就可以减少这道菜一半以上的油分。
                应该怎么做呢？
                慢慢往下看吧。</div>
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
        },
        mounted: function () {
            var that = this
            that.$nextTick(function () {
                videojs(that.$refs.v1)
                videojs(that.$refs.v2)
            })
        }
    }
</script>
