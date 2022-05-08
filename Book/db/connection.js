const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/books", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('database successfully connected');
}).catch((e)=>{
    console.log('Error in Connection');
});
