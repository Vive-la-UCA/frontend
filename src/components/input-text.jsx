export default function InputText({ title }) {
    return (
        <label className="flex my-5 flex-col gap-2">
            <p className="font-bold">{title}</p>
            <input type="text" className="bg-gray-primary py-2 px-5 outline-none rounded-xl" />
        </label>
    );
};
