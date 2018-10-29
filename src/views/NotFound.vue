<template>
  <div id="not-found">
    <b-jumbotron bg-variant="warning" text-variant="white" border-variant="dark">
      <template slot="header">
        ERROR
      </template>
      <template slot="lead">
        {{msg}}
      </template>
      <hr class="my-4">
      <p>
        © 2018-2019 Co-Pilot, all rights reserved.
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: 'The page you were looking for wasn\'t found. Please re-type your URL, and try again.'
    }
  }
}
</script>

<style lang="scss">
  #not-found {
    margin-top: 7%;
  }
</style>
