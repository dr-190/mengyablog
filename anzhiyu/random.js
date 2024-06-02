var posts=["posts/8b8a8c83.html","posts/c6d88a0.html","posts/7c6f7035.html","posts/a8bccf60.html","posts/8e4eca8d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };