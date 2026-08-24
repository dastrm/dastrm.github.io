<script lang="ts">
    import { base } from "$app/paths";
    import {
        masterThesisLink,
        ppmAnalysisLink,
        sourceCodeLink,
    } from "$lib/data/links";
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
    <Button href={masterThesisLink}>
        <ExternalLinkIcon slot="icon" />
        Master thesis
    </Button>

    <Button href="{base}/number-guessing">Number guessing</Button>

    <Button href={ppmAnalysisLink}>
        <ExternalLinkIcon slot="icon" />
        PPM analysis
    </Button>
</section>

<style lang="scss">
    #hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: clamp(16px, 3vw, 25px);
        position: relative;
        padding: clamp(30px, 5vw, 50px) 0;
        min-height: var(--hero-min-height);

        .hello {
            text-align: center;
            width: 90%;
        }

        .intro {
            font-weight: 500;
            font-size: clamp(1.1rem, 0.85rem + 1.15vw, 1.4rem);
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
        grid-template-columns: repeat(auto-fit, minmax(min(155px, 100%), 1fr));
        justify-items: center;
        gap: clamp(20px, 4vw, 50px);
        margin: 0 auto;
        width: 90%;
        padding-bottom: clamp(30px, 5vw, 50px);
    }
</style>
