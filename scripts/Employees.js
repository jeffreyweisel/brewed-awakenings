import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
                    data-type="employee"
                    data-id="${employee.id}"
                    data-name="${employee.name}"
                    >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


const employeeOrders = (id) => {
    let fulfilledOrders = 0
    const orders = getOrders()
    for (const order of orders) {
        if (order.employeeId === id) {
    // Increment the number of fulfilled orders
            fulfilledOrders++
        }
    }

    // Return how many orders were fulfilled
    return fulfilledOrders
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;
        
        if (itemClicked.dataset.type === "employee") {
            
            const employeeId = parseInt(itemClicked.dataset.id);
            const employees = getEmployees()
            
            for (const employee of employees) {
                if (employee.id === employeeId) {
                    
                    const orderCount = employeeOrders(employeeId);
                    window.alert(`${employee.name} sold ${orderCount} products`)
                }
            }
        }
    }
)



















// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemCLicked = clickEvent.target
//         if(itemCLicked.dataset.type === "employee") {
//             const empolyeeId = itemCLicked.dataset.id
            
            
//             let employeeCounter = 0
//             const employees = getEmployees()
//             for (const employee of employees) {
//                 // console.log(`Employee ID: ${employee.name}, Sale ID: ${employee.id}`)
//                 if(empolyeeId == employee.id){
                    
//                     employeeCounter++
//                 }
//             }
//             window.alert(`${itemCLicked.dataset.name} has sold ${employeeCounter} products`)
//         }
//     }

// )