import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

// import Background from "../components/Background";

export default function MainLayout() {
  return (
    <>
      <div className="font-lato min-h-dvh bg-black font-light">
        {/* <Background /> */}
        <div className="flex min-h-dvh flex-col bg-black/50 text-yellow-200">
          {/* Navbar */}
          <Navbar />
          {/* Container */}
          <div className="container mx-auto p-4 md:p-8">
            <Outlet />
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
