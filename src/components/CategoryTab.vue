<template>
    <router-link
        :to="`/${dynamic.name}`"
        class="text-[32px] rounded-lg font-bold text-black bg-white shadow-2xl w-fit p-10 hover:bg-black hover:text-white transition-colors duration-150 no-underline"
    >{{ Label }}</router-link>
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