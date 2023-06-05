import { read, write } from "./promises.js"
import { promptAddExpense } from "./prompts.js"


export const createNewExpense = async () => {
    const newExpense = await promptAddExpense()
    const expensesList = await read("./expenses.json")
    await write("./expenses.json", [...expensesList, newExpense])
    console.log(`🎉 ${newExpense.name} was succesfuly added 🎉`)
}

export const getMyExpenses = async () => {
    const expensesList = await read("./expenses.json")
    if (expensesList.length > 0) {
        console.log(expensesList)
    } else {
        console.log("You have nothing to pay 😎")
    }
}

export const getTotal = async () => {
    const expensesList = await read("./expenses.json")
    const total = expensesList.reduce((acc, exp) => exp.value += acc, 0)
    console.log(`Total to pay is: 💲${total}`)
}

export const payNow = async () => {
    await write("./expenses.json", [])
    console.log("Thank you for paying, you are not in debt now 😎")
}