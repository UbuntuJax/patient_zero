export default function getBreakfastMockData(counter) {
    switch (counter) {
        case 1:
            return {
                name: "cheese", // You may want to generate unique names for each form
                colour: "yellow",
                pricePerKg: 10.15,
                imgUrl: "www",
            };
        case 2:
            return {
                name: "cheese2", // You may want to generate unique names for each form
                colour: "brown",
                pricePerKg: 20.25,
                imgUrl: "www",
            };
        case 3:
            return {
                name: "cheese3", // You may want to generate unique names for each form
                colour: "white",
                pricePerKg: 30.35,
                imgUrl: "www",
            };
        case 4:
            return {
                name: "cheese4", // You may want to generate unique names for each form
                colour: "red",
                pricePerKg: 40.45,
                imgUrl: "www",
            };
        case 5:
            return {
                name: "cheese5", // You may want to generate unique names for each form
                colour: "blue",
                pricePerKg: 50.55,
                imgUrl: "www",
            };
        default:
            return null; // for invalid ids
    }
}
