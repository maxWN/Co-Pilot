<template>
  <div class="about">
    <!-- <b-table striped hover :items="items"></b-table> -->
    <!-- <div v-for="(user) in users"
      :key="user.UserId">
      <span v-html="user.UserName"></span>
    </div> -->
    <div class="about-container">
      <b-card title="Maps are Portals"
          sub-title="With limitless possibilities...">
          <p class="card-text">
            Co-Pilot is a site where you can create a map of any kind of data.
            Create, edit, and download your maps and chart your own path.
          </p>
          <a href="#"
            class="card-link">Card link</a>
          <b-link href="#"
            class="card-link">Another link</b-link>
      </b-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import appService from '@/services/core-http.js'
// const items = [
//   { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
//   { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
//   { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
//   { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
// ]
export default {
  name: 'about',
  data () {
    return {
      items: items,
      posts: [],
      users: {}
    }
  },
  methods: {
    // loadPosts () {
    //   console.log('TESTING');
    //   appService.getPosts(2).then(data => {
    //     this.posts = data
    //     console.log("results: " + JSON.stringify(data))
    //   })
    // },    
    // loadAllUsers() {
    //   appService.getAllUsers().then(data => {
    //     this.users = data
    //     console.log("results: " + JSON.stringify(data))
    //   })
    // }
  },
  created() {
    // this.loadAllUsers();
  },
  watch: {
    '$route' (to, from) {
      this.loadPosts()
    }
  }
}

</script>

<style lang="scss" scoped>
.about-container {
  margin-top: 10rem;
}
</style>

