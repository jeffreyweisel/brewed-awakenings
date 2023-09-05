import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li
                data-type="product"
                data-id="${product.id}"
                data-name="${product.name}"
                data-price="${product.price}"
                >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemCLicked = clickEvent.target

        if(itemCLicked.dataset.type === "product") {
            // const productId = itemCLicked.dataset.id
            const productPrice = itemCLicked.dataset.price

            let itemPrice = 0

            const priceOfProducts = getProducts()
            for (const price of priceOfProducts) {
                if(price.price == productPrice){
                    itemPrice = price
                }
                
            }
        window.alert(`${itemCLicked.dataset.name} costs $${itemPrice.price}`)
        }
    }
)