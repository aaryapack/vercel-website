import { v4 as uuid } from "uuid"

let inventory = [
  // Air Bubble: 0-5
  {
    categories: ["Air Bubble"],
    name: "Air Bubble Bag",
    images: [
      "/products/air_bubble/air_bubble_bag.jpg",
      "/products/air_bubble/all_bubble_category.jpg",
      "/products/air_bubble/air_bubble_bag_2.jpg",
    ],
  },
  {
    categories: ["Air Bubble"],
    name: "Air Bubble Film Roll",
    images: [
      "/products/air_bubble/air_bubble_roll.jpg",
      "/products/air_bubble/all_bubble_category.jpg",
    ],
  },
  {
    categories: ["Air Bubble"],
    name: "Air Bubble Pouch",
    images: [
      "/products/air_bubble/air_bubble_pouch.jpg",
      "/products/air_bubble/all_bubble_category.jpg",
      "/products/air_bubble/air_bubble_pouch_2.jpg",
    ],
  },
  {
    categories: ["Air Bubble"],
    name: "Air Bubble Sheet",
    images: [
      "/products/air_bubble/air_bubble_roll.jpg",
      "/products/air_bubble/all_bubble_category.jpg",
    ],
  },
  {
    categories: ["Air Bubble"],
    name: "Tamper Proof Courier Bags With Air Bubble",
    images: [
      "/products/air_bubble/tamper_proof_courier.jpg",
      "/products/air_bubble/all_bubble_category.jpg",
    ],
  },
  {
    categories: ["Air Bubble"],
    name: "Courier Bag With Bubble Inside",
    images: [
      "/products/air_bubble/courier_with_bubble_inside.jpg",
      "/products/air_bubble/courier_with_bubble_inside_2.jpg",
      "/products/air_bubble/courier_with_bubble_inside_3.jpg",
      "/products/air_bubble/all_bubble_category.jpg",
    ],
  },

  // Plastic Corrugated Box:6-9
  {
    categories: ["Plastic Corrugated Box"],
    name: "Plastic Corrugated Box",
    images: [
      "/products/corrugated/plastic_corrugated.jpg",
      "plastic_corrugated_2.jpg",
      "plastic_corrugated_3.jpg",
      "plastic_corrugated_4.jpg",
      "plastic_corrugated_5.jpg",
    ],
  },
  {
    categories: ["Plastic Corrugated Box"],
    name: "Polypropylene Corrugated Box",
    images: ["/products/corrugated/polypropylene_corrugated.jpg"],
  }, // plastic corrugated
  {
    categories: ["Plastic Corrugated Box"],
    name: "PP Flute Board Box",
    images: [
      "/products/corrugated/PP_flute.jpg",
      "/products/corrugated/PP_flute_2.jpg",
      "/products/corrugated/PP_flute_3.jpg",
      "/products/corrugated/PP_flute_4.jpg",
      "/products/corrugated/PP_flute_5.jpg",
    ],
  },
  {
    categories: ["Plastic Corrugated Box"],
    name: "Honeycomb Box",
    images: [
      "/products/corrugated/honeycomb_1.jpg",
      "/products/corrugated/honeycomb_2.jpg",
      "/products/corrugated/honeycomb_3.jpg",
      "/products/corrugated/honeycomb_4.jpg",
      "/products/corrugated/honeycomb_5.jpg",
    ],
  },

  // Foam Packing:10-14
  {
    categories: ["Foam Packing"],
    name: "EPE Foam Pouch",
    images: ["/products/foam/foam_pouch_3.jpg"],
  },
  {
    categories: ["Foam Packing"],
    name: "EPE Foam Roll",
    images: ["/products/foam/foam_roll.jpg"],
  },
  {
    categories: ["Foam Packing"],
    name: "EPE Foam Sheet",
    images: ["/products/foam/foam_sheet.jpg"],
  },
  {
    categories: ["Foam Packing"],
    name: "Thermal Heat Resistant Bag",
    images: [
      "/products/foam/foam_pouch.jpg",
      "/products/foam/foam_pouch_2.jpg",
      "/products/foam/foam_pouch_4.jpg",
    ],
  },
  {
    categories: ["Foam Packing"],
    name: "EPE Foam Packings",
    images: [
      "/products/foam/foam_packing_1.jpg",
      "/products/foam/foam_packing_2.jpg",
      "/products/foam/foam_packing_3.jpg",
      "/products/foam/foam_packing_4.jpg",
      "/products/foam/foam_packing_5.jpg",
      "/products/foam/foam_packing_6.jpg",
      "/products/foam/foam_packing_7.jpg",
      "/products/foam/foam_packing_8.jpg",
      "/products/foam/foam_packing_9.jpg",
      "/products/foam/foam_packing_10.jpg",
    ],
  },

  // Stretch and Shrink Film: 15-19
  {
    categories: ["Stretch and Shrink Film"],
    name: "PVC Shrink Film",
    images: ["/products/shrink/pvc_shrink.jpg"],
  },
  {
    categories: ["Stretch and Shrink Film"],
    name: "Heat Shrink Film",
    images: ["/products/shrink/heat_shrink.jpg"],
  },
  {
    categories: ["Stretch and Shrink Film"],
    name: "Stretch Wrap",
    images: ["/products/shrink/stretch_wrap.jpg"],
  },
  {
    categories: ["Stretch and Shrink Film"],
    name: "PVC Shrinkable Pouch",
    images: ["/products/shrink/shrinkable_pouch.jpg"],
  },
  {
    categories: ["Stretch and Shrink Film"],
    name: "PVC Shrink Sleeve",
    images: ["/products/shrink/shrink_sleeve.jpg"],
  },
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
