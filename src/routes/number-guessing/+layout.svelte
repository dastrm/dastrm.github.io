<script lang="ts">
    import Header from "$lib/components/organisms/Header.svelte";
    import Footer from "$lib/components/organisms/Footer.svelte";

    import { description, image, keywords, title } from "$lib/data/meta";
    import { websiteLink } from "$lib/data/links";

    let fullTitle = "Number Guessing - " + title;
</script>

<svelte:head>
    <link rel="“canonical”" href={websiteLink} />
    <meta name="keywords" content={keywords.join(", ")} />

    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />

    <title>{fullTitle}</title>
    <meta property="og:title" content={fullTitle} />
    <meta name="twitter:title" content={fullTitle} />

    <meta property="og:image" content={image} />
    <meta name="twitter:image" content={image} />

    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="article-layout">
    <Header showBackground />

    <main>
        <article id="article-content">
            <div class="content">
                <slot />
            </div>
        </article>
    </main>

    <Footer />
</div>

<style lang="scss">
    .article-layout {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        --body-background-color: var(--color--article-page-background);
        background-color: var(--color--article-page-background);
        transition: all 0.4s ease;
    }

    main {
        flex: 1 0 auto;
    }

    #article-content {
        --main-column-width: 65ch;
        position: relative;
        padding-top: 40px;
        padding-bottom: 80px;
        padding-right: 15px;
        padding-left: 15px;
        text-align: justify;

        display: flex;
        flex-direction: column;
        gap: 30px;

        .content {
            display: grid;
            grid-template-columns:
                1fr
                min(var(--main-column-width), 100%)
                1fr;
            flex-grow: 1;

            :global(> *) {
                grid-column: 2;
            }

            :global(> .full-bleed) {
                grid-column: 1 / 4;
                width: 100%;
                max-width: 1600px;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
</style>
