"use client";
import { useStateStore } from "../hook/useStateStore";
import NavBar from "./NavBar";

const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const theme = useStateStore((state) => state.theme);

  return (
    <div className={`flex justify-center ${theme === "dark" ? "dark" : ""}`}>
      <div className="w-[400px] min-h-screen relative">
        {children}
        <NavBar />
      </div>
    </div>
  );
};

export default LayoutWrapper;
