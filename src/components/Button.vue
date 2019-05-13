<template>
    <a v-if="type === 'link'" :href="href" class="button button--base">{{text}}</a>

    <button v-else-if="type === 'button'" class="button button--base">{{text}}</button>

    <button v-else-if="type === 'slot'" class="button button--slot">
        <div class="button__text" v-html="text"></div>
        <slot>
            
        </slot>
    </button>
    
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        href: {
            type: String,
        }
    }
}
</script>
<style lang="scss">
    @import "../scss/main.scss";

    .button{
        position: relative;
        line-height: 50px;
        border: 1px solid #ffffff;
        border-radius: 2px;
        @include fontStyle(1.8rem, 2.4rem, $color-white);
        @include oswald-r;
        text-decoration: none;
        padding: 0 23px;
        overflow: hidden;
        background: transparent;
        transition: all .3s ease-out;

        &:hover{

            .button__text{
                transform: translateY(-100px)
            }

            .button__ico-wrap{
                opacity: 1;
            }
        }

        &__text{
            position: absolute;
            top: 0;
            left:0;
            width: 100%;
            z-index: 10;
            transition: all .4s ease;
        }

        &__ico-wrap{
            position: relative;
            top: 2px;
            z-index: 5;
            opacity: 0;
        }

        &__ico{
            width: 22px;
            height: 22px;
        }
    }

    .button--base{
        transition: all .3s ease-out;

        &:hover{
            background: $color-pink;
        }

    }
</style>

