export default function InputText({ title, onChange, value }) {
    return (
        <label className="flex my-5 flex-col gap-2">
            <p className="font-bold">{title}</p>
            <input onChange={onChange} value={value} type="text" className="bg-gray-primary py-2 px-5 outline-none rounded-xl" />
        </label>
    );
};
