<script lang="ts">
    import Header from "$lib/components/organisms/Header.svelte";
    import Footer from "$lib/components/organisms/Footer.svelte";

    import {
        description,
        image,
        keywords,
        title,
        siteBaseUrl,
    } from "$lib/data/meta";

    let fullTitle = "Number Guessing - " + title;
</script>

<svelte:head>
    <link rel="“canonical”" href={siteBaseUrl} />
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
    //@use "$lib/scss/_breakpoints.scss" as bp;

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

        /*@include bp.for-iphone-se {
            padding-left: 0;
            padding-right: 0;
        }

        @include bp.for-tablet-portrait-up {
            padding-right: 20px;
            padding-left: 20px;
        }

        @include bp.for-tablet-landscape-up {
            padding-right: 30px;
            padding-left: 30px;
        }*/

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
