import React from 'react'
import Button from './Button'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import { toast } from 'react-toastify'

export default function CreateBudget({ budgetName, setBudgetName, budgetAmount, setBudgetAmount, handleCreateBudget }) {

  function handleSubmit(e) {
    e.preventDefault()
    handleCreateBudget()
    toast.success('Budget created!', {
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

  return (

    <Card>
      <h4><strong>Create budget</strong></h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Budget Name</label>
          <input
            value={budgetName}
            onChange={e => setBudgetName(e.target.value)}
            type="text"
            required
            className="form-control mt-2"
            placeholder="e.g., Groceries" />
        </div>
        <div className="form-group pt-3">
          <label >Amount</label>
          <input
            value={budgetAmount}
            onChange={e => setBudgetAmount(Number(e.target.value))}
            type="number"
            required
            className="form-control mt-2"
            placeholder="e.g., $350" />
        </div>

        <Button color='dark' type="submit" icon={faDollar} >Create Budget</Button>
      </form>
    </Card>

  )
}
