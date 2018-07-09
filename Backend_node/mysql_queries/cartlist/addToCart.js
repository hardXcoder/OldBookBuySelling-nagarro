const mysql = require('mysql2')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'bookshop',
        user: 'root',
        password: '9891266117',
        insecureAuth: true
    }
)


const addition = {
    order_id: process.argv[2],
    user: process.argv[3],
    book: process.argv[4]
}

connection.query(`INSERT INTO bookscart (order_id,user,book) VALUES(
    ${addition.order_id},
    ${addition.user},
    ${addition.book}
)`, function (err, res) {
        if (err) {
            console.log(err)
        } else {
            console.log("Succesfully added to cart")
        }
        connection.close()
    })
