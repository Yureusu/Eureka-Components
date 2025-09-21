
type changeTheme ={
    isDark: boolean;
}

function Search({isDark}: changeTheme) {
    return (
        <div title="Search" className={`bg-transparent p-[calc(0.6vw+0.4rem)] transition-colors ease-in-out`}>
            <div className="flex flex-row items-center justify-end">
                <input type="text" placeholder='What are you looking for?'
                    className={`   ${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"}
                    h-auto w-[calc(13.8vw+6.2rem)] border-2 border-[#CFD8DC] rounded-4xl outline-0 px-[calc(0.6vw+0.4rem)] py-[calc(0.4vw+0.2rem)] pr-[calc(1.6vw+1.2rem)] cursor-pointer text-[calc(0.6vw+0.3rem)] placeholder-[var(--placeholder-color)]`}/>
                <i className={`fa-solid fa-magnifying-glass absolute pr-[calc(1.4vw+0.8rem)] cursor-pointer p-[calc(0.4vw+0.2rem)] text-[var(--placeholder-color)] text-[calc(0.6vw+0.4rem)]`}></i>   
            </div>
        </div>
    )
}

export default Search
