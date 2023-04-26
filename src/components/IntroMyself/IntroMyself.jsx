import { useEffect, useRef } from "react";
import Typed from "typed.js";

function IntroMyself() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Dong Hyun", "Coder", "Front End Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
}

export default IntroMyself;
