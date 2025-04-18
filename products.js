
document.addEventListener("DOMContentLoaded", () => {
  const productsData = {
    arts: [
      { img: "assets/polaroidpic.jpg", title: "📸 Polaroids", desc: "Best for heartfelt gifts ❤️" },
      { img: "assets/pframe.jpg", title: "🖼️ Photo Frames", desc: "Affordable & personalized" },
      { img: "assets/dec7598c84facdaef2fe673d560d674e.jpg", title: "📔 Custom Photo Albums", desc: "Unique & made with care" },
      { img: "assets/Hf0d32efab6804bbb9f51a36fe9880f33M.jpg_720x720q50.avif", title: "📚 Custom Notebooks", desc: "Spiral bound | Custom covers" }
    ],
    jewelleries: [
      { img: "assets/1.jpg", title: "🪢 Beads Bracelets", desc: "Starting @ ₹19 with charms!" },
      { img: "assets/reha-1.jpg", title: "✨ Earrings", desc: "High quality & lightweight" },
      { img: "assets/d2d3943afb6139e9b571c12a1dbf5397.jpg", title: "🌈 Necklaces", desc: "Affordable & aesthetic" },
      { img: "assets/8bcb91b2-c540-4ede-8c55-f25161e2acec.c09d27ca2a17f49133f4f082273dcb2f.webp", title: "🌹 24K Gold Rose", desc: "Elegant and classy gift" }
    ]
  };

  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");

  const list = document.getElementById("product-list");
  const title = document.getElementById("section-title");

  if (!type || !productsData[type]) {
    title.textContent = "Invalid section";
    return;
  }

  title.textContent = type === "arts" ? "Crafix Arts Collection" : "Crafix Jewelleries Collection";

  productsData[type].forEach((p, index) => {
    const delay = index * 100;
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.style.animationDelay = `${delay}ms`;
    productDiv.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    `;
    list.appendChild(productDiv);
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
