
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };


exports.seed = async function (knex) {
  try {
    await knex('images').del() // delete all images first

    // Insert a single image, return id
    const imageId = await knex('papers').insert({
      title: 'Fooo', author: 'Bob', publisher: 'Minnesota'
    }, 'id')
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
}
