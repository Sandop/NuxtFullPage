<template>
    <div class="box">
        <div class="title">
            <p class="title-cn">中信消费金融有限公司</p>
            <p class="title-en">CITIC Consumer Finance Co.,Ltd.</p>
        </div>
        <div class="content">
            <p class="company">中信消费金融有限公司是经中国银保监会批准，由中国中信有限公司、中信信托有限责任公司</p>
            <p class="company">以及金蝶软件（中国）有限公司共同组建的持牌消费金融公司;</p>
            <p class="company">中信消费金融将致力于为客户提供优质、高效的普惠金融服务</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-one'
    }
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    color:rgba(255,255,255,1);
    text-align: center;

    .title {

        .title-cn {
            height:45px;
            font-size:32px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            line-height:45px;
        }

        .title-en {
            height:22px;
            margin-top: 4px;
            font-size:16px;
            font-family:PingFangSC-Light;
            font-weight:300;
            line-height:22px;
        }
    }

    .content {
        width: 100%;
        height: auto;
        margin-top: 60px;

        .company {
            height:22px;
            margin: 6px 0;
            font-size:16px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            line-height:22px;
            letter-spacing:3px;
        }
    }
}
    
</style>

