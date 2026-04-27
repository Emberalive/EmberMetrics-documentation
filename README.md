# EmberMetrics Documentation Site

This is the documentation and showcase site for [EmberMetrics](https://github.com/Emberalive/emberMetrics), a self-hosted remote monitoring and management tool. The site is built with React and Vite and is deployed at [https://ember-metrics.docs.emberalive.com](https://ember-metrics.docs.emberalive.com).

---

## Overview

The documentation site serves four purposes:

- **Home** — An overview of EmberMetrics, its key benefits and architecture.
- **Getting Started** — Step-by-step setup instructions for running the front-end and API locally, exposing them publicly, and configuring authentication.
- **Features** — A detailed breakdown of every feature EmberMetrics provides.
- **Tester** — An interactive live preview of the EmberMetrics dashboard, driven by simulated metric data, allowing users to explore the UI before installing the application.

---

## Tech Stack

| Tool | Purpose |
| --- | --- |
| React 19 | UI framework |
| Vite 7 | Development server and build tool |
| react-syntax-highlighter | Code block rendering with syntax highlighting |

---

## Project Structure

```
src/
├── App.jsx                          # Root component, handles view routing
├── main.jsx                         # React entry point
├── index.css                        # Global styles and CSS variables
├── tester.css                       # Styles specific to the tester/dashboard view
├── fake-metrics-data.json           # Simulated metric data used by the tester
│
├── assets/                          # Images, SVGs and logo variants
│
└── components/
    ├── Menu.jsx                     # Top navigation bar
    ├── TextArea.jsx                 # Reusable content block with text, code and images
    ├── CodeInsert.jsx               # Syntax-highlighted code block component
    ├── GettingStarted.jsx           # Getting started page content
    │
    └── testerComponents/            # Dashboard tester components
        ├── Tester.jsx               # Main tester wrapper and data polling logic
        ├── Header.jsx               # Dashboard header with device name and navigation
        ├── DeviceTypeSelection.jsx  # Host vs remote access selection on first load
        ├── DeviceManagement.jsx     # Device list and add device wrapper
        ├── DeviceList.jsx           # List of registered devices with edit and delete
        ├── AddDevice.jsx            # Add new device form
        ├── CpuData.jsx              # CPU usage module
        ├── MemoryData.jsx           # Memory usage module
        ├── NetworkData.jsx          # Network interfaces module
        ├── DiskData.jsx             # Disk data and usage module
        ├── ChildProcesses.jsx       # Running processes table
        ├── Settings.jsx             # Theme and font size settings
        ├── Themes.jsx               # Colour theme selector
        └── Notification.jsx         # Individual notification component
```

---

## Related Repositories

- [EmberMetrics Application](https://github.com/Emberalive/emberMetrics) — The main monitoring and management application.