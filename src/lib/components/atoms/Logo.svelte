<script>
    import { base } from "$app/paths";
</script>

<div class="logo">
    <img alt="Author logo" src="{base}/icons/favicon.svg" width="50" />
</div>

<style lang="scss">
    @use "$lib/scss/_breakpoints.scss" as bp;

    .logo {
        width: auto;
        height: 100%;

        display: flex;
        gap: 16px;
        align-items: center;

        @include bp.for-phone-only {
            gap: 8px;
        }
    }
</style>
