import type { JSX } from "react";
import { useState } from "react";
import GoogleSignUp from "../firebase/GoogleSignUp.js";

type UserFormProps = {
    elements: JSX.Element[];
    isDark: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
    elements,
    isDark
}) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="relative h-auto w-auto flex flex-col items-center justify-start p-[calc(0.6vw+0.4rem)] 
            ">
            <span className={`${isDark? "text-[var(--text-color)] bg-[var(--bg-color)]" : "text-[var(--bg-color)] bg-[var(--text-color)]"}
                p-[calc(0.4vw+0.2rem)] cursor-pointer text-[calc(0.6vw+0.3rem)] hover:text-[var(--placeholder-color)]
                transition duration-300 ease-in-out`}
                onClick={() => setIsActive((prev) => !prev)}>Sign Up</span>
            {isActive && <div className="h-[360px] w-[360px] flex flex-col items-center justify-start
                border-2 border-[var(--border-color)] absolute bg-[var(--bg-color)] gap-[calc(0.6vw+0.4rem)]">
                <i className="fa-solid fa-circle-xmark text-[calc(1vw+0.8rem)] cursor-pointer self-end 
                    mt-[-12px] mr-[-18px]" onClick={() => setIsActive((prev) => !prev)}></i>
                <GoogleSignUp isDark={false}/>
            </div>}
            {elements}
        </div>
    )
}

export default UserForm
