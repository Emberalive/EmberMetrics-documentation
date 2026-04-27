import TextArea from "./TextArea.jsx";
import CPUModuleImg from '../assets/CPU-module-img.png'
import MemoryModuleImg from '../assets/memory-module-img.png'
import GPUModuleImg from '../assets/GPU-module-img.png'
import NetworkInterfaceImg from '../assets/network-interface-img.png'
import DiskDataImg from '../assets/disk-data-img.png'
import ProcessesImg from '../assets/processes-img.png'
import DeviceDataImg from '../assets/device-data-img.png'
import MetricsSettingsImg from '../assets/metrics-settings-img.png'
import FullScreenMetricsImg from '../assets/full-screen-metrics-img.png'
import DeviceManagementImg from '../assets/device-management-img.png'
import DeviceListItemImg from '../assets/device-list-item.png'
import EditingDeviceImg from '../assets/editing-device.png'
import GlobalDevicesImg from '../assets/global-devices-img.png'
import SoftwareManagementImg from '../assets/software-management-img.png'
import FirewallManagementImg from '../assets/firewall-management-img.png'
import SettingsImg from '../assets/settings-img.png'
import ProfileManagementImg from '../assets/profile-management.png'
import EditingProfileImg from '../assets/editing-profile-img.png'
import EditingUserDevicesImg from '../assets/editing-user-devices-img.png'
import ChildProcessSearchImg from '../assets/child-process-search-img.png'
import AdminOperationLogImg from '../assets/admin-operation-log-img.png'

