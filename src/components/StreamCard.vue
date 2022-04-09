<template>
    <!-- <div class="card">
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
    </div>-->
    <div class="max-w-sm overflow-hidden rounded shadow-lg">
        <img class="w-[400px] h-[400px] mx-auto" :src="Card.stream_icon" @error="errorHandler" />
        <div class="relative z-30 px-6 py-4 text-black">
            <div class="mb-2 text-xl font-bold text-black">
                <span class="text-black">{{ Card.name }}</span>
            </div>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span
                v-if="Card.stream_type == 'live'"
                class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            >{{ Card.stream_type }}</span>
            <span
                class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            >Stream id: {{ Card.stream_id }}</span>
        </div>
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
</style>
