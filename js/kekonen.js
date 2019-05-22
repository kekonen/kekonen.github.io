const posts = superagent.get('https://raw.githubusercontent.com/kekonen/kekonen.github.io/master/content/post1.md').end((err, res) => {
  console.log(res)
}).catch(e => {
  console.log(e)
})



var headerApp = new Vue({
    el: '#header',
    data: {
      title: "My blog",
      subtitle: "Welcome"
    }
  })



var postsApp = new Vue({
    el: '#postsApp',
    data: {
      posts: [
        {href: "post.html", title: "Kek", subtitle: "LOL", by: "me", date: 'May 22, 2019'},
        // {href: "post.html", title: "Kek1", subtitle: "LOL1", by: "me1", date: 'May 22, 2019'},
        // {href: "post.html", title: "Kek2", subtitle: "LOL2", by: "me2", date: 'May 22, 2019'},
      ]
    }
  })

  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))