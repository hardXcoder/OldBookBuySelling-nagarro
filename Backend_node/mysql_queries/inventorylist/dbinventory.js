const mysql = require('mysql2');

const connection =mysql.createConnection(
    {
        host:'localhost',
        database:'bookshop',
        user:'root',
        password:'9891266117',
        insecureAuth:true
    }
)



function getAllBooks(){

    return new Promise(function(resolve,reject){

        connection.query(`SELECT * FROM booksinventory `,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                resolve(rows); 
            }
           
        })
    })
}


// Author filter
function getBooksOfAuthor(author) {

    console.log("In author i m");
    console.log(author)

    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM booksinventory where author_name='${author}'`,
            function (err, rows, cols) {
                if (err) {
                    console.log(err);

                    reject(err);
                } else {

                    console.log(rows);
                    resolve(rows);
                }

            })
    })
}

// Condition filter
function getBooksWithCondition(cond) {

    console.log("hello");

    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM booksinventory where book_condition='${cond}'`,
            function (err, rows, cols) {
                if (err) {
                    console.log(err);

                    reject(err);
                } else {

                    console.log(rows);
                    resolve(rows);
                }

            })
    })
}

// Price filter
function getBooksWithPrice(p1) {

    console.log("hello");

    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM booksinventory where price < ${p1}`,
            function (err, rows, cols) {
                if (err) {
                    console.log(err);

                    reject(err);
                } else {

                    console.log(rows);
                    resolve(rows);
                }

            })
    })
}

// Name filter
function getBooksWithName(name) {

    console.log("hello");

    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM booksinventory where book_name='${name}'`,
            function (err, rows, cols) {
                if (err) {
                    console.log(err);

                    reject(err);
                } else {

                    console.log(rows);
                    resolve(rows);
                }

            })
    })
}

function getBooksWithCategory(category) {

    console.log("hello");

    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM booksinventory where category='${category}'`,
            function (err, rows, cols) {
                if (err) {
                    console.log(err);

                    reject(err);
                } else {

                    console.log(rows);
                    resolve(rows);
                }

            })
    })
}

function getItemById(book_id) {

    console.log("ujjwal in get by Id sql query");

    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM booksinventory where book_id='${book_id}'`,
            function (err, rows, cols) {
                if (err) {
                    console.log(err);

                    reject(err);
                } else {

                    // console.log(rows);
                    resolve(rows);
                }

            })
    })
}

function insertinproductlist(seller_id,book_name,author_name,img,price,book_condition,category,seller_email) {
    // console.log(title+description+price+img+'------');

    console.log("yyyyyyyyyyyyyyyyyyyyyyyyyy")
    console.log(img)
    console.log("yyyyyyyyyyyyyyyyyyyyyyyyyy")

    // this if is required to handle the case where
    // we have to use the default book photo

    console.log(seller_id);

 if(img===''){
    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO booksinventory (seller_id,book_name,author_name,
                          price,book_condition,category,seller_email) VALUES(?,?,?,?,?,?,?)`,
            [seller_id,book_name,author_name,price,book_condition,category,seller_email],
            function (err, res) {
                if (err) {
                     console.log(err);
                    reject(err);
                } else {
                    console.log('success');

                    resolve();

                }
            })
    })
 }
 else{
    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO booksinventory (seller_id,book_name,author_name,img,
                          price,book_condition,category,seller_email) VALUES(?,?,?,?,?,?,?,?)`,
            [seller_id,book_name,author_name,img,price,book_condition,category,seller_email],
            function (err, res) {
                if (err) {
                     console.log(err);
                    reject(err);
                } else {
                    console.log('success');

                    resolve();

                }
            })
    })
}

}




exports = module.exports = {

    getAllBooks,
    getBooksOfAuthor,
    getBooksWithCondition,
    getBooksWithName,
    getBooksWithPrice,
    getBooksWithCategory,
    getItemById,

    
    insertinproductlist

}

