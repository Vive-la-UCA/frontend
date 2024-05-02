import { CORE_API_URL } from "@/app/constants/session";
export function SelectedRoutes({ locationSelected }) {
    return (
        <div className="flex flex-row w-full justify-start gap-2 items-center">
            <img className="rounded-xl h-15 w-15 object-cover" src={`${CORE_API_URL}/uploads/${locationSelected.image}`} alt="" />
            <p>{locationSelected.name}</p>
        </div>
    );
};
