var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'us-cdbr-sl-dfw-01.cleardb.net',
  user     : 'ba6f57bed71278',
  password : 'aa8200a1',
  database : 'ibmx_32dfec4ca009a8b'
});
connection.connect();

module.exports = {
  //Add user
  newConnection: function(nameUser){
    console.log("new user conected %s", nameUser);
    connection.query('INSERT INTO users(name) VALUES (?)', nameUser , function (error, results, fields) {
        if (error) throw error;
        console.log('User created ', nameUser);
      });
  },
  //Delete user
  deleteConnection: function(nameUser){
    console.log("new user conected %s", nameUser);
    connection.query('DELETE FROM users WHERE name = ?', nameUser , function (error, results, fields) {
        if (error) throw error;
        console.log('User deleted ', nameUser);
      });
  },
  //Add new table
  createNewGameTable: function(nameTable){
    console.log("New game table created %s", nameTable);
    connection.query('INSERT INTO tables(name) VALUES (?)', nameTable , function (error, results, fields) {
        if (error) throw error;
        console.log('User deleted ', nameTable);
      });
  },
  //Get users
  getAllUsers: function(){
    console.log("Get all users from database");
    connection.query('select * from users' , function (error, results, fields) {
        if (error) throw error;
        console.log('All users ', results);
      });
  },
  //Get users
  getAllTables: function(){
    console.log("Get all tables from database");
    connection.query('select * from tables' , function (error, results, fields) {
        if (error) throw error;
        console.log('All tables ', results);
      });
  },
  //Add player to table
  associatePlayerWithTable: function(idTable, idUser){
    console.log("New player-table association %s %s", idTable, idUser);
    connection.query('INSERT INTO tablesUser(idUser, idTables) VALUES (?,?)', idTable , idUser , function (error, results, fields) {
        if (error) throw error;
        console.log('User deleted ', idTable);
      });
  },
  //Add games to tables
  associateTableWithGames: function(idTable, idUser){
    console.log("New player-table association %s %s", idTable, idUser);
    connection.query('INSERT INTO gamesTable(idGame, idTables) VALUES (?,?)', idTable , idUser , function (error, results, fields) {
        if (error) throw error;
        console.log('User deleted ', idTable);
      });
  },
  //Add challenge to a set of challenges
  createChallenge: function(challenge, idSet){
    console.log("New challenge %s added to %s", challenge, idSet);
    connection.query('INSERT INTO challenges(challenge, questionSetId) VALUES (?,?)', challenge , idSet , function (error, results, fields) {
        if (error) throw error;
      });
  },
  //Add a new set of challenges
  createChallenge: function(challenge){
    console.log("New questionSet %s added", challenge);
    connection.query('INSERT INTO questionSet(challenge) VALUES (?)', challenge , function (error, results, fields) {
        if (error) throw error;
      });
  },
    //Add new table
  deleteNewGameTable: function(nameTable){
    console.log("New game table created %s", nameTable);
    connection.query('DELETE FROM tables WHERE name = ?', nameTable , function (error, results, fields) {
        if (error) throw error;
        console.log('User deleted ', nameTable);
      });
  },
   existsUser: function(nameUser){
    console.log("checking user");
    connection.query('SELECT COUNT(*) AS numero FROM users WHERE name = ?', nameUser, function(error, results, fields){
      if(error) throw error;
      console.log("results = "+results)
      console.log("results[0] ="+results[0])
      console.log("results[0].numero ="+results[0].numero)
      var a = results[0].numero
      return a
    });

 },
  existsTable: function(nameTable){
    console.log("checking table");
    connection.query('SELECT COUNT(*) AS numero FROM tables WHERE name = ?', nameTable, function(error, results, fields){
      if(error) throw error;
      return results[0].numero > 0;
    })
  }

}
