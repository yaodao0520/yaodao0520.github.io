var posts=["undefined/学习网站/","undefined/云端测试页面/","undefined/这是一篇新的博文/","undefined/测试一/","undefined/测试页/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };