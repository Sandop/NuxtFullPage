<template>
    <div class="list-wrap">
        <div class="img-wrap">
            <div class="img">
                <img :src="pageTwoCon.img" alt="">
            </div>
        </div>
        <div class="title">
            <p class="title-cn">{{pageTwoCon.titleCn}}</p>
            <p class="title-en">{{pageTwoCon.titleEn}}</p>
        </div>
        <div class="content">
              <ul>
                  <li v-for="(list,index) in pageTwoCon.content" :key="index">
                      <p>{{list}}</p>
                  </li>
              </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-two-list',
    props: {
        pageTwoCon: Object
    }
}
</script>

<style lang="scss" scoped>
    .list-wrap {
        width: 293px;
        height: auto;
        color: #fff;

        .img-wrap {
            width: 80px;
            height: 80px;
            margin: 0 auto;

            .img {
                overflow: hidden;
                width: 100%;
                height: 100%;
                border-radius: 50%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .title {
            width: 100%;
            height: auto;
            padding: 17px 0;
            text-align: center;

            .title-cn {
                height:22px;
                font-size:16px;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                line-height:22px;
            }
            .title-en {
                height: 17px;
                margin-top: 2px; 
                font-size: 12px;
                font-family: PingFangSC-Light;
                font-weight: 300;
                line-height: 17px;
            }
        }

        .content {
            width: 100%;
            height: auto;
            font-size:14px;
            font-family:PingFangSC-Light;
            font-weight:300;
            line-height:20px;
            letter-spacing:2px;
            text-align: left;
        }
    }
</style>
