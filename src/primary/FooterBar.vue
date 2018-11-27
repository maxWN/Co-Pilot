<template>
    <div class="footer-bar fixed-bottom bg-info text-light">
        <slot class="footer-bar-interior">
            Advertised content...
        </slot>
    </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style lang="scss" scoped>
.footer-bar {
    height: 3rem;
    width: 100%;
    padding-top: .5rem;
    .footer-bar-interior {
        text-align: center;
    }
}
</style>
