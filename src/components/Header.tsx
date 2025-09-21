import Theme from "./Theme"
import Search from "./Search"

type changeTheme = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({isDark, setIsDark}: changeTheme) {

    return (
        <div className={`${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"}
            h-full w-full flex flex-col items-start justify-evenly px-[calc(0.6vw+0.4rem)] gap-[calc(0.6vw+0.4rem)]`}>
            <div className="h-auto w-full flex flex-row items-center justify-center">
                <Theme isDark={isDark} setIsDark={setIsDark}/>
            </div>
        </div>
    )
}

export default Header
