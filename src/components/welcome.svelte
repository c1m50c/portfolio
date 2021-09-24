<script lang="ts">

</script>


<style>
    :root {
        --intro-animation-time: 1s;
        --underline-animation-time: 1s;
    }

    #welcome {
        display: grid;
        align-content: center;
        justify-content: center;

        background-image: url("/background_waves.svg");
        background-position: 0% 50%;
        background-size: cover;
        background-color: rgba(0, 0, 0, 0.25);
    }

    #logo {
        margin: auto;
        width: 300px;
        height: 300px;
        color: var(--button-foreground-color);
        text-align: center;
    }

    #h2-container {
        text-align: center;
        margin: auto;
        animation: intro-animation var(--intro-animation-time) forwards;
    }

    h2 {
        font-size: 48px;
        overflow: hidden;
    }

    #hey::after {
        content: "👋";
        margin-left: 1rem;
        display: inline-block;
        animation: 1s wave-animation calc(var(--intro-animation-time) + var(--underline-animation-time) + 500ms) infinite;
    }

    #hook {
        font-size: 24px;
        position: relative;
    }

    #hook::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        transform: scaleX(0);
        bottom: -20%;
        left: 0;
        background-color: var(--button-foreground-color);
        transform-origin: center;
        animation: var(--underline-animation-time) underline-animation calc(var(--intro-animation-time) + 500ms) forwards;
    }

    @keyframes intro-animation {
        from {
            
        }

        to {
            
        }
    }
    
    @keyframes underline-animation {
        to {
            transform: scaleX(1);
        }
    }

    @keyframes wave-animation {
        from {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(21deg);
        }

        to {
            transform: rotate(0deg);
        }
    }
</style>


<div class="info-container" id="welcome">
    <img src="logos/logo.svg" alt="logo" id="logo"/>
    <div id="h2-container">
        <h2 id="hey">Hey, I'm Pere</h2>
        <p id="hook">But I'm also known as Big Hunk 😳👉👈</p>
    </div>
</div>