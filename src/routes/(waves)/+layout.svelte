<script lang="ts">
    import Waves from "$lib/components/molecules/Waves.svelte";
    import Header from "$lib/components/organisms/Header.svelte";
    import Footer from "$lib/components/organisms/Footer.svelte";

    import {
        description,
        image,
        keywords,
        title,
        siteBaseUrl,
    } from "$lib/data/meta";

    let fullTitle = "Home - " + title;
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

<div id="wrap">
    <Waves />
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</div>

<style lang="scss">
    #wrap {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
    main {
        flex: 1 0 auto;
    }
</style>
