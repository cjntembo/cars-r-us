import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let interiorHTML = "<ul>"

    const interiorsArray = interiors.map(interior => {
        return `<li> <input type="radio" name="interiors" value="${interior.id}"/>${interior.style}</li>`
    })

    interiorHTML += interiorsArray.join("")
    interiorHTML += "</ul>"
    return interiorHTML
}