import inventory from "./inventory"

export default function inventoryForCategory(category) {
  const byCategory = inventory.reduce((acc, next) => {
    // acc is initially an empty object,
    // next contains one object from the inventory array
    const categories = next.categories

    categories.forEach((c) => {
      c = c.toLowerCase()
      if (acc[c]) {
        acc[c].items.push(next)
      } else {
        acc[c] = {}
        acc[c].items = []
        acc[c].items.push(next)
      }
    })
    return acc
  }, {})
  // reduce ends
  return byCategory[category].items // an array of inventory items that has that category
}

/* byCategory = {

  Foam Packing: {
    items:[ 
      { categories: [...], name: "", description: "" }
    ]
  }
}

*/
