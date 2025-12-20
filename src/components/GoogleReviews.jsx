import { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    if (!document.getElementById("tagembed-script")) {
      const script = document.createElement("script");
      script.id = "tagembed-script";
      script.src = "https://widget.tagembed.com/embed.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tagembed-widget"
      data-widget-id="311787"
      data-website="1"
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        minHeight: "420px",
      }}
    ></div>
  );
};

export default GoogleReviews;