import countries from "@/data/country.json";
import { useState } from "react";

export interface Country {
    name: string;
    code?: string;
}

interface CountrySelectorProps {
    onSelectCountry: (country: Country) => void;
}

const CountrySelector = ({ onSelectCountry }: CountrySelectorProps) => {
    const [state, setState] = useState({
        isOpen: false,
        selectedCountry: null as Country | null,
        isFocused: false,
        value: ''
    });

    const changeState = (key: string, value: any) => {
        setState((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSelectCountry = (country: Country) => {
        changeState("selectedCountry", country);
        changeState("isOpen", false);
        changeState('value', "");
        onSelectCountry(country);
    };

    return (
        <div className="relative">
            <span className="pb-2 inline-block font-medium text-sm text-gray-700">
                Country
            </span>

            {/* Trigger */}
            <div
                onClick={() => changeState("isOpen", !state.isOpen)}
                className="border px-3 py-2.5 rounded-lg cursor-pointer flex items-center justify-between bg-transparent shadow-sm hover:border-gray-400 transition"
            >
                <span className="text-gray-800">
                    {state.selectedCountry?.name || "Select your country"}
                </span>
                <div
                    className={`transform transition-transform duration-300 ${state.isOpen ? "rotate-180" : "rotate-0"}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down text-gray-500"
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
            </div>

            {/* Dropdown */}
            {state.isOpen && (
                <div
                    className="absolute mt-2 max-h-80 px-4  bg-white text-black py-2 rounded-xl shadow-xl w-full z-20 animate-fade-in"
                >
                    <div className="border border-gray-light rounded-lg flex gap-0.5 items-center px-2">
                        <div>
                            <div className="relative w-6 h-6">
                                {/* Search Icon (Rotate & Fade Out) */}
                                <div
                                    className={`absolute inset-0 transition-all duration-200 ease-in-out transform ${state.isFocused
                                        ? 'opacity-0 rotate-360 scale-90 pointer-events-none'
                                        : 'opacity-100 rotate-0 scale-100'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={22}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-search"
                                    >
                                        <path d="M21 21l-4.34-4.34" />
                                        <circle cx={11} cy={11} r={8} />
                                    </svg>
                                </div>

                                {/* Move Left Icon (Fade In with Rotation) */}
                                <div
                                    className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${state.isFocused
                                        ? 'opacity-100 rotate-0 scale-100'
                                        : 'opacity-0 -rotate-90 scale-90 pointer-events-none'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={22}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-move-left"
                                    >
                                        <path d="M6 8l-4 4 4 4M2 12h20" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                        <div className="w-full">
                            <input
                                onFocus={() => changeState('isFocused', true)}
                                onBlur={() => changeState('isFocused', false)}
                                onChange={(e) => changeState('value', e.target.value)}
                                placeholder="Search for your country..."
                                className="p-2 outline-none text-gray-dark h-full text-sm w-full"
                            />
                        </div>
                    </div>
                    <div className="overflow-y-auto max-h-64">
                        {countries.filter((item) => item.name.toLocaleLowerCase().includes(state.value.toLocaleLowerCase())).map((item: Country, idx: number) => (
                            <div
                                key={idx}
                                onClick={() => handleSelectCountry(item)}
                                className=" py-2 cursor-pointer hover:bg-gray-100 text-sm text-gray-800"
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default CountrySelector;
