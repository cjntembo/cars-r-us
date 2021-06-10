import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let technologyHTML = "<ul>"

    const technologyArray = technologies.map(technology => {
        return `<li><input type="radio" name="technology" value="${technology.id}"/>${technology.package}</li>`
    })



    technologyHTML += technologyArray.join("")
    technologyHTML += "</ul>"
    return technologyHTML
}