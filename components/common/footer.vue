<template>
    <div class="footer-wrap">
       <div class="footer">
           <div class="footer-left">
               <div class="company-name">
                   <div class="company-cn">中信消费金融有限公司</div>
                   <div class="company-en">CITIC Consumer Finance Co., Ltd.</div>
               </div>
               <div class="footer-copy">
                   <ul>
                       <li class="list">京ICP备 15019090号</li>
                       <li class="list">京公网安备 44030502001114号</li>
                   </ul>
               </div>
           </div>
           <div class="footer-right">
               <ul>
                   <!-- <li class="list">招贤纳士</li> -->
               </ul>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'VFooter' 
    }
</script>

<style lang="scss" scoped>
    .footer-wrap {
        overflow: hidden;
        width: 100%;
        height: 164px;
        color:rgba(52,52,52,1);
        background: #fff;

        .footer {
            overflow: hidden;
            width: 1200px;
            height: 100%;
            margin: 0 auto;

            .footer-left {
                float: left;
                margin-left: 18px;
                text-align: left;

                .company-name {
                    padding-top: 51px;

                    .company-cn {
                        height:22px;
                        font-size:16px;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        line-height:22px;
                    }
                    .company-en {
                        height:14px;
                        margin-top: 2px;
                        font-size:10px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        line-height:14px;
                    }
                }

                .footer-copy {
                    margin-top: 11px;

                    ul {
                        overflow: hidden;

                        .list {
                            float: left;
                            height:14px;
                            margin-right: 34px;
                            font-size:10px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            line-height:14px;
                        }
                    }
                }
            }

            .footer-right {
                float: right;
                height: 100%;
                margin-right: 18px;

                ul {
                    overflow: hidden;

                    .list {
                        float: left;
                        height:100%;
                        margin-left: 55px;
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        line-height:164px;
                    }
                }
            }
        }
    }
</style>
