import LoginCard from "@/components/LoginCard";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background font-montserrat">
      <section className="grow w-full flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-xl h-[80%] w-[35%] p-5">
          <LoginCard />
        </div>
      </section>
    </main>
  );
};

export default Login;
