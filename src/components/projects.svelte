<script lang="ts">
</script>


<style>
    .card-container {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }

    .project-card {
        display: grid;
        background-color: rgb(45, 45, 45);
        outline: var(--bright-text-color) solid 0.125rem;
        padding: 1rem;
        gap: 1rem;
        text-align: center;
        font-weight: 600;
        border-radius: var(--border-radius);
    }

    .link-container {
        display: grid;
        gap: 0.25rem;
        justify-content: center;
        align-content: flex-end;
        grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    }

    .project-date {
        font-size: 0.75rem;
        font-style: italic;
    }

    .logo {
        width: 4rem;
        height: 4rem;
        fill: var(--button-foreground-color);
        transition: fill var(--base-transition-settings);
    }

    .logo:hover, .logo:focus { fill: var(--hover-foreground-color); }
</style>


<div class="info-container" id="projects">
    <h1>Projects</h1>
    <div class="card-container">
        <div class="project-card" id="py-algorithms">
            <div class="text-container">
                <h3 class="project-title">Python Algorithms</h3>
                <p class="project-date">Date Created: 10/10/21</p>
            </div>
            <div class="link-container">
                <a href="https://github.com/c1m50c/py-algorithms" class="card-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo">
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="project-card" id="portfolio">
            <div class="text-container">
                <h3 class="project-title">Portfolio Website</h3>
                <p class="project-date">Date Created: 09/14/21</p>
            </div>
            <div class="link-container">
                <a href="https://github.com/c1m50c/portfolio" class="card-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo">
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="project-card" id="personal-color-theme">
            <div class="text-container">
                <h3 class="project-title">Personal VSCode Color Theme</h3>
                <p class="project-date">Date Created: 06/13/21</p>
            </div>
            <div class="link-container">
                <a href="https://github.com/c1m50c/c1m-theme" class="card-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-logo logo">
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                    </svg>
                </a>
                <a href="https://marketplace.visualstudio.com/items?itemName=c1m.c1m-theme" class="card-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="visual-studio-logo logo">
                        <path d="M27.324,4.804l-4.75-1.625c-0.315-0.108-0.667-0.051-0.932,0.152l-10.708,8.21L5.517,8.27 c-0.278-0.169-0.62-0.192-0.918-0.061l-2,0.875C2.235,9.243,2,9.603,2,10v10c0,0.397,0.235,0.757,0.599,0.916l2,0.875 c0.297,0.131,0.639,0.107,0.918-0.061l5.416-3.271l10.708,8.21c0.177,0.136,0.392,0.206,0.608,0.206 c0.109,0,0.218-0.018,0.324-0.054l4.75-1.625C27.728,25.058,28,24.678,28,24.25V5.75C28,5.322,27.728,4.942,27.324,4.804z M6,16.766 v-3.532L8.923,15L6,16.766z M22,19.717L15.038,15L22,10.283V19.717z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>