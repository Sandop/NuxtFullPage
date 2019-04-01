<template>
    <section class="page" v-if="option" 
        :style="'background-image:url(\''+option.background+'\')'"      
        :class="{'page-before': option.index < currentPage,
                'page-after': option.index > currentPage,
                'page-current': option.index === currentPage}">
        <div class="page-box" :style="{background: option.backgroundColor}"   >
            <slot></slot>
        </div>
    </section>
    <section class="page" v-else>页面正在渲染中。。。</section>
</template>

<script>

    export default {
        name: 'page',
        props: {
            currentPage: Number
        },
        data (){
            return {
                option: null
            }
        },
        components: {
        }
    }
</script>

<style lang="scss" scoped>
    .page {
        overflow: hidden;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: center;
        background-repeat: no-repeat;
        transition: all 0.5s ease 0s;
        z-index: 1;

        .page-box {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;

        }
        &.page-before {
            z-index: 0;
            transform: translate3d(0, -100%, 0);
        }

        &.page-after {
            z-index: 0;
            transform: translate3d(0, 100%, 0);
        }
    }
</style>
