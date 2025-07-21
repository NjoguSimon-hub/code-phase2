import styles from "./Overview.module.css";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completedGoals = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  return (
    <div className={styles.overview}>
      <h2>Overview</h2>
      <p>Total Goals: <span>{totalGoals}</span></p>
      <p>Total Saved: <span>${totalSaved.toLocaleString()}</span></p>
      <p>Goals Completed: <span>{completedGoals}</span></p>
    </div>
  );
}

export default Overview;
