








// Your users should be able to:

// View the optimal layout for the site depending on their device's screen size
// See hover states for all interactive elements on the page
// Switch between viewing Daily, Weekly, and Monthly stats


const schedule




async function getData() {
     const res = await fetch("data.json")
     const data = await res.json()

     console.log(data)
}


getData()












