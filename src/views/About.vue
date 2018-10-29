<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-table striped hover :items="items"></b-table>
    <div v-for="(post) in posts"
    v-bind:key="post.id">
      <span v-html="post.excerpt.rendered"></span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import appService from '@/services/core-http.js'
const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]
export default {
  name: 'about',
  data () {
    return {
      items: items,
      posts: []
    }
  },
  methods: {
    loadPosts () {
      console.log('TESTING');
      appService.getPosts(2).then(data => {
        this.posts = data
        console.log("results: " + JSON.stringify(data))
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadPosts()
    }
  }
}

</script>
