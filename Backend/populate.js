var mongo = require('mongodb').MongoClient;

var userTypes = [
  {
    name: 'Admin',
    value: 1,
    description: 'Person who manages all system',
    entityStatus: 1,
  },
  {
    name: 'User',
    value: 2,
    description: 'Person who uses system as normal user',
    entityStatus: 1,
  }
];

var admin = {
  email: 'development@procodific.com',
  password: '$2a$10$79/PdwMIHJKZng912O8pfuClZYOiIdzwUHRjXgQtuaEndAco4oJGS',
  firstname: 'admin',
  lastname: 'general',
  username: 'admin',
  type: 1,
  entityStatus: 1,
};

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

      collection = db.collection('users');
      collection.insert(admin, {w: 1}, function (err, result) {
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
