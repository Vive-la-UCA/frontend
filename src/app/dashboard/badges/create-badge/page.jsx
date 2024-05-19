"use client";
import InputText from "@/components/Inputs/input-text";
import ImageUpload from "@/components/Inputs/ImageUpload";
import { createNewBadge } from "@/services/data/Badge.service";
import DropdownRoutes from "@/components/Inputs/DropdownRoutes";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import BadgeValidator from "@/app/validations/badgeValidator";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const router = useRouter();

  let badge = {
    name: "",
    image: null,
    route: null,
  };

  const getNameHandler = (e) => {
    badge.name = e.target.value;
  };

  const getSelectedRouteHandler = (location) => {
    badge.route = location.uid;
    console.log(badge);
  };

  const getImageFileHandler = (file) => {
    badge.image = file;
  };

  async function submitHandler(e) {
    e.preventDefault();
    const validate = BadgeValidator(badge);

    if (validate.status === false) {
      toast.info(validate.message);
      return;
    }

    const response = await createNewBadge(badge);
    if (response) {
      toast.success("Badge creada con éxito");
      setTimeout(() => {
        router.push("/dashboard/badges");
      }, 2000);
    } else {
      toast.error("Error al crear el badge");
    }

    if (response) {
      toast.success("Insignia creada con éxito");
    }

    setTimeout(() => {
      router.push("/dashboard/badges");
    }, 2000);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Crear una insignia</h1>
      <hr />
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="flex flex-col w-1/2">
            <InputText title={"Nombre"} onChange={getNameHandler} />
            <DropdownRoutes
              title={"Ruta"}
              onClickDropdown={getSelectedRouteHandler}
            />
          </div>
          <ImageUpload onSelectedFile={getImageFileHandler} />
        </div>

        <div className="flex flex-row mt-10 justify-center w-full">
          <button
            type="submit"
            className="bg-black text-white text-2xl py-2 px-5 rounded-xl mt-5"
          >
            Crear insignia
          </button>
        </div>
      </form>
    </div>
  );
}
