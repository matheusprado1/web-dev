const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/fruitsdb', { useNewUrlParser: true })

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
})

const Fruit = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruit({
  rating: 10,
  review: 'Peaches are so yume'
})

// fruit.save()
// const orange = new Fruit({
//   name: 'Apple',
//   rating: 4,
//   review: 'Pretty solid as a fruit.'
// })

// const banana = new Fruit({
//   name: 'Banana',
//   rating: 3,
//   review: 'Weird texture'
// })

// const kiwi = new Fruit({
//   name: 'Apple',
//   rating: 7,
//   review: 'Pretty solid as a fruit.'
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsdb");
//   }
// })

Fruit.find(function (err, fruits) {


  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close()

    fruits.forEach(function (fruit) {
      console.log(fruit.name);

    });
  }


})


// Fruit.updateOne({_id: '63e164f7cec5345d191fd973'}, {name: 'Peach'}, function(err) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log("Success Update!!");
//   }
// })



// fruit.save()

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
})

const People = mongoose.model('People', peopleSchema)

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: 'Great fruit.'
})

// pineapple.save()

const people = new People({
  name: 'Amy',
  age: 12,
  favouriteFruit: pineapple
})

// people.save()

Fruit.deleteOne({ _id: "63e16cc2fb0ecb7f095c7096" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success Delete!!");
  }
});