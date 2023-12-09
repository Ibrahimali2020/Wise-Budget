import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const BudgetContext = createContext()

function BudgetProvider({ children }) {
  const [name, setName] = useState(function () {
    if (!localStorage.getItem('name')) localStorage.setItem('name', JSON.stringify(''))
    const storedname = localStorage.getItem('name')
    return JSON.parse(storedname)
  })
  const [budgetName, setBudgetName] = useState('')
  const [budgetAmount, setBudgetAmount] = useState('')
  const [budgets, setBudgets] = useState(function () {
    if (!localStorage.getItem('budgets')) localStorage.setItem('budgets', JSON.stringify([]))
    const storedBudgets = localStorage.getItem('budgets')
    return JSON.parse(storedBudgets)
  })
  const [expenses, setExpenses] = useState(function () {
    if (!localStorage.getItem('expenses')) localStorage.setItem('expenses', JSON.stringify([]))
    const storedExpenses = localStorage.getItem('expenses')
    return JSON.parse(storedExpenses)
  })
  const [expenseName, setExpenseName] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  const [selectbudgetCategory, setSelectBudgetCategory] = useState('')
  const [isLoged, setIsLoged] = useState(function () {
    if (!localStorage.getItem('isLoged')) localStorage.setItem('isLoged', JSON.stringify(false))
    const storedisLoged = localStorage.getItem('isLoged')
    return JSON.parse(storedisLoged)
  });

  function handleCreateBudget() {
    if (budgetAmount <= 0 || budgetName === '') return;
    const newBudget = {
      budgetId: Math.random().toString().slice(2),
      budgetName,
      budgetAmount,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
    setBudgets(budgets => [...budgets, newBudget])
    clearAll()
  }

  function handleAddNewExpense() {
    if (expenseName === '' || expenseAmount <= 0 || selectbudgetCategory === '') return;
    const newExpense = { expenseId: Date.now(), expenseName, expenseAmount, selectbudgetCategory }
    setExpenses(expenses => [...expenses, newExpense])
    clearAll();

  }

  function handleDeleteExpense(id) {
    setExpenses(expenses => expenses.filter(expense => expense.expenseId !== id)
    )
    toast.success('Expense Deleted!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function handleDeleteBudget(id) {
    if (window.confirm('Are you sure you want to delete this budget?')) {
      setExpenses(expenses => expenses.filter(expense => expense.selectbudgetCategory !== id))
      setBudgets(budgets => budgets.filter(budget => budget.budgetId !== id)
      )
      toast.success('Budget Deleted!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  function clearAll() {
    setBudgetName('')
    setBudgetAmount('')
    setExpenseName('')
    setExpenseAmount('')
    setSelectBudgetCategory('')
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
  }, [name])

  useEffect(() => {
    localStorage.setItem('isLoged', JSON.stringify(isLoged))
  }, [isLoged])

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets))
  }, [budgets])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])


  return <BudgetContext.Provider value={{
    name,
    setName,
    isLoged,
    setIsLoged,
    budgetName,
    setBudgetName,
    budgetAmount,
    setBudgetAmount,
    budgets,
    setBudgets,
    expenses,
    setExpenses,
    expenseName,
    setExpenseName,
    expenseAmount,
    setExpenseAmount,
    selectbudgetCategory,
    setSelectBudgetCategory,
    handleCreateBudget,
    handleAddNewExpense,
    handleDeleteExpense,
    handleDeleteBudget,
  }}>

    {children}
  </BudgetContext.Provider>
}

function useBudget() {
  const context = useContext(BudgetContext)
  if (context === undefined) throw new Error('Error: context was used outside of the BudgetProvider');
  return context;
}

export { BudgetProvider, useBudget }