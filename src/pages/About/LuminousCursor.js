import React, { useEffect } from "react";
import "./LuminousCursor.css";

const LuminousCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("luminous-cursor");
    document.body.appendChild(cursor);

    const follower = document.createElement("div");
    follower.classList.add("follower-cursor");
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    const speed = 0.1;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    const handleClick = () => {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 200);
    };

    const handleHover = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        cursor.classList.add("hover");
        follower.classList.add("hover");
      } else {
        cursor.classList.remove("hover");
        follower.classList.remove("hover");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", handleClick);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
      cursor.remove();
      follower.remove();
    };
  }, []);

  return null;
};

export default LuminousCursor;