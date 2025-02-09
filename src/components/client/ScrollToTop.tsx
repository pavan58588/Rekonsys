"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="fixed bottom-8 right-8 z-[99] flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 hover:bg-opacity-80"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0159 7.75L7.25585 1.99001C7.18747 1.92169 7.10645 1.86754 7.01745 1.83083C6.92844 1.79411 6.83314 1.77563 6.73687 1.77632C6.6406 1.77701 6.54555 1.79686 6.45703 1.83486C6.36851 1.87286 6.28818 1.92818 6.22066 1.99754C6.15313 2.06689 6.09991 2.14865 6.06414 2.23812C6.02838 2.32759 6.01087 2.42305 6.01252 2.51931C6.01417 2.61557 6.03495 2.71045 6.07381 2.79865C6.11267 2.88685 6.16883 2.96612 6.23886 3.03251L10.7039 7.50001H1.50085C1.30404 7.50001 1.11541 7.57903 0.97787 7.71656C0.840339 7.85409 0.761322 8.04273 0.761322 8.23954C0.761322 8.43635 0.840339 8.62498 0.97787 8.76251C1.11541 8.90004 1.30404 8.97906 1.50085 8.97906H10.7039L6.23886 13.4466C6.10161 13.5842 6.02295 13.7728 6.02295 13.9694C6.02295 14.166 6.10161 14.3545 6.23886 14.4921C6.37611 14.6293 6.56471 14.708 6.76126 14.708C6.95781 14.708 7.14641 14.6293 7.28366 14.4921L13.0159 8.75001C13.0825 8.68213 13.1358 8.60205 13.1725 8.51352C13.2093 8.42499 13.2289 8.32991 13.2303 8.23354C13.2318 8.13716 13.2151 8.04156 13.181 7.95205C13.1468 7.86254 13.0958 7.78107 13.0311 7.71146C13.0311 7.75584 13.0219 7.75 13.0159 7.75Z"
              fill="white"
            />
          </svg>
        </button>
      )}
    </>
  );
}
