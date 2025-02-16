<script lang="ts">
    import { base } from "$app/paths";
    import { masterThesisLink, sourceCodeLink } from "$lib/data/links";
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
        <Button href={sourceCodeLink}>
            <GitHubIcon slot="icon" />
            Source code
        </Button>
    </div>
</section>

<section class="container" id="grid">
    <Button href="{base}/number-guessing">Number guessing</Button>

    <Button href={masterThesisLink}>
        <ExternalLinkIcon slot="icon" />
        Master thesis
    </Button>
</section>

<style lang="scss">
    #hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        position: relative;
        padding: 50px 0;
        min-height: 600px;

        .hello {
            text-align: center;
            width: 90%;
        }

        .intro {
            font-weight: 500;
            font-size: 1.4rem;
            width: min(90%, 440px);
            display: flex;
            flex-direction: column;

            .left {
                text-align: left;
            }
            .right {
                text-align: right;
            }
        }

        .ctas {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
        }
    }

    #grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
        justify-items: center;
        gap: 50px;
        margin: 0 auto;
        width: 90%;
        padding-bottom: 50px;
    }
</style>
