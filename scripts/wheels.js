import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let wheelsHTML = "<ul>"

    const wheelArray = wheels.map(wheels => {
        return `<li><input type="radio" name="wheels" value="${wheels.id}"/>${wheels.option}</li>`
    })

    wheelsHTML += wheelArray.join("")
    wheelsHTML += "</ul>"
    return wheelsHTML
}