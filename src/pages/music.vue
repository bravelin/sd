<style>
    @import '../styles/page/music.css';
</style>
<template>
    <div id="music-page" :style="{ 'min-height': (global.winHeight - 60)+'px' }">
        <div class="wrap clear-fix">
            <div class="left">
                <h3>热门榜单</h3>
                <ul>
                    <li v-for="(item,index) in bankList" @click="doClickBank(index, item)" :class="{active:index==selectedBank}">{{item.name}}</li>
                </ul>
            </div>
            <div class="right">
                <h3>{{currBankName}}<span>2017-05-20更新</span><a>播放全部</a></h3>
                <ul>
                    <li v-for="(item, index) in dataList" @click="doClickMusic(item, index)">
                        <div :class="{active: item.isChecked}"></div>
                        <span>{{index+1}}</span>
                        <span>{{item.author + ' - ' + item.name}}</span>
                        <span>{{item.time}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-wrap">Copyright © 2017 中新石豆传媒技术有限公司<a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17041476号</a></div>
    </div>
</template>
<script>
    import { Global } from '../libs/global'
    import Vue from 'vue'

    module.exports = {
        data: function () {
            return {
                global: Global,
                selectedBank: 0,
                currBankName: '红豆飙升榜',
                bankList: [
                    {name: '红豆飙升榜'},
                    {name: '网络红歌榜'},
                    {name: 'DJ热歌榜'},
                    {name: '华语新歌榜'},
                    {name: '欧美新歌榜'},
                    {name: '韩国新歌榜'},
                    {name: '日本新歌榜'},
                    {name: '英国新歌榜'},
                    {name: '原唱音乐榜'},
                    {name: '粤语新歌榜'},
                    {name: '红豆分享榜'},
                    {name: '校园音乐榜'},
                    {name: '金曲捞榜'},
                    {name: '中国TOP排行榜'}
                ],
                dataList: [
                    {isChecked: false, author: 'Alan Walker、Gavin James', name: 'Tired', time: '3:12'},
                    {isChecked: false, author: '林宥嘉', name: '船', time: '4:23'},
                    {isChecked: false, author: '唐古', name: '心慌', time: '3:47'},
                    {isChecked: false, author: 'Katy Perry、Nicki Minaj', name: 'Swish Swish', time: '4:02'},
                    {isChecked: false, author: '带泪的鱼', name: '怎么还是没有时间陪我', time: '5:07'},
                    {isChecked: false, author: '宁心', name: '蒹葭', time: '2:33'},
                    {isChecked: false, author: '夏婉安', name: '习惯', time: '4:47'},
                    {isChecked: false, author: '张信哲、伍思凯', name: '特别的爱给特别的你 (Live)', time: '3:56'},
                    {isChecked: false, author: '庄心妍', name: '他说的谎', time: '4:10'},
                    {isChecked: false, author: 'Selena Gomez', name: 'Bad Liar', time: '3:34'},
                    {isChecked: false, author: '晓依', name: '1314', time: '4:17'},
                    {isChecked: false, author: '谭维维', name: '为了爱的人', time: '5:07'},
                    {isChecked: false, author: '曾沛慈', name: '我爱你', time: '4:45'},
                    {isChecked: false, author: '陈一发儿', name: '谢谢你的爱', time: '3:54'},
                    {isChecked: false, author: '李宇春', name: '情书', time: '3:57'},
                    {isChecked: false, author: '杨宗纬', name: '天龙八部', time: '4:39'},
                    {isChecked: false, author: '高安、郑莉莉', name: '你是我最难舍的人', time: '5:19'},
                    {isChecked: false, author: '王啸坤、范伟、赵英俊', name: '超级舞林', time: '3:05'},
                    {isChecked: false, author: '汪苏泷', name: '我的小女友', time: '2:46'},
                    {isChecked: false, author: '张翰、俞灏明、魏晨、朱梓骁', name: '让我为你唱首歌', time: '4:06'},
                    {isChecked: false, author: '六哲', name: '想你的苦', time: '3:40'}
                ]
            }
        },
        methods: {
            doClickBank: function (index, item) {
                this.selectedBank = index
                this.currBankName = item.name
            },
            doClickMusic: function (item, index) {
                item.isChecked = !item.isChecked
                Vue.set(this.dataList, index, item)
            }
        }
    }
</script>
