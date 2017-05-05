<template>
    <div id="second">
        <h1>I am another page</h1>
        <a> written by {{ author }} </a>
        <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
        <ul>
            <li><router-link to="/">To home page.</router-link></li>
            <li><router-link to="/first">To first page.</router-link></li>
            <li><router-link to="/third">To third page.</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'second',
    data() {
        return {
            author: "Je Wei",
            articles: [],
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
