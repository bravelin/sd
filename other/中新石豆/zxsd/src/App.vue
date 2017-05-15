<style>
    @import './styles/page/index.css';
</style>
<template>
    <div>
        <div class="menu-wrap">
            <div>
                <div>
                    <div></div>
                    <h3>连接伙伴 共享未来</h3>
                </div>
                <ul>
                    <router-link :to="{name: 'home'}" tag="li"><a>首页</a></router-link>
                    <router-link :to="{name: 'game'}" tag="li"><a>游戏</a></router-link>
                    <router-link :to="{name: 'video'}" tag="li"><a>视频</a></router-link>
                    <router-link :to="{name: 'about'}" tag="li"><a>关于我们</a></router-link>
                </ul>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <spinner v-show="global.loading"></spinner>
    </div>
</template>
<script>
    import Spinner from './components/spinner'
    import { Global } from './libs/global'

    module.exports = {
        data: function () {
            return {
                global: Global
            }
        },
        components: {
            spinner: Spinner
        },
        mounted: function () {
            var that = this
            that.$nextTick(function () {
                that.global.loading = true
            })
        }
    }
</script>
