const dbConnect = () => {
  try {
    const conn = mongoose.connect('mongodb://localhost:27017/bds');
    console.log("DB connected")
  }
  catch(err) {
    console.log("Something is wrong");
  }

  module.exports = dbConnect
}