export default function Features(props) {
    return (
        <section>
            <h1>Features</h1>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [{
                    text: 'EmberMetrics provides real-time resource monitoring and remote device management through a ' +
                        'lightweight, self-hosted architecture. This page covers every feature available in the current version.'
                }],
                code: []
            }}/>

            {/* ── METRICS ── */}
            <h2>Metrics</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'CPU Usage',
                        text: 'The CPU module displays real-time usage for every core on the monitored device. ' +
                            'Each core has a usage bar that fills proportionally to its current load, colour coded from ' +
                            'green through orange to red as usage increases. The total CPU usage across all cores is shown ' +
                            'in the dashboard header and updates at every polling interval.',
                        img: CPUModuleImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Memory Usage',
                        text: 'The memory module shows the percentage of memory currently in use and the percentage ' +
                            'available. A usage bar at the bottom of the module gives a visual representation of ' +
                            'consumption at a glance, also colour coded based on usage level.',
                        img: MemoryModuleImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'GPU Data',
                        text: 'The GPU module displays real-time data from the graphics card on the monitored device. ' +
                            'Supported metrics include GPU utilisation, memory utilisation and used VRAM, temperature, ' +
                            'fan speed, core clock speed, memory clock speed and power cap.\n\n' +
                            'GPU monitoring is supported for AMD devices via the Linux sysfs interface and NVIDIA devices ' +
                            'via the node-nvidia-smi package. No additional software installation is required on the monitored device.',
                        img: GPUModuleImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Network Interfaces',
                        text: 'The network module lists all network interfaces on the monitored device. For each ' +
                            'interface the following information is displayed:\n\n' +
                            '- Interface name and type\n\n' +
                            '- MAC address\n\n' +
                            '- IPv4 and IPv6 addresses\n\n' +
                            '- Default interface indicator\n\n' +
                            '- Bytes transmitted and received, updated at every polling interval',
                        img: NetworkInterfaceImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Disk Data',
                        text: 'The disk module shows information about every storage device connected to the monitored machine. ' +
                            'Static information includes the disk name, vendor, device path, capacity and interface type.\n\n' +
                            'Live disk activity is also displayed, showing total read and write operations since boot ' +
                            'alongside the current read and write speed in bytes per second, updated at every polling interval.',
                        img: DiskDataImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Running Processes',
                        text: 'The processes module displays a live table of the most resource-intensive processes ' +
                            'currently running on the monitored device. Each row shows the process ID, name, CPU usage ' +
                            'percentage, memory usage percentage and the user it is running under.\n\n' +
                            'The number of processes displayed is configurable. You can also search and filter processes ' +
                            'by name to quickly locate a specific process.',
                        img: ProcessesImg
                    },
                    {
                        text: 'Use the search bar above the table to filter processes by name in real time.',
                        img: ChildProcessSearchImg
                    }
                ],
                code: [
                    { code: null, language: null },
                    { code: null, language: null }
                ]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Device Data',
                        text: 'The device data module displays static system information about the monitored device. ' +
                            'This includes the operating system platform, OS name, kernel release version, CPU architecture ' +
                            'and the full kernel build string. This information does not change between polling intervals.',
                        img: DeviceDataImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            {/* ── METRICS SETTINGS ── */}
            <h2>Metrics Settings</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Configuring the Metrics View',
                        text: 'The metrics settings panel can be opened from the dashboard and allows you to control ' +
                            'how data is displayed and gathered.\n\n' +
                            '- Polling interval — set how frequently metrics are gathered from the device, with a minimum of one second.\n\n' +
                            '- Process count — set how many processes are shown in the processes table.\n\n' +
                            '- View mode — switch between the detailed text view and the graph view.',
                        img: MetricsSettingsImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Fullscreen Mode',
                        text: 'The dashboard can be switched to fullscreen mode, which hides the navigation and focuses ' +
                            'entirely on the metrics display. This is useful for dedicated monitoring screens or wall displays ' +
                            'where you want an uninterrupted view of your device\'s health.',
                        img: FullScreenMetricsImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            {/* ── DEVICE MANAGEMENT ── */}
            <h2>Device Management</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Managing Your Devices',
                        text: 'The device management page shows all devices that have been added to your account. ' +
                            'From here you can switch between monitored devices, add new ones, and edit or remove existing ones.',
                        img: DeviceManagementImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Device List',
                        text: 'Each device in the list shows its name and IP address. Clicking a device tab switches the ' +
                            'metrics dashboard to display data from that device. The currently active device tab is highlighted.',
                        img: DeviceListItemImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Editing a Device',
                        text: 'Any device in your list can be edited by clicking the edit button next to it. ' +
                            'This replaces the device entry with a form allowing you to update the device name or IP address. ' +
                            'Click Save to apply the changes or Cancel to discard them.',
                        img: EditingDeviceImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            {/* ── ADMIN ── */}
            <h2>Administration</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Global Device Registry',
                        text: 'Admin users have access to the Global Devices page, which shows every device registered ' +
                            'in the system regardless of which users have access to it. From here admins can add new devices ' +
                            'to the global registry without assigning them to a specific user, or delete devices globally. ' +
                            'Deleting a device globally removes it from all user accounts automatically.',
                        img: GlobalDevicesImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'User Device Access',
                        text: 'Admins can control which devices each user has access to. From the user management page, ' +
                            'selecting a user allows you to add devices from the global registry to their allowed list or ' +
                            'remove devices they no longer need access to.',
                        img: EditingUserDevicesImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>

            {/* ── SOFTWARE & FIREWALL ── */}
            <h2>Remote Administration</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Software Management',
                        text: 'EmberMetrics allows you to install, remove, check and search for software packages ' +
                            'on any monitored device directly from the dashboard. Select a package manager from the ' +
                            'supported list, enter the package name, choose the operation and submit.',
                        img: SoftwareManagementImg
                    },
                    {
                        title: 'Real-time Operation Log',
                        text: 'When an operation is submitted, a log window appears showing the output of the command ' +
                            'as it runs, exactly as it would appear in a terminal. The window can be dragged anywhere ' +
                            'on screen. The form is disabled while the operation is in progress and a notification ' +
                            'confirms the result when it completes.',
                        img: AdminOperationLogImg
                    }
                ],
                code: [
                    { code: null, language: null },
                    { code: null, language: null }
                ]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Firewall Management',
                        text: 'Firewall rules can be applied to any monitored device from the dashboard without ' +
                            'needing to SSH into the machine. The following operations are supported:\n\n' +
                            '- Allow or deny a specific incoming or outgoing port\n\n' +
                            '- Allow or deny all incoming ports\n\n' +
                            '- Allow or deny all outgoing ports\n\n' +
                            'Just like software management, a real-time log window shows the output of the command ' +
                            'and a notification confirms when the rule has been applied.',
                        img: FirewallManagementImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>
            {/* ── PROFILE & SETTINGS ── */}
            <h2>Profile and Settings</h2>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Profile Management',
                        text: 'Each user has a profile page showing their account information and the list of devices ' +
                            'they have access to. From here you can update your username, email address and bio.',
                        img: ProfileManagementImg
                    },
                    {
                        text: 'Click the edit button to switch the displayed information into an editable form. ' +
                            'Make your changes and click Save. A notification confirms when the update has been applied.',
                        img: EditingProfileImg
                    }
                ],
                code: [
                    { code: null, language: null },
                    { code: null, language: null }
                ]
            }}/>

            <TextArea isDarkMode={props.isDarkMode} data={{
                text: [
                    {
                        title: 'Application Settings',
                        text: 'The settings page lets you personalise the appearance of EmberMetrics.\n\n' +
                            '- Light and dark mode — the application follows your browser\'s colour scheme preference by default, ' +
                            'but can be overridden manually.\n\n' +
                            '- Colour themes — choose from sixteen predefined colour themes. The selected theme is applied ' +
                            'immediately as a preview and only saved when you click Save Theme.\n\n' +
                            '- Metric text size — choose between small, medium and large font sizes for the metrics dashboard. ' +
                            'Large is not available on smaller screens.',
                        img: SettingsImg
                    }
                ],
                code: [{ code: null, language: null }]
            }}/>
        </section>
    )
}