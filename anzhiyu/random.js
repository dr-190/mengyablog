var posts=["posts/8b8a8c83.html","posts/c6d88a0.html","posts/7c6f7035.html","posts/3a88c12f.html","posts/uk.html","posts/14b7590f.html","posts/9029841e.html","posts/911b47ce.html","posts/80c400c0.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };