import { useState } from "react";

const BackToTopButton = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick} 
      style={{
        width: "140px",
        height: "56px",
        overflow: "hidden",
        border: "none",
        color: "#0a0a0a",
        background: "none",
        position: "relative",
        paddingBottom: "2em",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <span
          style={{
            opacity: hover ? "1" : "1",
            transform: hover ? "translateY(-60px)" : "translateY(0)",
            transition: "all 0.25s ease-out cubic-bezier(0.215, 0.61, 0.355, 1) 0s",
            fontSize: "1.3rem",
            marginLeft: "4px",
          }}
        >
          Back
        </span>
        <span
          style={{
            opacity: hover ? "1" : "1",
            transform: hover ? "translateY(-60px)" : "translateY(0)",
            transition: "all 0.2s ease-out cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s",
            fontSize: "1.3rem",
            marginLeft: "4px",
          }}
        >
          to
        </span>
        <span
          style={{
            opacity: hover ? "1" : "1",
            transform: hover ? "translateY(-60px)" : "translateY(0)",
            transition: "all 0.2s ease-out cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s",
            fontSize: "1.3rem",
            marginLeft: "4px",
          }}
        >
          top
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <span
          style={{
            transform: hover ? "translateY(0)" : "translateY(60px)",
            opacity: "1",
            transition: "all 0.2s ease-out cubic-bezier(0.215, 0.61, 0.355, 1) 0.15s",
            fontSize: "1.3rem",
            marginLeft: "4px",
          }}
        >
          Back
        </span>
        <span
          style={{
            transform: hover ? "translateY(0)" : "translateY(60px)",
            opacity: "1",
            transition: "all 0.2s ease-out cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s",
            fontSize: "1.3rem",
            marginLeft: "4px",
          }}
        >
          to
        </span>
        <span
          style={{
            transform: hover ? "translateY(0)" : "translateY(60px)",
            opacity: "1",
            transition: "all 0.2s ease-out cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s",
            fontSize: "1.3rem",
            marginLeft: "4px",
          }}
        >
          top
        </span>
      </div>

      <svg
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        width="20px"
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: hover ? "translateY(-50%) rotate(-90deg)" : "translateY(-50%) rotate(-50deg)",
          transition: "0.2s ease-out",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>

      <style jsx>{`
        button:before {
          content: "";
          position: absolute;
          height: 2px;
          bottom: 0;
          left: 0;
          width: 100%;
          transform: scaleX(0);
          transform-origin: bottom right;
          background: currentColor;
          transition: transform 0.25s ease-out;
        }

        button:hover:before {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        button .clone > *,
        button .text > * {
          opacity: 1;
          font-size: 1.3rem;
          transition: 0.2s;
          margin-left: 4px;
        }

        button .clone > * {
          transform: translateY(60px);
        }

        button:hover .clone > * {
          opacity: 1;
          transform: translateY(0px);
          transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
        }

        button:hover .text > * {
          opacity: 1;
          transform: translateY(-60px);
          transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
        }

        button:hover .clone > :nth-child(1) {
          transition-delay: 0.15s;
        }

        button:hover .clone > :nth-child(2) {
          transition-delay: 0.2s;
        }

        button:hover .clone > :nth-child(3) {
          transition-delay: 0.25s;
        }

        button:hover .clone > :nth-child(4) {
          transition-delay: 0.3s;
        }

        button svg {
          width: 20px;
          right: 0;
          top: 50%;
          transform: translateY(-50%) rotate(-50deg);
          transition: 0.2s ease-out;
        }

        button:hover svg {
          transform: translateY(-50%) rotate(-90deg);
        }
      `}</style>
    </button>
  );
};

export default BackToTopButton;
