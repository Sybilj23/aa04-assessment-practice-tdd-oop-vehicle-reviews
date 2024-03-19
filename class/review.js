
class Review{
      constructor(vehicle, tester, starRating,text){
            this.vehicle =vehicle
            this.tester = tester
            this.starRating = starRating
            this.text = text
      }
      addReview(){
            this.vehicle.reviews.push(this)
            this.tester.reviews.push(this)
      }
     static filterByStars(starRating, ...reviews){
     return reviews.filter((review)=>review.starRating === starRating)
      }
      
}
module.exports = Review;
