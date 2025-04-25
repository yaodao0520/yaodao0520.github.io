var posts=["undefined/笔趣书阁/","undefined/大师兄影视/","undefined/NekoBox/","undefined/软件仓库/","undefined/学习网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };