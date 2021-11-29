class Room {
    constructor (name, length, width, capacity=15) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.capacity = capacity;
        
    }
getArea() {
    
    let area = (this.length * this.width);
    return area;
}


getPerimeter() {
    
    let perimeter = (this.length * 2) + (this.width * 2)
    return perimeter;
}
isAvailable = true //boolean   
} 
const room1 = new Room ("Sun", 30, 20);

const room2 = new Room ("Green", 15, 20, 18);
room2.isAvailable = false;

console.log(room1)
console.log(room2)

//let capacity = 15;

