var posts=["2025/03/28/hello-world/","2025/03/28/测试页/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };