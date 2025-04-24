var posts=["undefined/NekoBox/","undefined/软件仓库/","undefined/学习网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };