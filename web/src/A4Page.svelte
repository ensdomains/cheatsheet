<script lang="ts">
    // Your script here
</script>

<div class="a4">
    <!-- Your content here -->
    <slot />
    <!-- Allows for content to be injected into the component -->
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .a4 {
        width: 210mm;
        min-height: 297mm;
        margin: 20mm auto;
        padding: 16mm;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background: white;
        box-sizing: border-box;

        /* This ensures the content scales correctly on different screens */
        transform-origin: top left;
        transform: scale(1);
        transition: transform 0.2s ease;
    }

    @media screen and (max-width: 800px) {
        .a4 {
            /* Adjust scale for smaller screens */
            transform: scale(0.5);
        }
    }

    @media print {
        .a4 {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            box-shadow: none;
            page-break-after: always;
            transform: scale(1); /* Reset scale for printing */
        }

        :global(body) {
            width: 210mm;
            height: 297mm;
        }
    }
</style>
