<script lang="ts">
	import { base } from "$app/paths";
	import Header from "$lib/components/organisms/Header.svelte";
	import Footer from "$lib/components/organisms/Footer.svelte";

	import Button from "$lib/components/atoms/Button.svelte";
	import Error from "$lib/icons/error.svelte";
</script>

<div id="wrap">
	<Header showBackground />

	<main>
		<div class="error-page">
			<div class="container">
				<h1>Oh no!</h1>
				<div class="svg-wrapper">
					<Error />
				</div>
				<p class="text">
					It seems like coffee was spilled all over this page, and now
					it can't be displayed.
				</p>
				<Button href="{base}/">Start over</Button>
			</div>
		</div>
	</main>

	<Footer />
</div>

<style lang="scss">
	.error-page {
		background: var(--color--page-background);
		position: relative;
		transition: all 0.4s ease;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		text-align: center;
		padding-top: 25px;

		.svg-wrapper {
			width: 300px;
			margin-top: -60px;
			margin-bottom: -30px;

			:global(svg) {
				filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));
			}
		}
	}
	.text {
		padding-bottom: 30px;
	}
	#wrap {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
	main {
		flex: 1 0 auto;
	}
</style>
