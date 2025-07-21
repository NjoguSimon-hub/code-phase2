# Smart Goal Planner

A modern web application for tracking and managing financial goals with a clean, responsive UI.

## Features

- Create and manage financial goals with target amounts
- Track progress with visual progress bars
- Make deposits to existing goals
- View summary statistics in the overview section
- Delete goals when no longer needed

## Technologies Used

- React
- CSS Modules
- Vite
- JSON Server (for backend API)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the JSON Server (API):
   ```
   npx json-server --watch db.json --port 3000
   ```
4. In a new terminal, start the development server:
   ```
   npm run dev
   ```
5. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Usage

- **Add a Goal**: Fill out the "Add New Goal" form with name, target amount, category, and deadline
- **Make a Deposit**: Select a goal and enter an amount to add to your savings
- **Track Progress**: View your progress in the goal cards and overview section
- **Delete Goals**: Remove goals you no longer want to track

## Project Structure

```
smart-goal-planner/
├── public/
│   └── images/
│       └── bg-pattern.svg
├── src/
│   ├── components/
│   │   ├── AddGoalForm.jsx
│   │   ├── AddGoalForm.module.css
│   │   ├── DepositForm.jsx
│   │   ├── DepositForm.module.css
│   │   ├── GoalCard.jsx
│   │   ├── GoalCard.module.css
│   │   ├── GoalList.jsx
│   │   ├── GoalList.module.css
│   │   ├── Overview.jsx
│   │   └── Overview.module.css
│   ├── api.jsx
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
└── db.json
```

## License

MIT