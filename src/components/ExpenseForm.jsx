import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);

    // Reset the form
    setFormData({
      title: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Expense title"
        required
      />

      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />

      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />

      <input
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        type="number"
        required
      />

      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
        required
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
