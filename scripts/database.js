const database = {
    paintColors: [
        {id: 1, color: "Silver", price: 1000 },
        {id: 2, color: "Midnight Blue", price: 1200},
        {id: 3, color: "Firebrick Red", price: 1400},
        {id: 4, color: "Spring Green", price: 1600}
    ],

    interiors: [
        {id: 1, style:"Beige Fabric", price: 500},
        {id: 2, style:"Charcoal Fabric", price: 550},
        {id: 3, style:"White Leather", price: 800},
        {id: 4, style:"Black Leather", price: 800}
    ],

    technologies: [
        {id: 1, package:"Basic Package (basic sound system)", price: 1000},
        {id: 2, package:"Navigation Package (includes integrated navigation controls)", price: 10000},
        {id: 3, package:"Visibility Package (includes side and rear cameras)", price: 15000},
        {id: 4, package:"Ultra Package (includes navigation and visibility packages)", price: 20000}
    ],

    wheels: [
        {id: 1, option:"17-inch Pair Radial", price: 4000},
        {id: 2, option:"17-inch Pair Radial Black", price: 5000},
        {id: 3, option:"18-inch Pair Spoke Silver", price: 8000},
        {id: 4, option:"18-inch Pair Spoke Black", price: 10000}
    ],

    customOrders: [
            {id: 1,
            paintColorId: 2,
            interiorId: 3,
            technologyId: 4,
            wheelId: 4
        }
    ],

    carBuilder: {}
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setPaintColor = (id) => {
    database.carBuilder.paintColorId = id
}
export const setInterior = (id) => {
    database.carBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.carBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.carBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.carBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.carBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}