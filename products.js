document.addEventListener("DOMContentLoaded", () => {
  const productsData = {
    arts: [
      { img: "polaroidpic.jpg", title: "📸 Polaroids", desc: "Best for heartfelt gifts ❤️" },
      { img: "pframe.jpg", title: "🖼️ Photo Frames", desc: "Affordable & personalized" },
      { img: "dec7598c84facdaef2fe673d560d674e.jpg", title: "📔 Custom Photo Albums", desc: "Unique & made with care" },
      { img: "Hf0d32efab6804bbb9f51a36fe9880f33M.jpg_720x720q50.avif", title: "📚 Custom Notebooks", desc: "Spiral bound | Custom covers" },
      { img: "8bcb91b2-c540-4ede-8c55-f25161e2acec.c09d27ca2a17f49133f4f082273dcb2f.webp", title: "🌹 24K Gold Rose", desc: "Elegant and classy gift" }
    ],
    jewelleries: [
      { img: "1.jpg", title: "🪢 Beads Bracelets", desc: "Starting @ ₹19 with charms!" },
      { img: "reha-1.jpg", title: "✨ Earrings", desc: "High quality & lightweight" },
      { img: "d2d3943afb6139e9b571c12a1dbf5397.jpg", title: "🌈 Necklaces", desc: "Affordable & aesthetic" },
      
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

  // Update title based on type
  title.textContent = type === "arts"
    ? "Crafix Arts Collection"
    : "Crafix Jewelleries Collection";

  // Dynamically create product cards
  productsData[type].forEach((p, index) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.style.animationDelay = `${index * 100}ms`;
    productDiv.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    `;
    list.appendChild(productDiv);
  });

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
