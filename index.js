const address = {
    street: {
        line1: "11 BroadWay",
        line2: "2nd floor",
    },
    city: "Nairobi",
    state: "Kenya",
    zipCode: "100210"
}
console.log(address["street"]["line1"])
let home = "city"
console.log(address[home])
console.log(Object.keys(address))
console.log(Object.values(address))