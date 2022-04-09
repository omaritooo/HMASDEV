<template>
    <div class="card">
        <div>
            <div v-if="Card.stream_icon">
                <img
                    style="width:500px; height:500px;"
                    :src="Card.stream_icon"
                    @error="errorHandler"
                />
            </div>
            <div v-if="!Card.stream_icon">
                <img
                    style="width:500px; height:500px;"
                    src="https://i0.wp.com/tantamotors.com/wp-content/uploads/2019/07/default-placeholder.png?fit=960%2C960&ssl=1"
                    alt
                />
            </div>
        </div>
        <div class="live" v-if="Card.stream_type == 'live'">{{ Card.stream_type }}</div>
        <div class="id">{{ Card.stream_id }}</div>
        <h1>{{ Card.name }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        Card: {
            type: Object,
            default: null
        },
    },
    methods: {
        errorHandler(event) {
            event.target.src = "https://i0.wp.com/tantamotors.com/wp-content/uploads/2019/07/default-placeholder.png?fit=960%2C960&ssl=1"

        }
    },
}
</script>

<style scoped>
div {
    color: white;
}
.card {
    position: relative;
    width: fit-content;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background: black;
}
.live {
    background: red;
    color: white;
    font-size: 14px;
    position: absolute;
    top: 10px;
    right: 5px;
    border-radius: 10px;
    padding: 5px 15px;
}
.id {
    background: transparent;
    color: white;
    font-size: 14px;
    position: absolute;
    top: 10px;
    left: 5px;
    border-radius: 10px;
    padding: 5px 15px;
}
h1 {
    color: white;
}
</style>
