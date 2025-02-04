<script lang="ts">
    import { base } from "$app/paths";
    import Logo from "$lib/components/atoms/Logo.svelte";
    import ThemeToggle from "$lib/components/molecules/ThemeToggle.svelte";

    export let showBackground = false;
</script>

<header class:has-background={showBackground}>
    <nav class="container">
        <a class="logo" href="{base}/" aria-label="Site logo">
            <Logo />
        </a>
        <div class="filler"></div>
        <div class="links">
            <ThemeToggle />
        </div>
    </nav>
</header>

<style lang="scss">
    @use "$lib/scss/_breakpoints.scss" as bp;

    header {
        position: relative;
        padding: 30px 0;

        @include bp.for-phone-only {
            padding: 20px 0;
        }

        &.has-background {
            background: linear-gradient(
                60deg,
                var(--color--waves-start) 0%,
                var(--color--waves-end) 100%
            );
        }

        .container {
            display: flex;
            align-items: center;
        }

        .logo {
            height: 44px;
            filter: drop-shadow(0px 0px 6px var(--color--text-inverse));
            &:hover {
                color: var(--color--primary);
                filter: drop-shadow(0px 0px 1px var(--color--text-inverse));
            }
        }

        .filler {
            flex: 1;
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 30px;
        }
    }
</style>
