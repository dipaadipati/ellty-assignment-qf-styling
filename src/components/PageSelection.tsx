import { useState } from "react";

export default function PageSelection({ pageName }: { pageName: string }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className="group flex justify-between pt-2 pr-[15px] pb-2 pl-5.5 w-[370px] h-[42px] cursor-pointer"
            onClick={() => setIsClicked(!isClicked)}
        >
            <span>{pageName}</span>
            <div className="relative">
                <div
                    className="w-[23px] h-[23px] border border-[#CDCDCD] group-hover:border-[#BDBDBD] rounded-md"
                >
                    <div
                        className={`w-full h-full flex justify-center items-center rounded-md duration-150
                                    ${isClicked ? "bg-[#2469F6]" : "opacity-0"}
                                    `}
                    >
                        <svg
                            width="12.88"
                            height="8.1"
                            viewBox="0 0 12.88 8.1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 4L4.5 7L11.88 1"
                                stroke="#E3E3E3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
