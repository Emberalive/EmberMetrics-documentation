import './index.css'
import {useEffect, useState} from "react";
import Menu from "./components/Menu";
import TextArea from "./components/TextArea.jsx";
import LogoLight from "./assets/metrics-logo_light.svg";
import LogoDark from "./assets/metrics-logo_dark.svg";
import GettingStarted from "./components/GettingStarted.jsx";
import Settings from "./components/Settings.jsx";
import Sparkr from "./assets/SVG 2.1 | Original Sparkr.svg";
import Ocean from "./assets/SVG 2.1 | Ocean Blues.svg";
import Forest from "./assets/SVG 2.1 | Forest Green.svg";
import Royal from "./assets/SVG 2.1 | Royal Purple.svg";
import Berry from "./assets/SVG 2.1 | Berry red.svg";
import Magenta from "./assets/SVG 2.1 | Sunset Magenta.svg";
import Sunrise from "./assets/SVG 2.1 | orange sunrise.svg";
import Teal from "./assets/SVG 2.1 | Teal Lagoon.svg";
import Lavander from "./assets/SVG 2.1 | Lavander Mist.svg";
import Minty from "./assets/SVG 2.1 | Minty Fresh.svg";
import Sapphire from "./assets/SVG 2.1 | Midnight Sapphire.svg";
import Crimson from "./assets/SVG 2.1 | Crimson Ember.svg";
import Arctic from "./assets/SVG 2.1 | Arctic Cyan.svg";
import Copper from "./assets/SVG 2.1 | Copper Flame.svg";
import Emerald from "./assets/SVG 2.1 | Emerald Depths.svg";
import Violet from "./assets/SVG 2.1 | Violet Storm.svg";
import Features from "./components/Features.jsx";
import Roadmap from "./components/Roadmap.jsx";

