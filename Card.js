document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.getElementById("heart-container");
  
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 6 + "s"; // 6s - 9s
  
      heartContainer.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 9000); // นานกว่าปกติให้หัวใจมีเวลาออกจากจอ
    }
  
    setInterval(createHeart, 700); // ออกหัวใจทุก 0.7 วินาที (ช้ากว่าเดิม)
  });
  