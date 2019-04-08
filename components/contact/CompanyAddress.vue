<template>
    <div class="address-wrap">
        <div class="address">
            <p class="name">中信消费金融有限公司</p>
            <p>公司地址：北京市朝阳区建国门外大街19号</p>
            <p>商务合作：wujing@citictrust.com.cn</p>
        </div>
        <div class="phone-wrap">
            <p class="title">客服联系信息</p>
            <p>客服热线：010 - 65995558（8:30 - 17:30）</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'company-address'
}
</script>

<style lang="scss" scoped>
    .address-wrap {
        overflow: hidden;
        width: 100%;
        height: 100%;
        color:rgba(52,52,52,1);
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;

        .address {
            float: left;
            
            p {
                height:22px;
                margin-top: 6px;
                line-height:22px;
            }
            .name {
                font-weight:600;
                margin-bottom: 10px;
            }
        }

        .phone-wrap {
            float: left;
            margin-left: 228px;

            p {
                height:22px;
                margin-top: 6px;
                line-height:22px;
            }
            .title {
                font-weight:600;
                margin-bottom: 10px;
            }
        }
    }
</style>
