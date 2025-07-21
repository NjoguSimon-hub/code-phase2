// src/utils.js
export const calculateProgress = (goal) =>
  Math.min((goal.savedAmount / goal.targetAmount) * 100, 100).toFixed(1);

export const getDaysLeft = (deadline) => {
  const days = Math.floor((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
  return days;
};

export const isDeadlineNear = (goal) => getDaysLeft(goal.deadline) <= 30 && !isGoalComplete(goal);

export const isOverdue = (goal) => new Date(goal.deadline) < new Date() && !isGoalComplete(goal);

export const isGoalComplete = (goal) => parseFloat(goal.savedAmount) >= parseFloat(goal.targetAmount);
