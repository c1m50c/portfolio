<script lang="ts">
    let email: string = "pereiswell@gmail.com"
    function copy_to_clipboard(str: string) {
        navigator.clipboard.writeText(str);
    }
</script>


<style>
    #contact {
        display: grid;
        justify-content: center;
    }

    .logo-link-container {
        display: flex;
        justify-content: center;
    }

    .logo {
        fill: var(--button-foreground-color);
        transition: all var(--base-transition-settings);
        width: 5rem;
        height: 5rem;
    }

    .logo:hover, .logo:focus { fill: var(--hover-foreground-color); }
    .logo:hover { cursor: pointer; }

    #email {
        background: transparent;
        border: none;
        color: var(--button-foreground-color);
        font-size: 1.5rem;
        font-weight: 600;
        font-style: italic;
        text-align: center;
        position: relative;
        transition: all var(--base-transition-settings);
    }

    #email::after {
        /* Todo: Implement animation */
        content: "Copied to Clipboard! 📋";
        position: absolute;
        font-size: 1rem;
        width: 100%;
        top: 75%;
        left: 0%;
        color: var(--bright-text-color);
        opacity: 0%;
    }

    #email:hover, #email:focus { color: var(--hover-foreground-color); }
    #email:hover { cursor: pointer; }
</style>


<div class="info-container" id="contact">
    <div class="logo-link-container">
        <a href="https://github.com/c1m50c" id="github-profile-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="logo" id="github-logo">
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
            </svg>
        </a>
        <a href="https://www.youtube.com/channel/UC1hRAL84n116s8kU_prsWvg" id="youtube-profile-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="logo" id="youtube-logo">
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/>
            </svg>
        </a>
    </div>
    <button id="email" on:click={() => {copy_to_clipboard(email)}}>{email}</button>
</div>