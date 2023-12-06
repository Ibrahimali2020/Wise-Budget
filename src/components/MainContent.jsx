import React from 'react'
import WrapperForms from './WrapperForms'
import CreateBudget from './CreateBudget'
import AddNewExpense from './AddNewExpense'
import BudgetCategory from './BudgetCategory'
import RecentExpensesTable from './RecentExpensesTable'

export default function MainContent({
  budgetName,
  setBudgetName,
  budgetAmount,
  setBudgetAmount,
  handleCreateBudget,
  budgets,
  expenseName,
  expenseAmount,
  setExpenseName,
  setExpenseAmount,
  selectbudgetCategory,
  setSelectBudgetCategory,
  handleAddNewExpense,
  expenses,
  handleDeleteExpense
}) {
  return (
    <>
      <WrapperForms >
        <CreateBudget
          budgetName={budgetName}
          setBudgetName={setBudgetName}
          budgetAmount={budgetAmount}
          setBudgetAmount={setBudgetAmount}
          handleCreateBudget={handleCreateBudget} />

        {(budgets.length > 0) && <AddNewExpense
          budgets={budgets}
          expenseName={expenseName}
          expenseAmount={expenseAmount}
          setExpenseName={setExpenseName}
          setExpenseAmount={setExpenseAmount}
          selectbudgetCategory={selectbudgetCategory}
          setSelectBudgetCategory={setSelectBudgetCategory}
          handleAddNewExpense={handleAddNewExpense}
        />}
      </WrapperForms>

      {(budgets.length > 0) && <>
        <h2 className='mt-4'><strong>Existing Budgets</strong> </h2 >
        <WrapperForms>
          {budgets.map(budget => <BudgetCategory
            key={budget.budgetId}
            budget={budget}
            budgetAmount={budgetAmount}
            expenseName={expenseName}
            expenseAmount={expenseAmount}
            setExpenseName={setExpenseName}
            setExpenseAmount={setExpenseAmount}
            expenses={expenses}
          />)}
        </WrapperForms>
      </>}

      {(expenses.length > 0) && <>
        <h2 className='mt-4 mb-4'><strong>Recent Expenses</strong> </h2 >
        <RecentExpensesTable
          expenses={expenses}
          budgets={budgets}
          handleDeleteExpense={handleDeleteExpense}
        />
      </>}

    </>
  )
}
