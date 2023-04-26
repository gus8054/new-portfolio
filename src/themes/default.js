import { keyframes } from "styled-components";

const theme = {
  font: {
    logo: "Bazzi",
    title: "MaplestoryOTFBold",
    default: "omyu_pretty",
  },
  color: {
    background: "#000606",
    white: "#f0f0f0",
    gray: "#9c9ab7",
    orange: "rgba(254, 197, 118, 1)",
    blue: "rgba(0, 107, 184, 1)",
    navy: "rgba(44, 48, 77, 1)",
    violet: "rgb(145, 94, 255)",
  },
  breakpoint: {
    sm: "25rem",
    md: "48rem",
    lg: "64rem",
  },
  animation: {
    scaleInVerTop: keyframes` // animation: scale-in-ver-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      0% {
        transform: scaleY(0);
        transform-origin: 100% 0%;
        opacity: 1;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 100% 0%;
        opacity: 1;
      }
    `,
    scaleOutVerTop: keyframes` // animation: scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
      0% {
        transform: scaleY(1);
        transform-origin: 100% 0%;
        opacity: 1;
      }
      100% {
        transform: scaleY(0);
        transform-origin: 100% 0%;
        opacity: 1;
      }
      `,
    slideInLeft: keyframes` // animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      0% {
        left: -10rem;
        opacity: 0;
      }
      100% {
        left: 0rem;
        opacity: 1;
      }
    `,
    colorChange: keyframes` // animation: color-change-5x 8s linear infinite alternate both;
      0% {
        background: #19dcea;
      }
      25% {
        background: #b22cff;
      }
      50% {
        background: #ea2222;
      }
      75% {
        background: #f5be10;
      }
      100% {
        background: #3bd80d;
      }
      `,
    upDown: keyframes` // animation: slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both;
        from {
          transform: translateX(-50%) translateY(-150%);
        }
        to {
          transform: translateX(-50%) translateY(50%);
        }`,

    vibrate: keyframes`
        0% {
          transform: translate(0);
        }
        20% {
          transform: translate(-2px, 2px);
        }
        40% {
          transform: translate(-2px, -2px);
        }
        60% {
          transform: translate(2px, 2px);
        }
        80% {
          transform: translate(2px, -2px);
        }
        100% {
                  transform: translate(0);
        }`,
    focusIn: keyframes` // animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
          0% {
            filter: blur(18px);
            opacity: 0;
          }
          100% {
            filter: blur(0px);
            opacity: 1;
          }
          `,
    textPop: keyframes`
          0% {
            text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
            transform: translateY(0);
          }
          100% {
            text-shadow: 0 1px #555555, 0 2px #555555, 0 3px #555555, 0 4px #555555, 0 5px #555555, 0 6px #555555, 0 7px #555555, 0 8px #555555;
            transform: translateY(-8px);
          }
          `,
  },
};
export default theme;
