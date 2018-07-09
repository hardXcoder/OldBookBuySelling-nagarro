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

// query for message table

// create table messagebox(
//      reciever_id integer,
//      message varchar(10000),
//      sender_email varchar(1000),
//      book_id integer,
//      img varchar(30000),
//      book_name varchar(3000),
//      reciever_email varchar(500)
//      )



function insertMessage(message, sender_email, reciever_id, book_id,img,book_name,reciever_email) {

    console.log("you have done a good job")

    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO messagebox (message, sender_email, reciever_id, book_id,img,book_name,reciever_email)
         VALUES(?,?,?,?,?,?,?)`,
            [message, sender_email, reciever_id, book_id,img,book_name,reciever_email],
            function (err, res) {
                if (err) {
                    reject(err);
                    console.log(err)
                } else {

                    console.log('success');

                    resolve();

                }
            })
    })
}

function getMessagesById(user_email){

    console.log("i am here in getMessagesById query")

    return new Promise(function(resolve,reject){

        connection.query(`SELECT * FROM messagebox where reciever_email='${user_email}'`,
        function(err,rows,cols){

            
            if(err){
                console.log(err)
                reject(err);
            }else{
                console.log("hey there")
                 
                resolve(rows); 
            }
           
        })
    })
}

function clearmessages(email){

    console.log("i am here in getMessagesById query")

    return new Promise(function(resolve,reject){

        connection.query(`DELETE FROM messagebox where reciever_email='${email}'`,
        function(err,rows,cols){

            
            if(err){
                console.log(err)
                reject(err);
            }else{
                console.log("hey there")
                 
                resolve(rows); 
            }
           
        })
    })
}


exports=module.exports={
   insertMessage,
   getMessagesById,
   clearmessages
}


