class Vehicle {
  constructor(modelName, year, price) {
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = [];
  }
  validate() {
    if (
      this.modelName &&
      this.price &&
      this.year &&
      this.year > 1950 &&
      this.year < 2100
    ) {
      return true;
    }
    {
      return false;
    }
  }
      update(modelName,year,price){
            if(year< 1950 || year > 2100){
                  throw new Error("Year must be between 1950 and 2100")
            }
            if(price  <= 0){
                  throw new Error("Price must be greater than 0")
            }
            this.modelName =modelName,
            this.year =year,
            this.price =price

      }
      getDetails(){
            return `The ${this.year} ${this.modelName} costs $${this.price} and has 0 reviews.`
      }
      findReviewByTester(name){
            return this.reviews.find((review)=>review.tester.name === name)
      }
  }


module.exports = Vehicle;
