import {useState} from "react";

export default function Themes (props){

    const storedTheme = localStorage.getItem("theme");


    const [themeClicked, setThemeClicked] = useState(null);

    function changeTheme(theme) {
        const root = document.documentElement;

        props.setLogoImage(theme.logo);

        try {
            root.style.setProperty("--secondary", theme.colour.secondary);
            root.style.setProperty("--tertiary", theme.colour.tertiary);

            root.style.setProperty("--secondary-75", theme.colour.secondary75);
            root.style.setProperty("--tertiary-75", theme.colour.tertiary75);

            // dark mode
            root.style.setProperty("--dm-secondary", theme.colour.secondary);
            root.style.setProperty("--dm-tertiary", theme.colour.tertiary);

            root.style.setProperty("--dm-secondary-75", theme.colour.secondary75);
            root.style.setProperty("--dm-tertiary-75", theme.colour.tertiary75);
        } catch (e){
            console.log(e)
        }
    }

    const themeList = props.themes.map(theme => {
        return (
            <div key={theme.name} className={"theme_wrapper"} onClick={() => {
                console.log("clicked Theme: " + theme.name)
                setThemeClicked(theme)
                changeTheme(theme)
            }}>
                <div className={(themeClicked === theme) || (storedTheme && JSON.parse(storedTheme).name === theme.name) ? "theme-container theme_wrapper_clicked" : "theme-container"}>
                    <div className={"theme"} style={{
                        backgroundColor: theme.colour.tertiary,
                    }}>
                    </div>
                </div>
                <p style={{
                    fontSize: "12px",
                    textAlign: "center",
                    width: "50px"
                }}>{theme.name}</p>
            </div>
        )
    })

    return (
        <form className={"theme-form"}>
            <div className="themes-container">
                {themeList}
            </div>
            {themeClicked && <div className="theme-form__buttons">
                <button className={"success-button general-button"} type={"button"} onClick={() => {
                    localStorage.setItem("theme", JSON.stringify(themeClicked));
                    changeTheme(themeClicked);
                    setThemeClicked(null);
                }}>Save Theme</button>
                <button className={"danger-button general-button"} type={"button"} onClick={() => {
                    console.log("cancelling theme selection")
                    setThemeClicked(null);
                    if (storedTheme) {
                        const themeObj = JSON.parse(storedTheme);
                        changeTheme(themeObj)
                    } else {
                        changeTheme(props.themes[0])
                    }
                }}>Cancel</button>
            </div>}
        </form>
    )
}