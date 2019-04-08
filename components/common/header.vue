<template>
    <div class="header-wrap">
        <div class="header">
            <div class="header-box">
                <div class="header-logo">
                    <img src="~/assets/images/common/hlogo.png" alt="中信消费金融">
                </div>
                <div class="header-nav">
                    <ul>
                        <li class="nav-list">
                            <nuxt-link to="/">首页</nuxt-link>
                        </li>
                        <li class="nav-list">
                            <nuxt-link to="/contact">联系方式</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VHeader' 
    }
</script>

<style lang="scss" scoped>
    .header-wrap {
        overflow: hidden;
        width: 100%;
        height: 110px;
        text-align: center;

        .header {
           position: fixed;
            top: 0;
            width: 100%;
            height: 110px;
            background: #fff;
            z-index: 666;

            .header-box {
                overflow: hidden;
                width: 1200px;
                height: 100%;
                margin: 0 auto;

                .header-logo {
                    float: left;
                    width: 229px;
                    height:50px;
                    margin-top: 30px;
                    margin-left: 18px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .header-nav {
                    float: right;
                    margin-top: 35px;
                    margin-right: 18px;

                    ul {
                        overflow: hidden;

                        li.nav-list {
                            float: left;
                            min-width: 80px;
                            height: 30px;
                            margin: 5px 0 5px 30px; 
                            line-height: 30px;

                            a {
                                position: relative;
                                font-size: 14px;
                                font-family:PingFangSC-Regular;
                                font-weight:400;
                                color:rgba(54,54,54,1);

                                &.nuxt-link-exact-active {
                                    font-size: 18px;
                                    font-family:PingFangSC-Semibold;
                                    font-weight:600;

                                    &:after {
                                        content: '';
                                        position: absolute;
                                        bottom: -7px;
                                        left: 50%;
                                        width: 33px;
                                        height: 2px;
                                        background: #ff5858;
                                        border-radius: 6px;
                                        transform: translateX(-50%);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

