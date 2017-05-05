<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/first">To first page.</router-link></li>
      <li><router-link to="/second">To second page.</router-link></li>
      <li><router-link to="/third">To third page.</router-link></li>
    </ul>
    <!--<el-card class="box-card">-->
        <div slot="header" class="clearfix">
            <h2 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h2>
        </div>
        <mt-button @click.native="handleClick">按钮</mt-button>
        <hr>
        <div v-for="article in articles" class="text item">
            {{article.original_title}}
        </div>
    <!--</el-card>-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      articles: []
    }
  },
	methods: {
		handleClick: function() {
			this.$toast('Hello world!')
		}
	},
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=15', {}, {
      headers: {
      },
      emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
      this.articles = response.data.subjects
      // this.articles = response.data["subjects"] 也可以
    }, function(response) {
      // 这里是处理错误的回调
      console.log(response)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
