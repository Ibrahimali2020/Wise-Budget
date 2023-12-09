import React, { useEffect } from 'react'
import WrapperForms from './WrapperForms'
import BudgetCategory from './BudgetCategory'
import AddNewExpense from './AddNewExpense'
import RecentExpensesTable from './RecentExpensesTable'
import { useNavigate, useParams } from 'react-router-dom'
import { useBudget } from '../contexts/BudgetContext'

export default function BudgetDetail() {
  const { budgets,
    expenses,
  } = useBudget();

  const navigate = useNavigate()
  const { id } = useParams()
  const selectedBudget = budgets
    .filter(budget => budget?.budgetId === id)

  const selectedBudgetObject = selectedBudget.length > 0 ? selectedBudget[0] : null;

  useEffect(() => {
    if (!selectedBudgetObject) {
      navigate('/app');
    }
  }, [navigate, selectedBudgetObject]);


  if (selectedBudgetObject === null) return;

  const { budgetName, budgetAmount } = selectedBudgetObject;

  const expensesfilteredbyBudgetId = expenses.filter(expense => expense.selectbudgetCategory === id)


  return (
    <>
      <h2 className='mt-4'><strong>{budgetName} Overview</strong> </h2 >
      <WrapperForms >
        {budgets
          .filter(budget => budget.budgetId === id)
          .map(budget => < BudgetCategory
            key={budget.budgetId}
            budget={budget}
            budgetAmount={budgetAmount}
          />)}

        {(budgets.length > 0) && <AddNewExpense
          budgets={selectedBudget}
        />}
      </WrapperForms>

      {(expenses
        .filter(expense => expense.selectbudgetCategory === id).length > 0) &&
        <>
          <h2 className='mt-4 mb-4'><strong>{budgetName} Expenses</strong> </h2 >
          <RecentExpensesTable
            expenses={expensesfilteredbyBudgetId}
            budgets={selectedBudget}
            id={id} />
        </>}
    </>
  )
}
