<script lang="ts">
    import FooterWave from "$lib/icons/footer-wave.svelte";
    import Socials from "$lib/components/molecules/Socials.svelte";
    import { iconoirLink, svelteKitLink } from "$lib/data/links";

    let currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="wave">
        <FooterWave />
    </div>
    <div class="content">
        <div class="copyright">
            © {currentYear} David Strassmann
        </div>
        <div class="credits">
            Made with <a
                href={svelteKitLink}
                target="_blank"
                rel="noopener noreferrer">SvelteKit</a
            >. Icons by
            <a href={iconoirLink} target="_blank" rel="noopener noreferrer"
                >Iconoir</a
            >.
        </div>
        <div class="socials">
            <Socials />
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        min-height: clamp(260px, 40vw + 150px, 340px);
        width: 100%;
        background: linear-gradient(
            60deg,
            var(--color--waves-start) 0%,
            var(--color--waves-end) 100%
        );
        display: grid;
        grid-template-rows: clamp(60px, 10vw, 120px) auto;

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
            padding: 15px 0 25px;
            font-weight: 600;
            text-align: center;

            .credits {
                font-weight: 400;
                font-size: 90%;
                color: var(--color--text-shade);
                transition: all 0.2s ease-in-out;
            }

            .socials {
                display: flex;
                align-items: center;
                gap: 20px;
            }
        }

        a {
            &:hover {
                filter: drop-shadow(0px 0px 3px var(--color--primary));
            }
        }
    }
</style>
