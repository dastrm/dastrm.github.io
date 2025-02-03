<script>
    import { base } from "$app/paths";
</script>

<div class="logo">
    <img alt="Author logo" src="{base}/icons/favicon.svg" width="50" />
</div>

<style lang="scss">
    @import "$lib/scss/breakpoints.scss";

    .logo {
        width: auto;
        height: 100%;

        display: flex;
        gap: 16px;
        align-items: center;

        @include for-phone-only {
            gap: 8px;
        }
    }
</style>
