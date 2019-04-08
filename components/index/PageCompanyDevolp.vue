<template>
    <div class="devolp-list">
        <div class="num">{{compDev.num}}</div>
        <div class="content">
            <div class="time">{{compDev.time}}</div>
            <div class="title">{{compDev.title}}</div>
            <div class="desc">{{compDev.desc}}</div>
        </div>
        <div class="arrow" v-if="compDev.arrow">
            <div class="arrow1"></div>
            <div class="arrow2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-company-devolp',
    props: {
        compDev: Object,
            
    }
}
</script>

<style lang="scss" scoped>
    .devolp-list {
        position: relative;
        overflow: hidden;
        width: 352px;
        height: auto;

        .num {
            float: left;
            overflow: hidden;
            width:20px;
            height:20px;
            background:rgba(154,71,69,1);
            color: #fff;
            font-size:10px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            line-height: 20px;
            text-align: center;
            border-radius: 50%;
        }

        .content {
            overflow: hidden;
            width: 273px;
            padding-left: 25px;
            text-align: left;

            .time {
                overflow: hidden;
                width: 100%;
                height:20px;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                line-height:20px;
                letter-spacing:2px;
            } 
            .title {
                overflow: hidden;
                width: 100%;
                height:22px;
                margin-top: 8px;
                font-size:16px;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                line-height:22px;
                letter-spacing:3px;
            }
            .desc {
                overflow: hidden;
                width: 100%;
                height: 97px;
                margin-top: 12px;
                font-size:14px;
                font-family:PingFangSC-Light;
                font-weight:300;
                line-height:20px;
                letter-spacing:2px;
            }
        }

        .arrow {
            position: absolute;
            top: 57px;
            right: 0;
            width: 22px;
            height: 22px;

            .arrow1 {
                position: absolute;
                top: 2px;
                left: -10px;
                width: 18px;
                height: 18px;
                border: rgba(154, 71, 69, 0.7) 1px solid;
                transform: rotate(-45deg);
                border-top: transparent;
                border-left: transparent;
            }
            .arrow2 {
                position: absolute;
                top: 2px;
                left: -1px;
                width: 18px;
                height: 18px;
                border: rgba(154, 71, 69, 0.4) 1px solid;
                transform: rotate(-45deg);
                border-top: transparent;
                border-left: transparent;
            }
        }
    }
</style>
