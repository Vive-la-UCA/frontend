import SideNav from "@/components/SideNav";
import { ToastContainer } from "react-toastify";
export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      {/** El children en principio es page.jsx */}
      <div className="flex-grow px-6 py-10 md:overflow-y-auto pl-10 pr-20 bg-gray-50">
        <ToastContainer />
        {children}
      </div>
    </div>
  );
}
