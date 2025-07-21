import { useState } from "react";
import styles from "./AddGoalForm.module.css";

function AddGoalForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    });
    setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal name" required />
      <input name="targetAmount" value={formData.targetAmount} onChange={handleChange} placeholder="Target amount" type="number" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" value={formData.deadline} onChange={handleChange} type="date" required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
