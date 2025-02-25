import { useEffect, useState } from "react";

export default function MathJaxRenderer({ formula }: { formula: string }) {
  const [mathJaxLoaded, setMathJaxLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // MathJaxがまだロードされていない場合のみスクリプトを追加
      if (!window.MathJax) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
        script.async = true;
        script.onload = () => {
          setMathJaxLoaded(true);
          window.MathJax?.typesetPromise?.();
        };
        document.head.appendChild(script);
      } else {
        setMathJaxLoaded(true);
        window.MathJax?.typesetPromise?.();
      }
    }
  }, []);

  useEffect(() => {
    if (mathJaxLoaded) {
      window.MathJax?.typesetPromise?.();
    }
  }, [formula, mathJaxLoaded]);

  return <span dangerouslySetInnerHTML={{ __html: `\\(${formula}\\)` }} />;
}
