//Este componente se encargara del fecha de la ruta y el numero a mostrar
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiRoute } from "react-icons/ci";

const CardResumeData = [
  { routeName: "Rutas", number: "20", icon: CiRoute },
  { routeName: "Usuarios", number: "30", icon: CiUser },
  { routeName: "Localidades", number: "20", icon: CiLocationOn },
]

//Acá se harian los fetch de los numeros

export default function CardResumeDashboard() {
  return (
    <>
      {
        CardResumeData.map((data, index) => {
          return (
            <div key={index} className="w-1/4 bg-white p-4 rounded-md shadow-md relative overflow-hidden">
              <h2 className="text-md text-gray-900 font-semibold mb-2">{data.routeName}</h2>
              <p className="text-4xl text-yellow-badge font-bold">{data.number}</p>
              <div className="absolute top-0 -right-10 text-gray-100" >
                <data.icon size={130} />
              </div>
            </div>
          )
        })
      }
    </>
  );
}
