const blogListContainer = document.getElementById("blog-list");

fetch("blogData.json")
  .then(res => res.json())
  .then(data => {
    blogListContainer.innerHTML = data.map(post => `
      <div class="blog-card">
        <a href="blog-detail.html?id=${post.id}">
          <img src="${post.image}" alt="${post.title}" class="blog-thumb">
        </a>
        <div class="blog-info">
          <h3><a href="blog-detail.html?id=${post.id}">${post.title}</a></h3>
          <p class="blog-meta">${post.category} · ${post.date}</p>
          <p class="blog-snippet">${post.content[0].substring(0, 50)}...</p>
        </div>
      </div>
    `).join("");
  })
  .catch(err => {
    blogListContainer.innerHTML = "<p>載入文章失敗，請稍後再試。</p>";
    console.error(err);
  });
