function Scooter(year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}

function Driver(name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

function PickupLocation(address, city) {
  this.address = address
  this.city = city
}
let s = new Scooter('2015', 'red', 'xxx')
let d = new Driver('bob', 46, '3')
let p = new PickupLocation('333 West', 'London')
