const Expenses = require("../models/expenses");

exports.postExpense = async (req, res, next) => {
  try {
    const newExpense = await Expenses.create({ ...req.body });
    return res.status(200).json({ success: true, message: "expense created" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "failed to store expense in database" });
  }
};

exports.getExpense = async (req, res, next) => {
  await Expenses.findAll()
    .then((expense) => {
      return res.status(200).json(expense);
    })
    .catch((err) => {});
};

exports.deleteExpense = async (req, res, next) => {
  const expenseId = req.params.id;
  await Expenses.destroy({ where: { id: expenseId } });
  res.status(200).json({ success: true, message: "expense deleted" });
};

exports.editExpense = async (req, res, next) => {
  const expenseId = req.params.id;
  const { expense, description, type } = req.body;
  const oldExpense = await Expenses.findByPk(expenseId);
  oldExpense.expense = expense;
  oldExpense.description = description;
  oldExpense.type = type;
  await oldExpense.save();

  return res.status(200).json({ success: true, message: "edited" });
};
