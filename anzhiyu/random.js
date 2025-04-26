var posts=["undefined/回归-时隔180天，我们归来并全新上线！/","undefined/Spotify/","undefined/笔趣书阁/","undefined/大师兄影视/","undefined/NekoBox/","undefined/软件仓库/","undefined/学习网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };