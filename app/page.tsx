"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    // Fetch the HTML content
    fetch("/index.html")
      .then((response) => response.text())
      .then((html) => {
        setHtmlContent(html);
      })
      .catch((error) => {
        console.error("Error loading HTML:", error);
      });
  }, []);

  return (
    <main className="p-4">
      <Script src="/js/insert.js" strategy="afterInteractive" />
      <div 
        className="flex flex-col mx-auto min-h-screen"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
}
