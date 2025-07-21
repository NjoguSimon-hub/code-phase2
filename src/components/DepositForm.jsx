import { useState } from "react";
import styles from "./DepositForm.module.css";

function DepositForm({ goals, onDeposit }) {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeposit(selectedGoal, parseFloat(amount));
    setAmount("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)} required>
        <option value="">Select goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;