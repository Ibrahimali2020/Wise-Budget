import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MainContent from "./components/MainContent";
import BudgetDetail from "./components/BudgetDetail";
import ContactModal from "./components/ContactModal";

function App() {
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

  return (
    <>
      <BrowserRouter>
        <main>
          <div className='container'>
            <Header>
              <Logo name={name}
                isLoged={isLoged}
                setIsLoged={setIsLoged}
              />
              <ContactModal />
            </Header>
            <Routes>
              <Route index element={<Welcome
                name={name}
                setName={setName}
                isLoged={isLoged}
                setIsLoged={setIsLoged}
              />} />

              {isLoged && (
                <Route path="app" element={<HomePage
                  name={name}
                  setName={setName}
                  budgetName={budgetName}
                  setBudgetName={setBudgetName}
                  budgetAmount={budgetAmount}
                  setBudgetAmount={setBudgetAmount}
                  handleCreateBudget={handleCreateBudget}
                  setBudgets={setBudgets}
                  budgets={budgets}
                  expenseName={expenseName}
                  expenseAmount={expenseAmount}
                  setExpenseName={setExpenseName}
                  setExpenseAmount={setExpenseAmount}
                  selectbudgetCategory={selectbudgetCategory}
                  setSelectBudgetCategory={setSelectBudgetCategory}
                  handleAddNewExpense={handleAddNewExpense}
                  expenses={expenses}
                  setExpenses={setExpenses}
                  setIsLoged={setIsLoged}
                  handleDeleteExpense={handleDeleteExpense} />} >
                  {/* <Route index element={<Navigate to='app' />} /> */}
                  <Route index element={<MainContent
                    name={name}
                    setName={setName}
                    budgetName={budgetName}
                    setBudgetName={setBudgetName}
                    budgetAmount={budgetAmount}
                    setBudgetAmount={setBudgetAmount}
                    handleCreateBudget={handleCreateBudget}
                    setBudgets={setBudgets}
                    budgets={budgets}
                    expenseName={expenseName}
                    expenseAmount={expenseAmount}
                    setExpenseName={setExpenseName}
                    setExpenseAmount={setExpenseAmount}
                    selectbudgetCategory={selectbudgetCategory}
                    setSelectBudgetCategory={setSelectBudgetCategory}
                    handleAddNewExpense={handleAddNewExpense}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setIsLoged={setIsLoged}
                    handleDeleteExpense={handleDeleteExpense}
                  />} />
                  <Route path="budget/:id" element={<BudgetDetail
                    name={name}
                    setName={setName}
                    budgetName={budgetName}
                    setBudgetName={setBudgetName}
                    budgetAmount={budgetAmount}
                    setBudgetAmount={setBudgetAmount}
                    handleCreateBudget={handleCreateBudget}
                    setBudgets={setBudgets}
                    budgets={budgets}
                    expenseName={expenseName}
                    expenseAmount={expenseAmount}
                    setExpenseName={setExpenseName}
                    setExpenseAmount={setExpenseAmount}
                    selectbudgetCategory={selectbudgetCategory}
                    setSelectBudgetCategory={setSelectBudgetCategory}
                    handleAddNewExpense={handleAddNewExpense}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setIsLoged={setIsLoged}
                    handleDeleteExpense={handleDeleteExpense}
                    handleDeleteBudget={handleDeleteBudget} />} />
                </Route>
              )}
            </Routes>
          </div >

          <ToastContainer />

        </main>
      </BrowserRouter>


      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"><path
          fill="#3498db" fillOpacity="1" d="M0,64L60,85.3C120,107,240,149,360,144C480,139,600,85,720,96C840,107,960,181,1080,181.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </>
  );
}

export default App;
