<script>
    import { base } from "$app/paths";
    import Button from "$lib/components/atoms/Button.svelte";
    import GitHubIcon from "$lib/icons/github.svelte";
    import ExternalLinkIcon from "$lib/icons/external-link.svelte";
</script>

<section id="hero">
    <h1 class="hello">Welcome to my website!</h1>
    <p class="intro">
        <span class="left">It makes use of SvelteKit,</span>
        <span class="right">and it is really fast.</span>
    </p>
    <div class="ctas">
        <Button href="https://github.com/dastrm/dastrm.github.io">
            <GitHubIcon slot="icon" />
            Source code
        </Button>
    </div>
</section>

<section class="container" id="grid">
    {#each { length: 5 }}
        <div><Button href="{base}/article">Article</Button></div>
    {/each}
    {#each { length: 10 }}
        <Button href="https://doi.org/10.3929/ethz-b-000679573">
            <ExternalLinkIcon slot="icon" />
            Master thesis
        </Button>
    {/each}
    {#each { length: 5 }}
        <div><Button href="{base}/article">Article</Button></div>
    {/each}
</section>

<style lang="scss">
    //@use "$lib/scss/_breakpoints.scss" as bp;

    #hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
        position: relative;
        padding: 50px 0;

        .hello {
            text-align: center;
        }

        .intro {
            font-weight: 500;
            font-size: 1.4rem;
            width: min(100%, 440px);
            display: flex;
            flex-direction: column;

            .left {
                text-align: left;
            }
            .right {
                text-align: right;
            }

            /*@include bp.for-phone-only {
                display: none;
            }*/
        }

        .ctas {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            padding-bottom: 150px;
        }
    }

    #grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
        justify-items: center;
        gap: 50px;
        margin: 0 auto;
        padding-bottom: 50px;
    }
</style>
