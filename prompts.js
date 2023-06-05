import inquirer from "inquirer";

const expenseQuestions = [
    {
        type: 'input',
        name: 'expense_name',
        message: 'What is the name of the new Expense?: '
    },
    {
        type: 'input',
        name: 'expense_value',
        message: 'Please add the ammount: '
    }
]

export const promptAddExpense = () => {
    return new Promise((resolve, reject) => {
        try {
            inquirer.prompt(expenseQuestions)
                .then(res => {
                    const formatValue = Number(res.expense_value)
                    resolve({ name: res.expense_name, value: formatValue })
                })
        } catch (error) {
            reject(error)
        }
    })
}
