const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'bookshop',
        user: 'root',
        passsword: '9891266117',
        insecureAuth: true
    }
)


const addition = {
    book_id = process.argv[2],
    seller_id = process.argv[3],
    book_name = process.argv[4],
    author_name = process.argv[5],
    img = process.argv[6],
    price = process.argv[7],
    condition = process.argv[8],

}

connection.query(`INSERT INTO booksinventory(book_id,seller_id,book_name,author_name,img,price,condition)
                  VALUES(
                      ${addition.book_id},
                      ${addition.seller_id},
                      '${addition.book_name}',
                      '${addition.author_name}',
                      '${addition.img}',
                      ${addition.price},
                      '${addition.condition}'
                   ) `, function (err, res) {
        if (err) {
            console.log(err)
        } else {
            console.log("Book succesfully added to Inventory!")
        }
        connection.close();
    }
)



