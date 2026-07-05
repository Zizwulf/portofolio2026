tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#F8FBF8",
        accent: {
          DEFAULT: "#A8E6B3",
          hover: "#6FCF97",
        },
        mint: "#EAF9EE",
        text: {
          main: "#1C1C1C",
          muted: "#6B6B6B",
        },
        borderline: "#E6ECE8",
      },
      borderRadius: {
        "4xl": "24px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
};

// Set Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// 1. Custom Cursor Logic
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const interactives = document.querySelectorAll(".interactive, a, button, .cursor-pointer");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" },
  );
});

interactives.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    document.body.classList.add("hovering");
  });
  el.addEventListener("mouseleave", () => {
    document.body.classList.remove("hovering");
  });
});

// 2. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");
let isMenuOpen = false;

mobileMenuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu.classList.remove("scale-y-0", "opacity-0");
    mobileMenu.classList.add("scale-y-100", "opacity-100");
    mobileMenuBtn.innerHTML = '<i class="ph ph-x text-3xl"></i>';
  } else {
    mobileMenu.classList.add("scale-y-0", "opacity-0");
    mobileMenu.classList.remove("scale-y-100", "opacity-100");
    mobileMenuBtn.innerHTML = '<i class="ph ph-list text-3xl"></i>';
  }
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    isMenuOpen = false;
    mobileMenu.classList.add("scale-y-0", "opacity-0");
    mobileMenu.classList.remove("scale-y-100", "opacity-100");
    mobileMenuBtn.innerHTML = '<i class="ph ph-list text-3xl"></i>';
  });
});

// 3. Scroll Reveal Animation via Intersection Observer
const revealElements = document.querySelectorAll(".reveal");
const revealOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach((el) => {
  revealOnScroll.observe(el);
});

