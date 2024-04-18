"use client";
import { useEffect } from "react";

const backToTop = () => {
  useEffect(() => {
    const mybutton = document.getElementById("btn-back-to-top");

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", scrollFunction);
    mybutton.addEventListener("click", backToTop);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
      mybutton.removeEventListener("click", backToTop);
    };
  }, []);

  return (
    <button
      type="button"
      id="btn-back-to-top"
      className="fixed bottom-5 end-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
    >
      <span className="[&gt;svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </span>
    </button>
  );
};

export default backToTop;
