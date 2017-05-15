<style>
    @import '../styles/page/game.css';
</style>
<template>
    <div id="game-page" class="page-section" :style="{ 'min-height': (global.winHeight - 60)+'px' }">
        <div class="wrap">
            <div class="list">
                <h3 class="m1">梦幻西游（新）</h3>
                <ul class="clear-fix m1">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p>《梦幻西游漫画版》是由网易携手上海漫唐堂文化传播有限公司倾力打造的作品，漫画讲述了大唐弟子凌霄的成长故事，所有设定都贴合了游戏背景.游戏中的十二大主角，在漫画的世界演绎一段跨越三界的爱恨情仇。 五百年前，仙魔大战，心魔滋生，蚩尤邪神伺机解除封印，玄彩娥临危受命，收集上古灵符。</p>
            </div>
        </div>
        <div class="wrap blue">
            <div class="list">
                <h3 class="m2">新花千骨（花小骨）</h3>
                <ul class="clear-fix m2">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p>《新花千骨》是一款大型Q版创新回合制MMORPG仙侠手游大作，由Fresh果果同名小说正版授权，完美还原小说剧情。游戏以一人多宠、激情PK为核心玩法，并增添结局后的故事剧情。不断增添的PK模式，运镖、护送神兽、收集十方神器等等让你玩转回合、驰骋天地！神翼养成系统，以及拉风坐骑让你与众不同。还有钓鱼、答题、猜拳等休闲娱乐玩法。新创师徒系统，语音聊天，萌妹男神任你选。不断提升战力，试问天下谁主沉浮！</p>
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
