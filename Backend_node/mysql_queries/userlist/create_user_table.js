const mysql=require('mysql2');

const connection =mysql.createConnection(
    {
        host:'localhost',
        database:'bookshop',
        user:'root',
        password:'9891266117',
        insecureAuth:true
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        college VARCHAR(100) NOT NULL,
        address VARCHAR(100) NOT NULL,
        phoneNumber VARCHAR(100) NOT NULL,
        password varchar(100)
    ) `,
    function(err,results){
        if(err){
            console.log(err);
            
        }else{
            console.log("successfully created");
        }
        connection.close();
    }

)

// 1st one again please

// 3rd
// CREATE TABLE IF NOT EXISTS users (
//     user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     email VARCHAR(100) UNIQUE NOT NULL,
//     college VARCHAR(100) NOT NULL,
//     address VARCHAR(100) NOT NULL,
//     phoneNumber VARCHAR(100) NOT NULL,
//     password varchar(100)
// ) 


// // 4th
// create table messagebox(
//     reciever_id integer,
//     message varchar(10000),
//     sender_email varchar(1000),
//     book_id integer,
//     img varchar(30000),
//     book_name varchar(3000),
//     reciever_email varchar(500)
//     )