var firstName = process.argv[2];
var lastName  = process.argv[3];
var birthDate = process.argv[4];

const settings = require("./settings"); // settings.json
const knex = require('knex')({
  client: 'pg',
  connection: {
    ssl  : true,
    port : settings.port,
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex('famous_people').insert({
  first_name: firstName,
  last_name: lastName,
  birthdate: birthDate
}).asCallback().finally(function(){
 knex.select().from('famous_people').asCallback(function (err, result) {
  if (err) { throw err;}
  console.log(result);
 });
 knex.destroy();
})
