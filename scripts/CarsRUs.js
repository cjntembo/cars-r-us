import {addCustomOrder} from "./database.js"
import {PaintColors} from "./paintcolors.js"
import {Interiors} from "./interiors.js"
import {Technologies} from "./technologies.js"
import {Wheels} from "./wheels.js"
import {Orders} from "./Orders.js"



document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if(itemClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1> Cars R Us </h1>
        
        <article class="options">
            <section class="options__paintColors choices">
                <h2>PaintColors</h2>
                ${PaintColors()}
            </section>
    
            <section class="options__interiors choices">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
        
            <section class="options__technologies choices">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
        
            <section class="options__wheels choices">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
            
        </article>

        <article class="customOrder">
            <h2>orders</h2>
            ${Orders()}
        </article>
    `
}