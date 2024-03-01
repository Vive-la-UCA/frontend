import Footer from "../Components/Footer";
import LoginCard from "../Components/LoginCard";
import Navbar from "../Components/Navbar";

const home = () => {
    return (
      <main className="flex min-h-screen flex-col items-center bg-background font-montserrat">
        <Navbar/>
       <section className="grow w-full flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-xl h-[80%] w-[35%] p-5">
        <LoginCard/>
        </div>
       </section>
      
       
        
      </main>
    );
  }
  
  export default home;