export default function App() {
    const [logoImage, setLogoImage] = useState(() => Sparkr)

    const [activeView, setActiveView] = useState('home');

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (darkMode) {
            return true
        } else {
            return false
        }
    });

    const [themes, setThemes] = useState([
        {
            name: "Midnight Sapphire",
            colour: {
                secondary: "#2f5dff",
                tertiary: "#001f99",
                secondary75: "#2f5dff75",
                tertiary75: "#001f9975",
            },
            logo: Sapphire,
        },
        {
            name: "Crimson Ember",
            colour: {
                secondary: "#ff4d4d",
                tertiary: "#b30000",
                secondary75: "#ff4d4d75",
                tertiary75: "#b3000075",
            },
            logo: Crimson,
        },
        {
            name: "Arctic Cyan",
            colour: {
                secondary: "#42d7ff",
                tertiary: "#0288a8",
                secondary75: "#42d7ff75",
                tertiary75: "#0288a875",
            },
            logo: Arctic,
        },
        {
            name: "Copper Flame",
            colour: {
                secondary: "#ff7a42",
                tertiary: "#b34700",
                secondary75: "#ff7a4275",
                tertiary75: "#b3470075",
            },
            logo: Copper,
        },
        {
            name: "Emerald Depths",
            colour: {
                secondary: "#2ecc71",
                tertiary: "#0b7a3e",
                secondary75: "#2ecc7175",
                tertiary75: "#0b7a3e75",
            },
            logo: Emerald,
        },
        {
            name: "Violet Storm",
            colour: {
                secondary: "#9b42ff",
                tertiary: "#4b0099",
                secondary75: "#9b42ff75",
                tertiary75: "#4b009975",
            },
            logo: Violet,
        },
        {
            name: "Sparkr Original",
            colour: {
                secondary: "#FF8C42",
                tertiary: "#CC5803",
                secondary75: "#FF8C4275",
                tertiary75: "#CC580375",
            },
            logo: Sparkr,
        },
        {
            name: "Ocean Blues",
            colour: {
                secondary: "#4287f5",
                tertiary: "#0349cc",
                secondary75: "#4287f575",
                tertiary75: "#0349cc75",
            },
            logo: Ocean,
        },
        {
            name: "Forest Greens",
            colour: {
                secondary: "#42b883",
                tertiary: "#0a7e4e",
                secondary75: "#42b88375",
                tertiary75: "#0a7e4e75",
            },
            logo: Forest,
        },
        {
            name: "Royal Purples",
            colour: {
                secondary: "#8a42ff",
                tertiary: "#5e03cc",
                secondary75: "#8a42ff75",
                tertiary75: "#5e03cc75",
            },
            logo: Royal,
        },
        {
            name: "Berry Red",
            colour: {
                secondary: "#ff4270",
                tertiary: "#cc0349",
                secondary75: "#ff427075",
                tertiary75: "#cc034975",
            },
            logo: Berry,
        },
        {
            name: "Sunset Magenta",
            colour: {
                secondary: "#ff42a4",
                tertiary: "#cc0377",
                secondary75: "#ff42a475",
                tertiary75: "#cc037775",
            },
            logo: Magenta,
        },
        {
            name: "Golden Sunrise",
            colour: {
                secondary: "#ffb142",
                tertiary: "#cc8403",
                secondary75: "#ffb14275",
                tertiary75: "#cc840375",
            },
            logo: Sunrise,
        },
        {
            name: "Teal Lagoon",
            colour: {
                secondary: "#42f5e6",
                tertiary: "#03cccc",
                secondary75: "#42f5e675",
                tertiary75: "#03cccc75",
            },
            logo: Teal,
        },
        {
            name: "Lavender Mist",
            colour: {
                secondary: "#c742ff",
                tertiary: "#7f03cc",
                secondary75: "#c742ff75",
                tertiary75: "#7f03cc75",
            },
            logo: Lavander,
        },
        {
            name: "Minty Fresh",
            colour: {
                secondary: "#42f57a",
                tertiary: "#03cc49",
                secondary75: "#42f57a75",
                tertiary75: "#03cc4975",
            },
            logo: Minty,
        },
    ]);

    const savedTheme = JSON.parse(localStorage.getItem("theme"));


    useEffect(() => {
        if (savedTheme) {
            document.documentElement.style.setProperty("--secondary", savedTheme.colour.secondary);
            document.documentElement.style.setProperty("--tertiary", savedTheme.colour.tertiary);
            document.documentElement.style.setProperty("--secondary-75", savedTheme.colour.secondary75);
            document.documentElement.style.setProperty("--tertiary-75", savedTheme.colour.tertiary75);

            document.documentElement.style.setProperty("--dm-secondary", savedTheme.colour.secondary);
            document.documentElement.style.setProperty("--dm-tertiary", savedTheme.colour.tertiary);
            document.documentElement.style.setProperty("--dm-secondary-75", savedTheme.colour.secondary75);
            document.documentElement.style.setProperty("--dm-tertiary-75", savedTheme.colour.tertiary75);
            setLogoImage(savedTheme.logo);
        }
    }, [setLogoImage, savedTheme]);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
        }    }, [isDarkMode])

    return (
        <main>
                <>
                    <Menu setActiveView={setActiveView} activeView={activeView} logoImage={logoImage}/>
                    {activeView === 'home' && <section>
                        {activeView === 'home' &&
                            <>
                                <div id={'logo-wrapper'}>
                                    <img  src={isDarkMode ? LogoDark : LogoLight} alt={isDarkMode ? "dark Logo" : "light logo"}/>
                                </div>
                                <TextArea data={{
                                    text: [{
                                        title: '\'Monitor, manage, and understand your infrastructure - on your own terms.\'',
                                        text: 'EmberMetrics is a self-hosted monitoring and system administration platform that delivers real-time system metrics, remote device visibility, and centralized management without relying on external SaaS providers. Built for developers, sysadmins, and homelab environments, EmberMetrics combines lightweight collectors with a modern web dashboard to give you complete control over your monitoring stack.',
                                        img: null,
                                    }],
                                    code: [{
                                        code: null,
                                        language: null,
                                    }]
                                }}/>
                                <h1>Key Benefits</h1>
                                <TextArea data={{
                                    text: [
                                        {text: '- Run entirely on your own infrastructure with no external dependencies.\n' +
                                    '\n' +
                                    '- Keep your system data private and under your control.',
                                    img: null,
                                    title: 'Full Control, No SaaS Lock-In'
                                },
                                {
                                    text: '- See CPU, memory, processes, network, and storage usage in real time.\n' +
                                    '\n' +
                                    '- Quickly identify resource bottlenecks and misbehaving processes.',
                                    img: null,
                                    title: 'Real-Time Operational Visibility',
                                }],
                                    code: [{}]
                                }}/>
                                <TextArea data={{
                                    text: [
                                        {
                                            text: '- Structured JSON output makes integration and customization easy.\n' +
                                                '\n' +
                                                '- Designed to evolve with historical metrics, and automation.',
                                            img: null,
                                            title: 'Extensible by Design'
                                        },
                                        {
                                            text: 'Each monitored device runs a lightweight EmberMetrics collector that exposes' +
                                                ' real-time system metrics over HTTP. These collectors are designed to be low overhead, ' +
                                                'read-only, and easy to deploy on internal systems.',
                                            img: null,
                                            title: 'Lightweight Collectors (Remote Devices)'
                                        }
                                    ],
                                    code: [{}]
                                }}/>
                                <h1>Architecture Overview</h1>
                                <TextArea data={{
                                    text: [
                                        {
                                            text: 'Each monitored device runs a lightweight EmberMetrics collector that exposes' +
                                                ' real-time system metrics over HTTP. These collectors are designed to be low overhead, ' +
                                                'read-only, and easy to deploy on internal systems.',
                                            img: null,
                                            title: 'Lightweight Collectors (Remote Devices)'
                                        }
                                    ],
                                    code: [{}]
                                }}/>
                                <TextArea data={{
                                    text: [
                                        {
                                            text: 'The hosted EmberMetrics API acts as the control plane, providing local system ' +
                                                'metrics while managing a persistent list of remote devices. This central host is ' +
                                                'responsible for coordinating device access and serving data to the dashboard.',
                                            img: null,
                                            title: 'Central Host & Control Plane'
                                        }
                                    ],
                                    code: [{}]
                                }}/>
                                <TextArea data={{
                                    text: [
                                        {
                                            text: 'The EmberMetrics web dashboard connects to the hosted API to present system ' +
                                                'metrics, device information, and management controls in a modern, responsive ' +
                                                'interface. This separation allows the UI to remain flexible while the data layer ' +
                                                'stays lightweight and reliable.',
                                            img: null,
                                            title: 'Web Dashboard'
                                        }
                                    ],
                                    code: [{
                                        code: null,
                                        language: null,
                                    }]
                                }}/>
                            </>
                    }
                    </section>}
                </>
            {activeView === 'getting-started' &&
                <section>
                    <GettingStarted isDarkMode={isDarkMode}/>
                </section>
            }
            {
                activeView === 'features' && <Features />
            }
            {
                activeView === 'road-map' && <Roadmap />
            }
            {activeView === 'settings' && <Settings isDarkMode={isDarkMode} themes={themes} setIsDarkMode={setIsDarkMode} setLogoImage={setLogoImage}/>}
        </main>
    )
}