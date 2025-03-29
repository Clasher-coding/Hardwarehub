document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("luminous-cursor");
    document.body.appendChild(cursor);
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
    document.addEventListener("DOMContentLoaded", () => {
      const metaThemeColor = document.querySelector("meta[name='theme-color']");
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", "#9400D3");
      }
    });
    
  
    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
    });
  
    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });
  });
  