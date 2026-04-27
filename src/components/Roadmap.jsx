import TextArea from "./TextArea.jsx";

export default function Roadmap(props) {
    return (
        <section>
            <h1>Roadmap</h1>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [{
                    text: 'EmberMetrics is actively being developed. This page outlines what is planned for future ' +
                        'releases, organised by priority. Features marked as In Progress are currently being worked on. ' +
                        'Planned features are confirmed additions that have not yet been started.'
                }],
                code: []
            }}/>

            {/* ── DEPLOYMENT ── */}
            <h2>Deployment</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Docker Installation — Planned',
                        text: 'Currently EmberMetrics requires Node.js to be installed and the front-end and API to be ' +
                            'started manually. A Docker-based installation is planned that will package both into a single ' +
                            'container, removing all manual dependency management and reducing setup to a single command.\n\n' +
                            'This will make EmberMetrics significantly easier to deploy, particularly for users who are ' +
                            'already running other services through Docker on the same machine.'
                    },
                    {
                        title: 'HTTPS Support — Planned',
                        text: 'All communication between the client and the host API currently takes place over HTTP. ' +
                            'HTTPS support is planned, which will encrypt all traffic between the browser and the API ' +
                            'using SSL. This will significantly reduce the risk of data being intercepted on the network ' +
                            'and is particularly important for users who expose EmberMetrics outside of their local network.'
                    }
                ],
                code: [
                    { code: null, language: null },
                    { code: null, language: null }
                ]
            }}/>

            {/* ── MONITORING ── */}
            <h2>Monitoring</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Multiple GPU Support — Planned',
                        text: 'The current implementation assumes each monitored device has a single GPU. ' +
                            'Support for detecting and displaying metrics from multiple GPUs on the same machine ' +
                            'is planned for a future release.'
                    },
                    {
                        title: 'Container Monitoring — Planned',
                        text: 'Many users in the EmberMetrics target audience run services inside Docker containers. ' +
                            'A planned feature will allow EmberMetrics to list running containers on a monitored device, ' +
                            'display their resource consumption, and show their logs in real time directly from the dashboard.'
                    },
                    {
                        title: 'Historical Metrics Storage — Planned',
                        text: 'EmberMetrics currently only shows live data. There are no records of what resource ' +
                            'usage looked like an hour, a day or a week ago. Historical storage will allow metrics to ' +
                            'be recorded over time, enabling users to review trends, identify recurring spikes and ' +
                            'diagnose issues that occurred in the past.'
                    },
                    {
                        title: 'Threshold Alerts — Planned',
                        text: 'Users will be able to configure alert thresholds for any monitored metric. ' +
                            'When a value exceeds the defined threshold, a notification will be triggered. ' +
                            'This allows EmberMetrics to proactively surface problems rather than requiring ' +
                            'the user to be actively watching the dashboard.'
                    }
                ],
                code: [
                    { code: null, language: null },
                    { code: null, language: null },
                    { code: null, language: null },
                    { code: null, language: null }
                ]
            }}/>

            {/* ── SECURITY ── */}
            <h2>Security</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'HTTP Cookie Sessions — Planned',
                        text: 'Session IDs are currently stored in localStorage, which is accessible to JavaScript ' +
                            'running in the browser. A planned improvement will move session storage to HTTP-only cookies, ' +
                            'which are not accessible to JavaScript and provide stronger protection against cross-site ' +
                            'scripting attacks.'
                    },
                    {
                        title: 'Two-Factor Authentication — Planned',
                        text: 'An optional second layer of authentication is planned for admin accounts, ' +
                            'requiring a time-based one-time password in addition to the standard username and password ' +
                            'on login.'
                    }
                ],
                code: [
                    { code: null, language: null },
                    { code: null, language: null }
                ]
            }}/>

            {/* ── DATA ── */}
            <h2>Data and Storage</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Database-backed Persistence — Planned',
                        text: 'User, device and session data is currently stored in JSON files on the host machine. ' +
                            'This approach has limitations around performance and scalability as the data grows. ' +
                            'A lightweight embedded database such as SQLite is planned as a replacement, providing ' +
                            'faster queries and more reliable data integrity without requiring a separate database server.'
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            {/* ── UI ── */}
            <h2>User Interface</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Draggable Dashboard Layout — Planned',
                        text: 'The metrics dashboard currently displays modules in a fixed layout. ' +
                            'A draggable layout is planned that will allow users to rearrange metric modules ' +
                            'into any order they prefer, with the arrangement saved between sessions.'
                    },
                    {
                        title: 'Graph View Improvements — Planned',
                        text: 'The current graph view uses MUI X Charts, which has known limitations including ' +
                            'font size not responding to application settings and x-axis tick values not rendering ' +
                            'on Firefox. A future version will investigate alternative canvas-based charting libraries ' +
                            'to address these issues and improve rendering performance, particularly on mobile devices.'
                    }
                ],
                code: [
                    { code: null, language: null },
                    { code: null, language: null }
                ]
            }}/>
        </section>
    )
}