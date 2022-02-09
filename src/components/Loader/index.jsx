import { useEffect, useRef } from "react";
import loader from "../../assets/loader-balls.json"
import lottie from "lottie-web";
import "./loader.scss"

export default function Loader() {
    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            animationData: loader,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
          });
    }, []);
    
  return <div className="loader" ref={container}></div>;
}
