import { useEffect, useState } from "react";
import { fetchGoals, addGoal, deleteGoal, updateGoal } from "./api";
import AddGoalForm from './components/AddGoalForm.jsx';
import DepositForm from './components/DepositForm.jsx';
import GoalList from './components/GoalList.jsx';
import Overview from './components/Overview.jsx';
import styles from './App.module.css';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then((data) => setGoals(data));
  }, []);

  const handleAdd = async (goal) => {
    const newGoal = await addGoal(goal);
    setGoals([...goals, newGoal]);
  };

  const handleDeposit = async (id, amount) => {
    const goal = goals.find((g) => g.id === id);
    const updated = { ...goal, savedAmount: goal.savedAmount + amount };
    const updatedGoal = await updateGoal(id, { savedAmount: updated.savedAmount });
    setGoals(goals.map((g) => (g.id === id ? updatedGoal : g)));
  };

  const handleUpdate = async (id, updatedGoal) => {
    const result = await updateGoal(id, updatedGoal);
    setGoals(goals.map((g) => (g.id === id ? result : g)));
  };

  const handleDelete = async (id) => {
    await deleteGoal(id);
    setGoals(goals.filter((g) => g.id !== id));
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm onAdd={handleAdd} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <GoalList goals={goals} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
