# LunaBot: NASA Space Apps Global Finalist — Autonomous Lunar Reconnaissance

## TL;DR
LunaBot is an autonomous lunar reconnaissance rover designed for Artemis III pre-mission site selection. Built for the NASA Space Apps Challenge, it uses ROS2/Webots simulation with a multi-sensor array and a React mission dashboard. We were selected as a **Global Finalist** and pitched at NASA.

**Stack:** ROS2 · Python · Webots · React · NVIDIA Jetson  
**Source:** [GitHub](https://github.com/LarytheLord/Civilization-in-Space-Nasa-Space-App-Challenge)

---

## The Challenge

NASA's Artemis III mission will return humans to the Moon. Before astronauts land, the landing site needs to be scouted — terrain mapped, hazards identified, resources located. The NASA Space Apps Challenge asked teams to build solutions for this pre-mission reconnaissance problem.

## What We Built

### Autonomous Rover System
LunaBot operates without human teleoperation (communication delay between Earth and Moon makes real-time control impractical):
- **Path planning:** Autonomous navigation across simulated lunar terrain
- **Hazard detection:** Identifies craters, boulders, and slope hazards
- **Resource sensing:** Detects potential water ice deposits in permanently shadowed regions
- **Site scoring:** Generates landing site viability scores based on multiple criteria

### Simulation Environment
The rover operates in a **Webots simulation** of the lunar surface:
- Realistic lunar terrain with elevation data
- Day/night cycle simulation (critical for solar-powered operations)
- Multi-sensor physics simulation
- ROS2 integration for standard robotics communication patterns

### Multi-Sensor Array
- LIDAR for terrain mapping and obstacle detection
- Stereo cameras for visual odometry and feature detection
- IMU for orientation and acceleration data
- Temperature sensors for thermal environment assessment
- Spectrometer simulation for mineral composition analysis

### Mission Dashboard (React)
A real-time web dashboard for mission control:
- Live rover telemetry visualization
- Terrain map generation from sensor data
- Landing site candidate ranking
- Mission timeline and status tracking

## How Claude Code Contributed

### ROS2 Architecture
The ROS2 node architecture — sensor publishers, navigation subscribers, decision-making nodes — was designed and iterated through Claude Code sessions. ROS2's publisher-subscriber model requires careful message type design and node lifecycle management. Claude Code helped structure the node graph and debug message passing issues.

### Simulation Setup
Webots world files, robot definitions, and sensor configurations were built collaboratively. The lunar terrain generation required specific parameters to approximate real Artemis III candidate sites.

### Dashboard Development
The React mission dashboard was built through Claude Code — WebSocket connections for real-time telemetry, D3.js terrain visualization, and the landing site scoring algorithm visualization.

## The NASA Pitch

As a Global Finalist, we presented LunaBot to NASA evaluators. The pitch covered:
- The autonomous navigation approach and why it's necessary for lunar operations
- The multi-sensor fusion strategy for comprehensive site assessment
- The landing site scoring algorithm and how it maps to Artemis III requirements
- The simulation fidelity and how it validates real-world deployment readiness

## Technical Highlights

**ROS2 over ROS1:** We chose ROS2 for its real-time capabilities, security features, and better support for multi-robot coordination (relevant for future multi-rover missions).

**Webots over Gazebo:** Webots provided better lunar environment simulation out of the box, with superior rendering for the dashboard visualization layer.

**NVIDIA Jetson as target platform:** While we ran in simulation, the system was designed to deploy on NVIDIA Jetson hardware — the compute-to-power ratio matters when your rover is solar-powered on the Moon.

## Key Lesson

The NASA Space Apps Challenge taught me that **hackathon quality and production quality aren't mutually exclusive.** The simulation fidelity, the proper ROS2 architecture, the comprehensive sensor array — all built in a hackathon timeline. The key is choosing the right abstractions (ROS2, Webots, React) and using Claude Code to handle the boilerplate so you can focus on the novel parts.

---

*LunaBot is open source. The lunar surface awaits.*