// 4. Project Database
const projectData = {
  summa: {
    title: "Summa Coffee Roastery",
    type: "Brand Identity",
    year: "2021",
    heroImg: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    overview:
      "As a Social Media Content Creator for Summa Coffee Company, I specialize in translating the artisanal nature of Indonesian single-origin coffee into an evocative digital narrative. My role involves crafting educational and aesthetic content that bridges the gap between local farming traditions and the premium HoReCa industry experience. By designing a sophisticated visual identity that highlights coffee origins and brewing expertise, I help position Summa as a trusted authority in the specialty coffee scene. My work focuses on blending technical coffee knowledge with compelling storytelling, ensuring that every feed aesthetic not only celebrates the unique flavor profiles of our regional beans but also fosters a deeper connection with coffee enthusiasts and industry partners alike.",

    images: ["/bahan/Summa/summ1 (1).gif", "/bahan/Summa/summ1 (2).gif", "/bahan/Summa/summ1 (3).gif", "/bahan/Summa/summ1 (4).gif"],
  },
  infinitypod: {
    title: "Infinity Pod",
    type: "Visual Identity & Packaging",
    year: "2022",
    heroImg: "/bahan/infinitypod/cover.jpg",
    overview:
      "As a Content Creator for Infinity Pod, I focus on transforming high-end vaping products into captivating lifestyle content. I bridge the gap between technical product specifications and consumer appeal by creating visually engaging digital assets that highlight innovation and style. My approach centers on crafting a sleek aesthetic that resonates with tech-savvy audiences while maintaining the brand's identity as a leader in the competitive vaping market. Through a blend of motion design and strategic visual storytelling, I ensure every post drives both brand recognition and active engagement.  ",
    images: [
      "/bahan/infinitypod/vape (1).jpg",
      "/bahan/infinitypod/vape (2).jpg",
      "/bahan/infinitypod/vape (3).jpg",
      "/bahan/infinitypod/vape (5).jpg",
      "/bahan/infinitypod/vape (6).jpg",
      "/bahan/infinitypod/vape (7).jpg",
      "/bahan/infinitypod/vape (8).jpg",
      "/bahan/infinitypod/vape (9).jpg",
      "/bahan/infinitypod/vape (10).jpg",
      "/bahan/infinitypod/vape (11).jpg",
      "/bahan/infinitypod/vape (12).jpg",
      "/bahan/infinitypod/vape (13).jpg",
      "/bahan/infinitypod/vape (14).jpg",
    ],
  },
  kemangi: {
    title: "Kemangi Residence",
    type: "Real Estate Branding",
    year: "2023",
    heroImg: "/bahan/Kemangi/coverkemangi.jpg",
    overview:
      "As a Social Media Designer for Kemangi Residence, I focus on translating the brand’s core values of green living and sustainable family lifestyle into visually cohesive and engaging digital content. My work involves crafting an aesthetic narrative that blends architectural elegance with the warmth of family-centric living. By designing clean, intentional layouts for Instagram feeds, I help position Kemangi Residence as a premier choice for families seeking a balanced urban lifestyle. My goal is to ensure that every visual asset not only highlights the property’s architectural beauty but also fosters an emotional connection with potential homeowners through purposeful, high-quality design.",

    images: ["/bahan/Kemangi/3.png", "/bahan/Kemangi/4.png", "/bahan/Kemangi/5.png", "/bahan/Kemangi/6.png", "/bahan/Kemangi/7.png", "/bahan/Kemangi/8.png"],
  },
  kliniix: {
    title: "Kliniix Slimm",
    type: "Social Media & Branding",
    year: "2024",
    heroImg: "/bahan/Kliniixslimm/bg.jpg",
    overview:
      "As a Multimedia Creative at Kliniix Slimm, I serve as the visual strategist behind a brand that successfully merges 21 years of clinical expertise with a modern lifestyle identity. I specialize in bridging the gap between professional medical trust and premium digital aesthetics, creating a cohesive visual narrative that resonates with a high-end audience. By translating complex medical procedures into engaging motion graphics and high-conversion social assets, I help maintain the brand’s authority while significantly driving patient interest. My focus on clean luxury and strategic storytelling ensures that every piece of content not only looks polished but also functions as a powerful tool for building patient trust and increasing brand equity in a competitive aesthetic market.  ",

    images: [
      "/bahan/Kliniixslimm/portodewyskin/1.jpg",
      "/bahan/Kliniixslimm/portodewyskin/2.mp4",
      "/bahan/Kliniixslimm/portodewyskin/3.jpg",
      "/bahan/Kliniixslimm/portodewyskin/4.jpg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (1).jpg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (2).jpg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (3).jpg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (4).jpg",
      "/bahan/Kliniixslimm/manneeed/snaptik_7391410595180023045_0.jpeg",
      "/bahan/Kliniixslimm/manneeed/snaptik_7391410595180023045_1.jpeg",
      "/bahan/Kliniixslimm/manneeed/snaptik_7391410595180023045_2.jpeg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (5).jpg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (6).jpg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (7).jpg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (8).jpg",
      "/bahan/Kliniixslimm/portodewyskin/bernice (13).jpg",
    ],
  },
  bernice: {
    title: "Bernice Skincare",
    type: "Packaging Design",
    year: "2023",
    heroImg: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    overview: "Packaging and label design for a botanical-based skincare startup.",
    role: "Graphic Designer",
    tools: "Illustrator, Photoshop",
    challenge: "Fitting strict regulatory information on small serum bottles while maintaining a clean, minimalist aesthetic.",
    solution: "Designed custom typography and used a grid system for the back labels to organize data efficiently.",
    images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1556228720-1c2a468e55cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"],
  },
};

