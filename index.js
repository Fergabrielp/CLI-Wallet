import inquirer from "inquirer";
import { createNewExpense, getMyExpenses, getTotal, payNow } from "./actions.js";

const myWallet = async () => {

    let isActive = true

    while (isActive) {

        const mainMenu = await inquirer.prompt({
            type: 'list',
            name: 'choices',
            message:
                `
             🤑 This is your Wallet, please add your favourite services and pay it on a simple way 🤑                                                                                
            ------------------------------------------------------------------------------------------

            Please choose an options to start: 
            
            `,
            choices: [
                { value: 1, name: "📍 Add new Service to pay" },
                { value: 2, name: "📍 My pending services added" },
                { value: 3, name: "📍 Total to Pay" },
                { value: 4, name: "📍 Pay all now" },
                { value: 5, name: "📍 Exit" }
            ]
        })

        switch (mainMenu.choices) {
            case 1:
                console.clear()
                await createNewExpense()
                break;

            case 2:
                await getMyExpenses()
                break;

            case 3:
                await getTotal()
                break;

            case 4:
                await payNow()
                break;
            case 5:
                console.log("Thanks for using the app. See you soon! 😊")
                isActive = false
                break;
            default:
                isActive = false
                break;
        }
    }
}


myWallet()