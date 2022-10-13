<template>
    <div class="container mt-3">
        <!-- Guessing 5 step -->
        <form v-if="this.cur_index <= this.guess_len" class="row g-3 needs-validation col-md-6 m-auto" novalidate>
            <h6 for="validationCustom01" class="col-md-12 form-label m-auto text-center">Movie  {{ this.cur_index }} out {{ this.guess_len }}</h6>
            <h6 for="validationCustom01" class="col-md-12 form-label mt-1 m-auto text-center">Terminator {{ this.cur_index }}</h6>
            <!-- Image -->
            <div class="fit-content m-auto mt-1">
                <div class="card">
                    <img v-if="this.movie_data" class="card-image card m-1" :src="this.movie_data.Poster"
                        alt="Card image cap">
                    <img v-else class="card-image card m-1"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                        alt="Card image cap">
                </div>
            </div>
            <!-- Plot -->
            <div class="m-auto mt-1 col-md-12">
                <p class="card-text">
                    {{ this.movie_data?.Plot }}
                </p>
            </div>
            <!-- Info -->
            <!-- <p>
                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample"  role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                </a>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    weiofjwoifj
                    {{ this.movie_data.Title }}
                </div>
            </div> -->

            <!-- submit rate -->
            <div class="mt-3 row">
                <div class="col-md-8">
                    <input type="text" class="form-control" value="" placeholder="score..." required>
                </div>
                <div class="col-md-4">
                    <input type="button" class="btn btn-primary w-100" v-on:click="onNext" value="submit">
                </div>
            </div>
        </form>
        <!-- Guessing end up -->
        <form v-else class="row g-3 needs-validation col-md-6 m-auto" novalidate>
            <h6 for="validationCustom01" class="col-md-12 form-label m-auto text-center">Result</h6>
            <div class="card" style="height: 15em;">
                <div class="h-25 m-auto">
                    <h6 for="validationCustom01" class="col-md-12 form-label m-auto mt-3">Success rate 6 out of 5
                        guesses</h6>
                </div>
                <div class="h-75 m-auto">
                    <h2 for="validationCustom01" class="col-md-12 form-label mt-5">90%</h2>
                </div>
            </div>
            <div class="col-6 mt-3 m-auto">
                <button class="btn btn-primary w-100" type="button" @click="reset">Start again</button>
            </div>
        </form>
    </div>
</template>
 
<script>

export default {
    name: "Guessing",
    props: [],
    data: function name(params) {
        return {
            guess_len: 5,
            cur_index: 1,
            movie_data: undefined
        }
    },
    methods: {
        onNext() {
            this.cur_index++;
        },
        reset() {
            this.cur_index = 1;
        }
    },
    async created() {
        const response = await fetch(`https://www.omdbapi.com/?apikey=f8c59d5f&t=${this.$route.query?.terminator}`);
        const result = await response?.json();
        this.movie_data = result;
        console.log(JSON.stringify(this.movie_data))
        // console.log(this.$route.query, this.movie_data);
    },
    mounted() {
    }
}
</script>

<style>
.card-image {
    max-height: 24em;
    max-width: 20em;
}

.fit-content {
    width: fit-content;
}
</style>