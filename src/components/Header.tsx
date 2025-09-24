import Theme from "./Theme"
import TopNav from "./TopNav"

type changeTheme = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({isDark, setIsDark}: changeTheme) {

    return (
        <div className={`${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"}
            h-full w-full flex flex-col items-start justify-evenly px-[calc(0.6vw+0.4rem)] gap-[calc(0.6vw+0.4rem)]`}>
            <div className="h-auto w-full flex flex-row items-center justify-between">
                <Theme isDark={isDark} setIsDark={setIsDark}/>
                <TopNav titles={[
                    <div className={`${isDark? "text-[var(--placeholder-color)] bg-[var(--text-color)] hover:text-[var(--bg-color)]" : "text-[var(--placeholder-color)] bg-[var(--bg-color)]  hover:text-[var(--text-color)]"}
                        flex flex-row items-center justify-center bg-transparent cursor-pointer`}>
                        <p>Home</p>
                    </div>,
                    <div className={`${isDark? "text-[var(--placeholder-color)] bg-[var(--text-color)] hover:text-[var(--bg-color)]" : "text-[var(--placeholder-color)] bg-[var(--bg-color)] hover:text-[var(--text-color)]"}
                        flex flex-row items-center justify-center gap-[calc(0.4vw+0.2rem)] bg-transparent
                        cursor-pointer text-[var(--placeholder-color)] hover:text-[var(--text-color)]`}>
                        <p>Report Lost Item</p>
                        <i className="fa-solid fa-chevron-down text-[calc(0.5vw+0.3rem)]"></i>
                    </div>,
                    <div className={`${isDark? "text-[var(--placeholder-color)] bg-[var(--text-color)] hover:text-[var(--bg-color)]" : "text-[var(--placeholder-color)] bg-[var(--bg-color)] hover:text-[var(--text-color)]"}
                        flex flex-row items-center justify-center gap-[calc(0.4vw+0.2rem)] bg-transparent
                        cursor-pointer text-[var(--placeholder-color)] hover:text-[var(--text-color)]`}>
                        <p>Search Lost Items</p>
                        <i className="fa-solid fa-chevron-down text-[calc(0.5vw+0.3rem)] bg-transparent"></i>
                    </div>,
                    <div className={`${isDark? "text-[var(--placeholder-color)] bg-[var(--text-color)] hover:text-[var(--bg-color)]" : "text-[var(--placeholder-color)] bg-[var(--bg-color)] hover:text-[var(--text-color)]"}
                        flex flex-row items-center justify-center cursor-pointer text-[var(--placeholder-color)] hover:text-[var(--text-color)]`}>
                        <p>Contact</p>
                    </div>
                ]} />
            </div>
        </div>
    )
}

export default Header
