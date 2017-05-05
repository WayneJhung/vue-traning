<template>
  <div id="first">
    <h1>I am a title.</h1>
      <a> written by {{ author }} </a>
    <ul>
      <li><router-link to="/">To home page.</router-link></li>
      <li><router-link to="/second">To second page.</router-link></li>
      <li><router-link to="/third">To third page.</router-link></li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'first',
  data () {
    return {
      author: "Je Wei"
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
