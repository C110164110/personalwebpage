// 從網址取得 ?id=1
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get("id"));

// 選取 DOM 元素
const titleEl = document.getElementById("post-title");
const metaEl = document.getElementById("post-meta");
const imgEl = document.getElementById("post-image");
const contentEl = document.getElementById("post-content");

// 載入 JSON 並顯示文章
fetch("blogData.json")
  .then(res => res.json())
  .then(data => {
    const post = data.find(p => p.id === postId);
    if (!post) {
      titleEl.textContent = "找不到文章";
      return;
    }
    fetch("blogData.json")
  .then(res => res.json())
  .then(data => {
    const post = data.find(p => p.id == postId); // 注意是 == 而非 ===
    // 顯示文章內容
  });

    titleEl.textContent = post.title;
    metaEl.textContent = `分類：${post.category} · 日期：${post.date}`;
    imgEl.src = post.image;
    imgEl.alt = post.title;

    contentEl.innerHTML = post.content.map(p => `<p>${p}</p>`).join("");
  })
  .catch(err => {
    titleEl.textContent = "載入錯誤";
    console.error(err);
  });
