<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary justify-content-center">
        <div class="navbar-nav">
            <a class="navbar-brand" href="/guessing">Guessing</a>
            <a class="navbar-brand" href="/results">Results</a>
        </div>
    </nav>
    
</template>
 
<script>
    export default {
        mounted() {
            console.log("Header Component mounted")
        }
    }
</script>