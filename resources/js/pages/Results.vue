<template>
    <div class="card col-md-8 m-auto mt-3">
        <div class="card-body">
            <!-- <h5 class="card-title">Guessing Results</h5> -->
            
            <div class="table-responsive">
                <table class="table">
                    <caption>List of Results</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Updated</th>
                            <th scope="col">Term</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="score in this.scoreList">
                            <th scope="row">{{ score.id }}</th>
                            <td>{{ score.username }}</td>
                            <td>{{ score.created_at }}</td>
                            <td>{{ score.term }}</td>
                            <td>{{ score.score }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <i class="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;<a class="card-link" @click="clearAll">Remove All</a>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios';

export default {
    name: 'Results',
    data() {
        return {
            scoreList: [],
        }
    },
    methods: {
        async clearAll() {
            await axios.get('/api/clear-scores')
        }
    },
    async created() {
        const all_score = await axios.get('/api/all-score')
        this.scoreList = all_score.data
    }
}
</script>