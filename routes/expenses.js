const express = require("express");
const router = express.Router();

const expensesController = require("../controllers/expenses");

router.post("/", expensesController.postExpense);
router.get("/", expensesController.getExpense);

router.delete("/delete/:id", expensesController.deleteExpense);
router.put("/edit/:id", expensesController.editExpense);

module.exports = router;
