# Water Monitor 💧

**Water Monitor** is a comprehensive solution designed to monitor water sensors and manage issue reporting for water infrastructure. It bridges the gap between automated sensor data and human reporting, enabling NGOs, government bodies, and maintenance teams to respond quickly to water access issues.

## 🚀 Features

*   **Real-time Dashboard**: Visualize sensor data, water levels, and status updates through interactive charts.
*   **Issue Reporting**: Users can report problems (leaks, contamination, outages) which are tracked in the system.
*   **Role-Based Access**: Secure authentication with roles for Admins, NGOs, and Engineers.
*   **Sensor Management**: Track the status and location of water monitoring sensors.
*   **Team Management**: Organize users into teams for efficient maintenance dispatch.

## 🛠️ Tech Stack

### Backend
*   **Framework**: [NestJS](https://nestjs.com/) (v11) - A progressive Node.js framework for building efficient, scalable server-side applications.
*   **Language**: TypeScript
*   **Database**: SQLite (via **TypeORM**) - Lightweight and efficient for development/small-scale deployments.
*   **Authentication**: Passport.js + JWT (JSON Web Tokens).

### Frontend
*   **Framework**: [Next.js](https://nextjs.org/) (v14) - The React Framework for the Web.
*   **Styling**: **Tailwind CSS** - A utility-first CSS framework.
*   **Icons**: Lucide React
*   **Charts**: Chart.js / React-Chartjs-2
*   **Animations**: Framer Motion

## 📦 Getting Started

### Prerequisites
*   Node.js (v18+ recommended)
*   npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Hodan-dev/water-monitor.git
cd water-monitor
```

### 2. Backend Setup
Navigate to the `backend` directory and install dependencies:
```bash
cd backend
npm install
```

Start the development server:
```bash
npm run start:dev
```
The backend API will run on `http://localhost:3000` (default NestJS port).

### 3. Frontend Setup
Open a new terminal, navigate to the `stable-frontend` directory, and install dependencies:
```bash
cd stable-frontend
npm install
```

Start the development server:
```bash
npm run dev
```
The frontend application will run on `http://localhost:3001` (or 3000 if backend is on a different port, check console output).

## 📄 License

This project is licensed under the UNLICENSED / Private license tailored for this specific implementation.