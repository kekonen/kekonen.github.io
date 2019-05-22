let posts = [
  {href: "post.html", title: "Kek", subtitle: "LOL", by: "me", date: 'May 22, 2019'},
  // {href: "post.html", title: "Kek1", subtitle: "LOL1", by: "me1", date: 'May 22, 2019'},
  // {href: "post.html", title: "Kek2", subtitle: "LOL2", by: "me2", date: 'May 22, 2019'},
]

superagent.get('https://raw.githubusercontent.com/kekonen/kekonen.github.io/master/content/post1.md').end((err, res) => {
  const {text} = res;

  const borderIndex = text.indexOf('-----')
  const headers = text.substr(0, borderIndex)
  const cont = text.substr(borderIndex + 6)
  console.log('headers', text)

  // console.log('cont', cont)


  const title = headers.match(/Title: (.+)\\n/)
  const subtitle = headers.match(/Subtitle: (.+)\\n/)
  const by = headers.match(/By: (.+)\\n/)
  const date = headers.match(/Date: (.+)\\n/)

  // console.log(title
  //   ,subtitle
  //   ,by
  //   ,date)

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
      posts
    }
  })

  // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))