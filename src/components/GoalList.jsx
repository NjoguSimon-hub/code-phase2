import GoalCard from "./GoalCard";
import styles from "./GoalList.module.css";

function GoalList({ goals, onDelete, onUpdate }) {
  return (
    <div className={styles.list}>
      <h2>All Goals</h2>
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default GoalList;
