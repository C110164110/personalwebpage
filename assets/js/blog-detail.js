const blogPosts = [
  {
    id: 1,
    title: "潛水紀錄",
    category: "潛水",
    date: "2024-09-16",
    images: [
      "./assets/images/diving1.jpg"
    ],
    content: [
      "潛入水中，彷彿進入另一個寧靜的世界。魚群悠游、陽光穿透水面形成閃爍的光斑，一切都讓人忘卻煩惱。",
      "這次潛點的能見度非常好，水流平穩。看到了海龜和成群的熱帶魚，真的非常療癒。",
      "記得多保護海洋，讓這片美麗的水域可以永續存在。"
    ]
  },
  {
    id: 2,
    title: "日本航空國際馬拉松",
    category: "運動",
    date: "2024-11-17",
    images: [
      "./assets/images/marathon1.jpg",
      "./assets/images/marathon2.jpg",
      "./assets/images/marathon3.png"
    ],
    content: [
      "黑松沙士告訴我們 \"不放手 直到夢想到手\" ",
      "相信自己 堅持到底"
    ]
  }
];

const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get('id'));
const post = blogPosts.find(p => p.id === postId);

let currentIndex = 0;
let imageCount = 0;

function renderCarousel(images) {
  const track = document.getElementById("carousel-track");
  const dots = document.getElementById("carousel-dots");
  track.innerHTML = "";
  dots.innerHTML = "";

  imageCount = images.length;

  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);

    const dot = document.createElement("span");
    dot.onclick = () => goToSlide(i);
    dots.appendChild(dot);
  });

  updateCarousel();
  setupSwipe();
}

function updateCarousel() {
  const track = document.getElementById("carousel-track");
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  const dots = document.querySelectorAll(".carousel-dots span");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextSlide() {
  if (currentIndex < imageCount - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// 滑動支援
function setupSwipe() {
  const track = document.getElementById("carousel-track");
  let startX = 0;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) {
      prevSlide();
    } else if (startX - endX > 50) {
      nextSlide();
    }
  });
}
if (post) {
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-meta').textContent = `分類：${post.category} · 日期：${post.date}`;
  
  renderCarousel(post.images);

  const content = document.getElementById('post-content');
  content.innerHTML = "";
  post.content.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    content.appendChild(p);
  });
}
