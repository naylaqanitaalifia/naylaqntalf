import { ReactLenis } from "lenis/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import WorkDetail from "@/pages/WorkDetail";
import ScrollToTop from "@/components/scroll-to-top";

{
  /* <div className="min-h-screen mx-auto max-w-4xl py-37.5"> */
}
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <ReactLenis
          root
          options={{ lerp: 0.07, duration: 1.5, smoothWheel: true }}
        >
          <div className="min-h-screen bg-primary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works/:slug" element={<WorkDetail />} />
            </Routes>
          </div>
        </ReactLenis>
      </BrowserRouter>
    </>
  );
}

export default App;
