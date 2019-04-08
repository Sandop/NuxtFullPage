<template>
    <div class="wrap">
        <div class="box">
            <div class="img">
                <img src="~/assets/images/common/404.png" alt="">
            </div>
            <div class="dot">
                <ul>
                    <li></li>
                    <li class="color-light"></li>
                    <li class="color-grey"></li>
                    <li class="color-red"></li>
                    <li class="color-grey"></li>
                    <li class="color-light"></li>
                    <li></li>
                </ul>
            </div>
            <div class="desc">
                <p class="cn">不要着急，页面不小心迷路了</p>
                <p class="en">Don't worry. It got lost carelessly.</p>
                <p class="methods">刷新或者返回首页试试看</p>
            </div>
            <div class="tohome-wrap">
                <nuxt-link to="/" class="refresh">
                    <div class="img">
                        <img src="~/assets/images/common/left_arr.png" alt="">
                    </div>
                    <div class="word">返回首页</div>
                </nuxt-link>
                <div class="refresh" @click="refresh">
                    <div class="img">
                        <img src="~/assets/images/common/refresh.png" alt="">
                    </div>
                    <div class="word">刷新</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'not-found',
        methods: {
            refresh (){
                window.location.reload()
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrap {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;

        .box {
            
            .img{
                overflow: hidden;
                width: 343px;
                height: 125px;
                margin: 0 auto;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .dot {
                overflow: hidden;
                margin: 40px auto;

                ul {
                    display: flex;
                    overflow: hidden;
                    justify-content: center;
                    align-items: center;

                    li {
                        width: 20px;
                        height: 20px;
                        margin: 0 2px;
                        border-radius: 50%;
                        background:rgba(234,234,234,1);

                        &.color-light {
                            background:rgba(226,226,226,1);
                        }
                        &.color-grey {
                            background:rgba(211,211,211,1);
                        }
                        &.color-red {
                            background:rgba(153,71,70,1);
                        }
                    }
                }
            }

            .desc {
                color:rgba(147,147,147,1);
                font-family:PingFangSC-Regular;
                font-weight:400;
                text-align: center;

                .cn {
                    height:33px;
                    font-size:24px;
                    line-height:33px;
                }

                .en {
                    height:28px;
                    font-size:20px;
                    line-height:28px;
                }

                .methods {
                    height:29px;
                    margin-top: 16px;
                    font-size:21px;
                    color:rgba(52,52,52,1);
                    line-height:29px;
                }                
            }

            .tohome-wrap {
                display: flex;
                margin-top: 110px;
                justify-content: center;
                align-items: center;   

                .refresh {
                    display: flex;
                    margin: 0 35px;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    .img {
                        overflow: hidden;
                        width: 26px;
                        height: 26px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .word {
                        font-size:20px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(153,71,70,1);
                        line-height:26px;

                    }
                }
            }
        }
    }
</style>
