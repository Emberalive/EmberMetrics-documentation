import Themes from "./Themes.jsx";


export default function Settings (props) {

    return (
        <div className="settings-wrapper">
            <section className="settings">
                <div>
                    <header className="settings-header">
                        <h1>Settings</h1>
                    </header>
                    <div className="settings-entry">
                        <p className="settings-entry__label">Display Mode: </p>
                        <div className={"settings-entry__value-container"} style={{display: "flex"}}>
                            <button
                                className={props.isDarkMode ? "general-button__selection general-button-selection__clicked" : "general-button__selection"}
                                onClick={() => {
                                    props.setIsDarkMode(true);
                                }}>DarkMode
                            </button>
                            <button
                                className={props.isDarkMode ? "general-button__selection" : "general-button__selection general-button-selection__clicked"}
                                onClick={() => {
                                    props.setIsDarkMode(false);
                                }}>LightMode
                            </button>
                        </div>
                    </div>
                    <div className="theme-container__wrapper">
                        <h1 style={{
                            textAlign: "center",
                            fontColor: "var(--neutral)",
                        }}>Themes</h1>
                        <Themes setLogoImage={props.setLogoImage} themes={props.themes}/>
                    </div>
                </div>
            </section>
        </div>
    )
}