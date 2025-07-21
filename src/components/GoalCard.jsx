import { useState } from "react";
import styles from "./GoalCard.module.css";

function GoalCard({ goal, onDelete, onUpdate = null }) {
  const { id, name, savedAmount, targetAmount, category, deadline } = goal;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name, targetAmount, category, deadline });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (onUpdate) {
      onUpdate(id, { ...goal, ...formData, targetAmount: Number(formData.targetAmount) });
    }
    setIsEditing(false);
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <>
          <input name="name" value={formData.name} onChange={handleChange} />
          <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} />
          <input name="category" value={formData.category} onChange={handleChange} />
          <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{name}</h3>
          <p>Saved: ${savedAmount.toLocaleString()} / ${targetAmount.toLocaleString()}</p>
          <div className={styles.progressBar}>
            <div 
              className={styles.progress} 
              style={{ width: `${Math.min(100, (savedAmount / targetAmount) * 100)}%` }}
            ></div>
          </div>
          <p>Category: <span className={styles.category}>{category}</span></p>
          <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default GoalCard;
