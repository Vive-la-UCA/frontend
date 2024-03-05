"use client";
import LoginCard from "@/components/LoginCard";
import { CheckToken } from "@/services/auth/authService";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();

  const checkToken = async () => {
    const authToken = sessionStorage.getItem("token");
    const { status } = await CheckToken(authToken);
    if (status === 200) {
      router.push("/dashboard");
      return;
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background font-montserrat">
      <ToastContainer />
      <section className="grow w-full flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-xl h-[80%] w-[35%] p-5">
          <LoginCard />
        </div>
      </section>
    </main>
  );
};

export default Login;
