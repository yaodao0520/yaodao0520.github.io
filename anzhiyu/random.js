var posts=["2025/03/30/测试一/","2025/03/28/测试页/","2025/03/28/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };