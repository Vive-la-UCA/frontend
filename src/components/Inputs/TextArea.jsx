export function TextArea({ title, onChange, value }) {
    return (
        <label className="flex my-5 flex-col gap-2">
            <p className="font-bold">{title}</p>
            <textarea onChange={onChange} value={value} className="bg-gray-primary py-2 px-5 outline-none rounded-xl resize-none h-40" />
        </label>
    );
};