const videoProjectData = {
  "summa-video": {
    title: "Summa Coffee - Cafe Tour",
    type: "9:16 Video Reel",
    year: "2021",
    overview: "A fast-paced, cinematic reel designed for Instagram and TikTok to showcase the ambiance of the newly opened roastery.",
    role: "Video Editor",
    tools: "Premiere Pro, After Effects",
    details: "Color graded to enhance the warm amber tones of the cafe.",
    videoPlaceholder: "https://images.unsplash.com/photo-1495474472201-35011d08d132?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  "infinity-video": {
    title: "Infinity Pod - Launch Promo",
    type: "9:16 TikTok Ad",
    year: "2022",
    overview: "High-energy product reveal video targeting tech enthusiasts on TikTok.",
    role: "Video Editor & Motion Graphics",
    tools: "CapCut, Premiere Pro",
    details: "Utilized trending transition styles and custom kinetic typography to highlight key product features.",
    videoPlaceholder: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  "kliniix-video": {
    title: "Kliniix Slimm - Treatment Guide",
    type: "3:4 Feed Video",
    year: "2024",
    overview: "Educational video series explaining complex aesthetic treatments in an easy-to-digest format.",
    role: "Multimedia Designer",
    tools: "Premiere Pro",
    details: "Clean, professional editing with lower-third graphics and smooth b-roll integration.",
    videoPlaceholder: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
};

const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("project-content");
const mainContent = document.getElementById("main-content");

// 5. Open Project Function (Graphic Design)
// 5. Open Project Function (Graphic Design)
window.openProject = function (id) {
  const data = projectData[id];
  if (!data) return;

  let imagesHtml = "";

  data.images.forEach((img) => {
    const isVideo = img.endsWith(".mp4");
    imagesHtml += `
      <div class="relative rounded-2xl overflow-hidden shadow-sm border border-borderline bg-secondary group">
        ${
          isVideo
            ? `
          <video class="w-full h-full object-cover" controls loop muted playsinline>
            <source src="${img}" type="video/mp4">
          </video>
        `
            : `
          <img src="${img}" alt="Project Detail" class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]">
        `
        }
      </div>
    `;
  });

  // LOGIKA BARU: Jika ID adalah 'kemangi' atau 'summa', gunakan grid-cols-1, jika bukan, gunakan grid-cols-4
  const galleryContainerClass = id === "kemangi" || id === "summa" ? "grid grid-cols-1 gap-6" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6";

  const html = `
    <div class="w-full h-[50vh] md:h-[70vh] relative">
        <img src="${data.heroImg}" alt="${data.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 -mt-32 relative z-10">
        <div class="bg-white rounded-4xl p-8 md:p-12 shadow-xl border border-borderline">
            <h1 class="text-4xl md:text-6xl font-extrabold mb-8">${data.title}</h1>
            <p class="text-text-muted leading-relaxed mb-8">${data.overview}</p>
        </div>

        <div class="mt-20">
            <h2 class="text-3xl font-bold mb-10 text-center">Design Gallery</h2>
            <div class="${galleryContainerClass}">
                ${imagesHtml}
            </div>
        </div>
        
        <div class="mt-12 text-center pb-20">
            <button onclick="closeProject()" class="bg-text-main text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-hover transition-colors">
                &larr; Back to Portfolio
            </button>
        </div>
    </div>
  `;

  modalContent.innerHTML = html;
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }, 10);
};

// 6. Open Video Project Function
window.openVideoProject = function (id) {
  const data = videoProjectData[id];
  if (!data) return;

  const isVertical = data.type.includes("9:16");
  const maxW = isVertical ? "max-w-md" : "max-w-4xl";

  const html = `
                <div class="pt-32 pb-20 max-w-5xl mx-auto px-6">
                    <div class="text-center mb-12">
                        <div class="inline-flex gap-3 mb-6">
                            <span class="px-4 py-2 bg-secondary text-text-muted rounded-full text-sm font-semibold border border-borderline">${data.type}</span>
                            <span class="px-4 py-2 bg-mint text-accent-hover rounded-full text-sm font-semibold">${data.year}</span>
                        </div>
                        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">${data.title}</h1>
                        <p class="text-text-muted max-w-2xl mx-auto">${data.overview}</p>
                    </div>

                    <div class="${maxW} mx-auto bg-black rounded-4xl overflow-hidden relative shadow-2xl group flex justify-center items-center aspect-[${isVertical ? "9/16" : "3/4"}]">
                        <img src="${data.videoPlaceholder}" alt="Video" class="w-full h-full object-cover opacity-80">
                        <div class="absolute w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <i class="ph-fill ph-play text-4xl text-white"></i>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 p-8 bg-secondary rounded-4xl border border-borderline">
                        <div>
                            <h3 class="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Editing Process</h3>
                            <p class="font-medium">${data.details}</p>
                        </div>
                        <div class="flex flex-col gap-4">
                            <div>
                                <h3 class="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Role</h3>
                                <p class="font-medium">${data.role}</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Software</h3>
                                <p class="font-medium">${data.tools}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-20 text-center">
                        <button onclick="closeProject()" class="bg-text-main text-white px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-text-main transition-colors">
                            &larr; Back to Videos
                        </button>
                    </div>
                </div>
            `;

  modalContent.innerHTML = html;
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }, 10);
  modal.scrollTop = 0;
};

// 7. Close Project Modal
window.closeProject = function () {
  modal.classList.remove("open");
  document.body.style.overflow = "auto"; // Restore scrolling
  setTimeout(() => {
    modal.classList.add("hidden");
    modalContent.innerHTML = ""; // Clear memory
  }, 700); // Matches transition duration
};
