import Theme from "./Theme"
import Search from "./Search"
import Dropdown from "./Dropdown"
import ProfileCard from "./ProfileCard"
import Cat1 from "../assets/img/Cat1.jpg"
import Cat2 from "../assets/img/Cat2.jpg"
import Cat3 from "../assets/img/Cat3.jpg"
import Cat4 from "../assets/img/Cat4.jpg"

type changeTheme = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({isDark, setIsDark}: changeTheme) {

    const cats = ['Kitkat', 'Mallows', 'Peanut', 'Pretzel'];

    return (
        <div className={`${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"}
            h-auto w-full flex flex-col items-start justify-start p-[calc(0.6vw+0.4rem)] gap-[calc(0.6vw+0.4rem)]`}>
            <div className="h-auto w-full flex flex-row items-center justify-center">
                <Theme isDark={isDark} setIsDark={setIsDark}/>
                <Search isDark={isDark}/>  
                <Dropdown isDark={isDark} items={cats} label={"Meow"} />
            </div>
            <div className="h-auto w-full flex flex-row items-center justify-center">
                <ProfileCard name="Meow" image={Cat1} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi, autem iste minima recusandae tenetur expedita dolorum esse distinctio maiores debitis quia officia est quos alias aliquam, natus neque reiciendis?"/>
                <ProfileCard name="Kitkat" image={Cat2} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi, autem iste minima recusandae tenetur expedita dolorum esse distinctio maiores debitis quia officia est quos alias aliquam, natus neque reiciendis?"/>
                <ProfileCard name="Mallows" image={Cat3} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi, autem iste minima recusandae tenetur expedita dolorum esse distinctio maiores debitis quia officia est quos alias aliquam, natus neque reiciendis?"/>
                <ProfileCard name="Peanut" image={Cat4} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi, autem iste minima recusandae tenetur expedita dolorum esse distinctio maiores debitis quia officia est quos alias aliquam, natus neque reiciendis?"/>
            </div>
        </div>
    )
}

export default Header
