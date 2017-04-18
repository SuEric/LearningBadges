var mongo = require('mongodb').MongoClient;

var userTypes = [
  {
    name: 'Human Resources',
    value: 1,
    description: 'Person that require good feedback about candidates',
    entityStatus: 1,
  },
  {
    name: 'Programmer',
    value: 2,
    description: 'Person who can give feedback about development themes',
    entityStatus: 1,
  }
];

function populate (cb) {
  mongo.connect('mongodb://localhost:27017/LearningBadges',
    function (err, db) {
      if (err) { return console.dir(err); } // eslint-disable-line no-console

      var collection = db.collection('usertypes');
      collection.insert(userTypes, {w: 1}, function (err, result) {
        if (err) {
          console.log('An error has ocurred!'); // eslint-disable-line no-console
          console.log(err); // eslint-disable-line no-console
        }
        cb();
      });
    });
}

populate(function () {
  process.exit(0);
});
