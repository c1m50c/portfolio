<script lang="ts">
    /** Business Email */
    let email: string = "pereiswell@gmail.com";
    /** Copys a string into the user's clipboard. */
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
        width: 5rem;
        height: 5rem;
        transition: all var(--base-transition-settings);

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
        top: 80%;
        left: 0%;
        color: var(--bright-text-color);
        opacity: 0;
    }

    #email:hover {
        cursor: pointer;
        color: var(--hover-foreground-color);
    }
</style>


<div class="info-container" id="contact">
    <div class="logo-link-container">
        <a href="https://github.com/c1m50c" id="github-profile-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="logo" id="github-logo">
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/pere-wells" id="linked-in-profile-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="linkedin-logo logo">
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
            </svg>
        </a>
    </div>
    <button id="email" on:click={() => {copy_to_clipboard(email)}}>{email}</button>
</div>