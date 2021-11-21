<script lang="ts">
    import GithubLogoLink from "./logo-links/github_link.svelte";
    import HackerRankLogoLink from "./logo-links/hacker_rank_link.svelte";
    import LinkedInLogoLink from "./logo-links/linked_in.svelte";
    
    const email: string = "pereiswell@gmail.com";
    const github_profile: string = "https://github.com/c1m50c";
    const hacker_rank_profile: string = "https://www.hackerrank.com/c1m50c";
    const linked_in_profile: string = "https://www.linkedin.com/in/pere-wells";
    
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

    .logo-link-container :global(.logo) {
        fill: var(--button-foreground-color);
        width: 5rem;
        height: 5rem;
        transition: all var(--base-transition-settings);

    }

    .logo-link-container :global(.logo:hover) { fill: var(--hover-foreground-color); }

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

    #email:hover {
        cursor: pointer;
        color: var(--hover-foreground-color);
    }
</style>


<div class="info-container" id="contact">
    <div class="logo-link-container">
        <GithubLogoLink link={github_profile} />
        <HackerRankLogoLink link={hacker_rank_profile} />
        <LinkedInLogoLink link={linked_in_profile} />
    </div>
    <button id="email" on:click={() => {copy_to_clipboard(email)}}>{email}</button>
</div>