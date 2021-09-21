<script lang="ts">

</script>


<style>
    .resume-container {
        background-color: var(--section-bg-color);
        margin: auto;
        width: 95%;
    }

    h2 {
        text-align: center;
    }

    .pdf-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .resume-pdf-viewer {
        width: 97%;
        height: 97%;
    }
</style>


<div class="resume-container">
    <h2>Resume</h2>
    <div class="pdf-container">
        <iframe src="resume.pdf" title="Resume" class="resume-pdf-viewer"/>
    </div>
</div>