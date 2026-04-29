import TextArea from "./TextArea.jsx";
import FrontEndOutPut from '../assets/run-front-end-output.png'
import BackEndOutPut from '../assets/host-api-run-output.png'
import InitialAppStart from '../assets/initial-app-start.png'
import ChangePassword from '../assets/changing-password-img.png'

export default function GettingStarted(props) {
    return (
        <>
            <h1>Getting Started</h1>

            {/* ── Overview ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [{
                    title: 'Overview',
                    text: 'EmberMetrics consists of two pieces of software that need to be running for the application to work:\n\n' +
                        '- The front-end — the web interface you interact with in your browser.\n\n' +
                        '- The host API — the back-end that serves system metrics and manages devices and users.\n\n' +
                        'Both need to be running on the same host machine. This guide will walk you through getting both up and running.',
                }],
                code: [{ code: null, language: null }]
            }}/>

            {/* ── Prerequisites ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [{
                    title: 'Prerequisites',
                    text: 'Node.js is required to run both the front-end and the API. If it is not already installed, run the following command on Debian-based Linux distributions such as Ubuntu:',
                }],
                code: [{ code: 'sudo apt install nodejs npm', language: 'bash' }]
            }}/>

            {/* ── Clone ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [{
                    title: 'Clone the Repository',
                    text: 'Clone the EmberMetrics repository from GitHub and navigate into the project directory:',
                }],
                code: [{
                    code: 'git clone https://github.com/Emberalive/emberMetrics\ncd emberMetrics/',
                    language: 'bash'
                }]
            }}/>

            {/* ── Front-end ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Starting the Front-end',
                        text: 'From the root of the repository, install the front-end dependencies and start the development server:',
                    },
                    {
                        text: 'The terminal will display a local URL, typically http://localhost:5173. Open this in your browser to access the interface.',
                        img: FrontEndOutPut
                    }
                ],
                code: [
                    { code: 'cd emberMetrics/\npm install\nnpm run dev', language: 'bash' },
                    { code: null, language: null }
                ]
            }}/>

            {/* ── Host API ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Starting the Host API',
                        text: 'Open a second terminal window. From the root of the repository, navigate into the API directory, install its dependencies and start the server:',
                    },
                    {
                        text: 'The API runs on port 3000 by default. You should see confirmation in the terminal that the server has started successfully.',
                        img: BackEndOutPut
                    }
                ],
                code: [
                    { code: 'cd metrics-api/\nnpm install\nnpm run dev', language: 'bash' },
                    { code: null, language: null }
                ]
            }}/>

            {/* ── First launch ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'First Launch',
                        text: 'When you open the application for the first time you will be presented with a setup screen asking how you are accessing the dashboard.',
                        img: InitialAppStart
                    },
                    {
                        text: 'Select Host if you are viewing the dashboard on the same machine that is running the API. ' +
                            'This tells the application to connect to the API using localhost.\n\n' +
                            'Select Remote Access if you are viewing the dashboard from a different device on the network. ' +
                            'This tells the application to connect to the API using the host machine\'s IP address.\n\n' +
                            'If you are unsure, select Host.',
                    }
                ],
                code: [
                    { code: null, language: null },
                    { code: null, language: null }
                ]
            }}/>

            {/* ── Login ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Logging In',
                        text: 'EmberMetrics includes user authentication by default. The default admin credentials are:\n\n' +
                            'Username: admin\n\n' +
                            'Password: password\n\n' +
                            'It is strongly recommended that you change the default password after your first login.',
                    },
                    {
                        title: 'Changing Password',
                        text: 'You are able to change the password of any user once logged in through the profile page. ' +
                            'Click "Change Password" and a form will appear, asking you for the current password and the new ' +
                            'password.',
                        img: ChangePassword
                    }
                ],
                code: [{ code: null, language: null }, { code: null, language: null }]
            }}/>

            {/* ── Exposing on network ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Accessing EmberMetrics From Other Devices',
                        text: 'By default the front-end is only accessible from the machine it is running on. ' +
                            'To access it from other devices on your local network, you need to allow the ports through your firewall.\n\n' +
                            'Run the following commands to allow the front-end (port 5173) and the API (port 3000) through UFW:',
                    },
                    {
                        text: 'Once the ports are open, other devices on the same network can access the dashboard by navigating to:\n\n' +
                            'http://<host-machine-ip>:5173\n\n' +
                            'Replace <host-machine-ip> with the local IP address of the machine running EmberMetrics. ' +
                            'You can find this by running the following command on the host machine:',
                    }
                ],
                code: [
                    { code: 'sudo ufw allow 5173\nsudo ufw allow 3000', language: 'bash' },
                    { code: 'hostname -I', language: 'bash' }
                ]
            }}/>

            {/* ── Remote device API ── */}
            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Adding a Remote Device',
                        text: 'To monitor a device other than the host machine, the remote device API needs to be running on that device.\n\n' +
                            'On the remote device, clone the repository, navigate into the API directory and start the server:',
                    },
                    {
                        text: 'Once the remote device API is running, go to the Device Management page in EmberMetrics and add the device ' +
                            'using its IP address and a name of your choice. EmberMetrics will connect to it automatically.',
                    }
                ],
                code: [
                    {
                        code: 'git clone https://github.com/Emberalive/emberMetrics\ncd emberMetrics/metrics-api\nnpm install\nsudo node RDscript',
                        language: 'bash'
                    },
                    { code: null, language: null }
                ]
            }}/>
        </>
    )
}