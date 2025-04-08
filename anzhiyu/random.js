var posts=["undefined/这是一篇新的博文/","undefined/测试一/","undefined/测试页/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };