const blogPosts = [
  {
    id: 1,
    title: "潛水紀錄",
    category: "潛水",
    date: "2024-09-16",
    image: "./assets/images/diving.JPG",
    content: [
      "潛入水中，彷彿進入另一個寧靜的世界。魚群悠游、陽光穿透水面形成閃爍的光斑，一切都讓人忘卻煩惱。",
      "這次潛點的能見度非常好，水流平穩。看到了海龜和成群的熱帶魚，真的非常療癒。",
      "記得多保護海洋，讓這片美麗的水域可以永續存在。"
    ]
  },
  {
    id: 2,
    title: "第一次10公里",
    category: "運動",
    date: "2024-11-17",
    image: "./assets/images/blog-2.jpg",
    content: [
      "日本航空馬拉松"
    ]
  }
];

// 從網址中取得 ?id=1
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get('id'));

// 找文章
const post = blogPosts.find(p => p.id === postId);

if (post) {
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-meta').textContent = `分類：${post.category} · 日期：${post.date}`;
  document.getElementById('post-image').src = post.image;
  document.getElementById('post-image').alt = post.title;

  const content = document.getElementById('post-content');
  content.innerHTML = "";
  post.content.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    content.appendChild(p);
  });
} else {
  document.getElementById('post-title').textContent = "找不到文章";
  document.getElementById('post-meta').textContent = "";
  document.getElementById('post-content').innerHTML = "<p>請返回列表重新選擇文章。</p>";
}
