import { useState } from "react";

type DropdownProps = {
    isDark: boolean;
    items: string[];
    label?: string;

}

const Dropdown: React.FC<DropdownProps> = ({isDark, items, label}) => {

    const [viewItems, setViewItems] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleItems = () => {
        setViewItems((prev) => !prev);
    }

    const handleSelect = (item: string) => {
        setSelectedItem(item);
        setViewItems((prev) => !prev);
    };

    return (
        <div title="Dropdown" className={`${isDark? "text-[var(--placeholder-color)] bg-[var(--text-color)]" : "text-[var(--placeholder-color)] bg-[var(--bg-color)]"}
            h-auto w-[calc(8.8vw+8.2rem)] relative flex flex-row items-center justify-between gap-[calc(0.6vw+0.4rem)] px-[calc(0.6vw+0.4rem)] py-[calc(0.4vw+0.2rem)] 
            border-2 border-[var(--border-color)] cursor-pointer m-[calc(0.6vw+0.4rem)]`}>
            <span className={`
                text-[calc(0.6vw+0.3rem)] cursor-pointer`}>
                {selectedItem || label}
            </span>
            <i className={`fa-solid fa-arrow-down-short-wide text-[calc(0.6vw+0.3rem)] cursor-pointer`}
                onClick={handleItems}></i>

            {viewItems && <div title="Dropdown Items" className={`${isDark? "text-[var(--placeholder-color)] bg-[var(--text-color)]" : "text-[var(--placeholder-color)] bg-[var(--bg-color)]"}
                absolute top-0 left-0 mt-[calc(1.6vw+1rem)] ml-[-2px]
                h-auto w-[calc(8.8vw+8.2rem)] flex flex-col items-start justify-start border-2 border-[var(--border-color)]`}>
                <ul className="h-auto w-full flex flex-col items-start justify-start">
                    {items.map((item, index) => (
                        <li
                        key={index}
                        className={`${isDark ? "hover:text-[var(--bg-color)]" : "hover:text-[var(--text-color)]"}
                            text-[calc(0.6vw+0.3rem)] cursor-pointer px-[calc(0.6vw+0.4rem)] py-[calc(0.4vw+0.2rem)]
                            w-full ${index !== items.length - 1 ? "border-b border-[var(--border-color)]" : ""}`}
                        onClick={() => handleSelect(item)}
                        >
                        {item}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default Dropdown
