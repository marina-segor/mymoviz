var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://marina:nini@cluster0.iaqfd.mongodb.net/mymovizapp?retryWrites=true&w=majority',
function(err) {
    if (err) {
      console.log(`error, failed to connect to the database because --> ${err}`);
    } else {
      console.info(' Chui connectée bébew (งツ)ว  ');
    }
   }
)

module.exports = mongoose