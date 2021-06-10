import { getPaintColors, setPaintColor } from "./database.js"

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const PaintColors = () => {
    let paintColorHTML = "<ul>"

    const paintColorArray = paintColors.map(paintColor => {
        return `<li> <input type="radio" name="paintColor" value="${paintColor.id}"/>${paintColor.color}</li>`
    })

    paintColorHTML += paintColorArray.join("")
    paintColorHTML += "</ul>"
    return paintColorHTML
}