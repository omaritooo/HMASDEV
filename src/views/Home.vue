<template>
  <div class>
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="flex justify-center gap-x-10">
      <div v-for="category in categories" :key="category.index">
        <CategoryTab
          :dynamic="{ name: category.category_id, params: { code: category.category_id } }"
          :Label="category.category_name"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import CategoryTab from '../components/CategoryTab.vue';
export default {
  name: 'Home',
  components: {
    CategoryTab
  },
  data() {
    return {
      categories: null
    }
  },
  created() {
    axios.get(`http://magic-tv.live:2095/player_api.php?username=${this.$username}&password=${this.$password}&action=get_live_categories`).then(res => this.categories = res.data);
  },
}
</script>

<style scoped>
.tabholder {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
}
</style>
