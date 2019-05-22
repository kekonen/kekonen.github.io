let title = "My 1337 blog"
let subtitle = "Welcome"
let pageType = 'overview'

let date = null
let author = null

let activePost = null

let posts = [
  {id: 0, title: "Kek", subtitle: "LOL", author: "me", date: 'May 22, 2019', content: 'Hello, thats me'},
  {id: 1, title: "KEK!", subtitle: "LOL@", author: "me11", date: 'May 23, 2019', content: 'Hello, thats me'},
]

let postUrls = ['https://raw.githubusercontent.com/kekonen/kekonen.github.io/master/content/post1.md']

postUrls.forEach(url => {
  superagent.get('https://raw.githubusercontent.com/kekonen/kekonen.github.io/master/content/post1.md').end((err, res) => {
    const {text} = res;

    const borderIndex = text.indexOf('-----')
    const headers = text.substr(0, borderIndex)
    const content = text.substr(borderIndex + 6)

    let title = headers.match(/Title: (.+)/)
    let subtitle = headers.match(/Subtitle: (.+)/)
    let author = headers.match(/Author: (.+)/)
    let date = headers.match(/Date: (.+)/)

    title = title ? title[1] : 'No title' 
    subtitle = subtitle ? subtitle[1] : 'No subtitle' 
    author = author ? author[1] : 'No author' 
    date = date ? date[1] : 'No date'

    posts.push({id: posts.length, title, subtitle, author, date, content})
  })
})



Vue.component('top', {
  props: ['title', 'subtitle', 'author', 'date'],
  template: `
  <header id= "header" class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{title}}</h1>
              <div v-if="date">
                <h2 class="subheading">{{subtitle}}</h2>
                <span class="meta">Posted by
                  <a href="#">{{author}}</a>
                  on {{date}}</span>
              </div>
              <div v-else>
                <span class="subheading">{{subtitle}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
})

Vue.component('posts-overview', {
  props: ['posts'],
  template: `
  <div class="container">
      <div class="row">
        <div id="postsApp" class="col-lg-8 col-md-10 mx-auto">

          <post-preview
            v-for="post in posts"
            v-bind:post="post"
            v-bind:key="post.id"
          ></post-preview>

          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
  </div>

  </hr>

  `
})

Vue.component('post-preview', {
  props: ['post'],
  template: `
    <div v-on:click="set_post(post.id)" class="post-preview">
      <a href="#">
        <h2 class="post-title">
          {{post.title}}
        </h2>
        <h3 class="post-subtitle">
            {{post.subtitle}}
        </h3>
      </a>
      <p class="post-meta">Posted by
        <a href="#">{{post.author}}</a>
        on {{post.date}}</p>
    </div>
    </hr>
  `,
  methods: {
    set_post: function(id) {
      console.log(id)
      app.set_post(id)
    }
  }
})


Vue.component('post-itself', {
  props: ['post'],
  template: `<div class="col-lg-8 col-md-10 mx-auto">
  <p>{{post.content}}</p>

  <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>

  <h2 class="section-heading">The Final Frontier</h2>

  <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>

  <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>

  <blockquote class="blockquote">The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>

  <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>

  <h2 class="section-heading">Reaching for the Stars</h2>

  <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>

  <a href="#">
    <img class="img-fluid" src="img/post-sample-image.jpg" alt="">
  </a>
  <span class="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span>

  <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p>

  <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p>

  <p>Placeholder text by
    <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by
    <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.</p>
</div>`
})


var app = new Vue({
  el: '#app',
  data: {
    pageType,
    date,
    author,
    title,
    subtitle,
    posts,
    activePost
  },
  methods: {
    set_post: function(postId) {
      let post = this.posts[postId]
      this.pageType = 'post';
      this.activePost = post
      this.author = post.author
      this.date = post.date
      this.title = post.title
      this.subtitle = post.subtitle
    }
  }
})


// var headerApp = new Vue({
//     el: '#header',
//     data: {
//       title: "My blog",
//       subtitle: "Welcome"
//     }
//   })



// var postsApp = new Vue({
//     el: '#postsApp',
//     data: {
//       posts
//     }
//   })

  // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))