import React from "react";
import { Link } from "react-router-dom";

const ContinueShoppingButton = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <Link to="/shop">
        <button
          className="button"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "rgb(20, 20, 20)",
            border: "none",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 0px 0px 4px rgba(180, 160, 255, 0.253)",
            cursor: "pointer",
            transitionDuration: "0.3s",
            overflow: "hidden",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = "140px";
            e.currentTarget.style.borderRadius = "50px";
            e.currentTarget.style.backgroundColor = "rgb(185, 187, 187)";
            e.currentTarget.querySelector(".svgIcon").style.transform = "translateY(-200%)";
            e.currentTarget.querySelector("span").style.fontSize = "12px";
            e.currentTarget.querySelector("span").style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = "50px";
            e.currentTarget.style.borderRadius = "50%";
            e.currentTarget.style.backgroundColor = "rgb(20, 20, 20)";
            e.currentTarget.querySelector(".svgIcon").style.transform = "translateY(0)";
            e.currentTarget.querySelector("span").style.fontSize = "0px";
            e.currentTarget.querySelector("span").style.opacity = "0";
          }}
        >
          <svg
            className="svgIcon"
            viewBox="0 0 384 512"
            style={{
              width: "12px",
              transitionDuration: "0.3s",
            }}
          >
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
              style={{ fill: "white" }}
            ></path>
          </svg>
          <span
            style={{
              minWidth: "max-content",
              paddingLeft: "18px",
              paddingRight: "18px",
              content: "Continue To Shopping",
              position: "absolute",
              bottom: "50%",
              left: "50%",
              transform: "translate(-50%, 50%)",
              width: "100%",
              textAlign: "center",
              color: "white",
              fontSize: "0px",
              opacity: "0",
              transition: "font-size 0.3s ease, opacity 0.3s ease",
            }}
          >
            Continue To Shopping
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ContinueShoppingButton;
