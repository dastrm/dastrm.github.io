<div class="waves-container">
    <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
    >
        <defs>
            <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                style="transition: all 0.4s ease"
            />
        </defs>
        <g class="parallax">
            <use
                xlink:href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(var(--color--page-background-rgb),0.7)"
            />
            <use
                xlink:href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(var(--color--page-background-rgb),0.5)"
            />
            <use
                xlink:href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(var(--color--page-background-rgb),0.3)"
            />
            <use
                xlink:href="#gentle-wave"
                x="48"
                y="7"
                fill="var(--color--page-background)"
            />
        </g>
    </svg>
</div>

<style lang="scss">
    .waves-container {
        background: linear-gradient(
            60deg,
            var(--color--waves-start) 0%,
            var(--color--waves-end) 100%
        );
        position: absolute;
        width: 100%;
        height: 600px;
    }

    .waves {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 15vh;
        /*Fix for safari gap*/
        min-height: 100px;
        max-height: 150px;
    }

    /* Animation */
    .parallax > use {
        @media screen and (prefers-reduced-motion: no-preference) {
            animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
                infinite;
        }
    }
    .parallax > use:nth-child(1) {
        animation-delay: -4s;
        animation-duration: 14s;
    }
    .parallax > use:nth-child(2) {
        animation-delay: -6s;
        animation-duration: 20s;
    }
    .parallax > use:nth-child(3) {
        animation-delay: -8s;
        animation-duration: 26s;
    }
    .parallax > use:nth-child(4) {
        animation-delay: -10s;
        animation-duration: 40s;
    }
    @keyframes move-forever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }
</style>
