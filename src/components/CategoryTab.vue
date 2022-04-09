<template>
    <router-link :to="`/${dynamic.name}`" class="tab">{{ Label }}</router-link>
</template>

<script>
export default {
    props: {
        Label: {
            type: String,
            default: 'Error'
        },
        dynamic: {
            type: Object,
            default: null
        }
    },
}
</script>

<style>
.tab {
    font-size: 32px;
    color: black;
    text-align: center;
    padding: 20px;
    width: fit-content;
    text-decoration: none;
}
</style>