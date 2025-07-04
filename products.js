document.addEventListener("DOMContentLoaded", () => {
  const productsData = {
    arts: [
      { img: "polaroidpic.jpg", title: "📸 Polaroids", desc: "Best for heartfelt gifts ❤️", url: "polaroids.html" },
      { img: "pframe.jpg", title: "🖼️ Photo Frames", desc: "Affordable & personalized", url: "frames.html" },
      { img: "dec7598c84facdaef2fe673d560d674e.jpg", title: "📔 Custom Photo Albums", desc: "Unique & made care", url: "photoalbums.html" },
      { img: "Hf0d32efab6804bbb9f51a36fe9880f33M.jpg_720x720q50.avif", title: "📚 Custom Notebooks", desc: "Spiral bound | Custom covers", url: "customnotebooks.html" },
      { img: "8bcb91b2-c540-4ede-8c55-f25161e2acec.c09d27ca2a17f49133f4f082273dcb2f.webp", title: "🌹 24K Gold Rose", desc: "Elegant and classy gift", url: "goldrose.html" },
      { img: "canvas.jpg", title: "🎨 Canvas Paintings", desc: "Beautiful and vibrant canvas paintings to enhance the aesthetics of your room", url: "canvas.html" }
    ],
    jewelleries: [
      { img: "1.jpg", title: "🪢 Beads Bracelets", desc: "Starting @ ₹19 with charms!", url: "beadsbracelets.html" },
      { img: "reha-1.jpg", title: "✨ Earrings", desc: "High quality & lightweight", url: "earrings.html" },
      { img: "d2d3943afb6139e9b571c12a1dbf5397.jpg", title: "🌈 Necklaces", desc: "Affordable & aesthetic", url: "necklaces.html" },
      { img: "ring.jpg", title: "💍 Rings", desc: "Elegant and stylish rings", url: "rings.html" }
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

  // Dynamically create product cards as links
  productsData[type].forEach((p, index) => {
    const productLink = document.createElement("a");
    productLink.className = "product";
    productLink.style.animationDelay = `${index * 100}ms`;
    productLink.href = p.url || "#";
    productLink.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    `;
    list.appendChild(productLink);
  });

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
