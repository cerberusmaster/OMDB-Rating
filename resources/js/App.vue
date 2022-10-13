<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary justify-content-center">
        <div class="navbar-nav">
            <!-- <router-link to="/" class="navbar-brand nav-item nav-link">Home</router-link> -->
            <router-link to="/" class="navbar-brand nav-item nav-link ">
              <i class="fa fa-home" aria-hidden="true"></i>
            </router-link>
            <router-link to="/guessing" class="navbar-brand nav-item nav-link">Guessing</router-link>
            <router-link to="/results" class="navbar-brand nav-item nav-link">Results</router-link>
        </div>
    </nav>
    <router-view></router-view>
</template>
 
<script>
    export default {}
</script>