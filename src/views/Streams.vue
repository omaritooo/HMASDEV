<template>
    <div>
        <div class="container">
            <div v-for="stream in streams" :key="stream.index">
                <div v-if="stream.category_id == $route.params.id">
                    <StreamCard :Card="stream" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import StreamCard from '../components/StreamCard.vue';

export default {
    props: {
        namer: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            streams: null
        };
    },
    created() {
        axios.get(`http://magic-tv.live:2095/player_api.php?username=${this.$username}&password=${this.$password}&action=get_live_streams`).then(res => this.streams = res.data);
    },
    components: { StreamCard }
}
</script>

<style>
.container {
    display: flex;
    justify-content: start;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 1500px;
    gap: 50px;
    margin: auto;
}
</style>