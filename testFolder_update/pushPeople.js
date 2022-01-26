import JSDB from '@small-tech/jsdb'

// Create your database in the test folder.
// (This is where your JSDF files – “tables” – will be saved.)
// start: LocalAPI test script voor maken (push) [people folder]
// After running the above script, take a look at the resulting database table in the `./db/people.js` file.

const db = JSDB.open('db')

// Create db/people.js table with some initial data if it
// doesn’t already exist.
if (!db.people) {
  db.people = [
    {name: 'Aral', age: 43},
    {name: 'Laura', age: 34}
  ]

  // Correct Laura’s age. (This will automatically update db/people.js)
  db.people[1].age = 33

  // Add Oskar to the family. (This will automatically update db/people.js)
  db.people.push({name: 'Oskar', age: 8})

  // Update Oskar’s name to use his nickname. (This will automatically update db/people.js)
  db.people[2].name = 'Osky'
}