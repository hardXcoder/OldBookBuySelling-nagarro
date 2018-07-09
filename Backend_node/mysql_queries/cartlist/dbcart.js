const mysql=require('mysql2');

// const connection = mysql.createConnection(
//     {
//         host: 'ujjawaldb.cfmjxfzks4ne.ap-south-1.rds.amazonaws.com',
//         database: 'ujjawalDB',
//         user: 'ada',
//         password: '120120021',
//         insecureAuth: true
//     }
// )    

const connection =mysql.createConnection(
    {
        host:'localhost',
        database:'bookshop',
        user:'root',
        password:'9891266117',
        insecureAuth:true
    }
)

// No filter
function getCartItemsById(buyer_email){

    return new Promise(function(resolve,reject){

        connection.query(`SELECT *FROM bookcart where buyer_email= '${buyer_email}'`,
        function(err,rows,cols){
            if(err){
                reject(err);
            }else{
                console.log("i am a bad boy")
                resolve(rows); 
            }
           
        })
    })
}

// This function check if the book is already there in the cart
// If not , then the book will be inserted in  cart with value 1
// Else the cart will be updated ith the quantity
function ifExistInCart(book_id,buyer_email){

    return new Promise(function(resolve,reject){
        connection.query(`SELECT*FROM bookcart where book_id =${book_id} and buyer_email='${buyer_email}'`,
    function(err,rows){
        if(err){
            reject(err);
        }else{
            resolve(rows); 
        }
       
        })
    })
    
}

function insertincart(buyer_email,book_id,seller_id,book_name,author_name,
    img,price,seller_email){

    return new Promise(function(resolve,reject){
        console.log("three");
        quantity =1;
        
        connection.query(`INSERT INTO bookcart (buyer_email,book_id,seller_id,book_name,
            author_name,img,price,quantity,seller_email) VALUES(?,?,?,?,?,?,?,?,?)`
              ,[buyer_email,book_id,seller_id,book_name,author_name,
                 img,price,quantity,seller_email],function(err,res){

                if(err){
                    console.log('------');
                    
                    console.log(err);

                    reject(err);
                }else{
                    console.log("---------&&88");
                    
                    resolve();
                } 
            })
    })
}


function updatequantity(buyer_email,book_id,quantity){

    return new Promise(function(resolve,reject){

        updatedQuantity = quantity+1;

        connection.query(`UPDATE bookcart SET quantity= ${updatedQuantity} 
        WHERE buyer_email='${buyer_email}' AND book_id=${book_id}`,
    function(err,rows){
        if(err){
            reject(err);
        }else{
            resolve(rows); 
        }
       
        })
    })
    
}

function updatequantityfromcart(buyer_email,book_id,quantity){

    return new Promise(function(resolve,reject){

        connection.query(`UPDATE bookcart SET quantity= ${quantity} 
        WHERE buyer_email='${buyer_email}' AND book_id=${book_id}`,
    function(err,rows){
        if(err){
            reject(err);
        }else{
            resolve(rows); 
        }
       
        })
    })
    
}


function removefromcart(order_id,buyer_email){

    return new Promise(function(resolve,reject){
        console.log("six");
        
        connection.query(` DELETE FROM  bookcart WHERE order_id =${order_id}` 
        ,function(err,res){

                if(err){
                    console.log('------');
                    
                    console.log(err);

                    reject(err);

                }else{
                    console.log("---------&&88");
                    
                    resolve();
                } 
            }
        )
    })
}




exports=module.exports={
    getCartItemsById,
    removefromcart,

    insertincart,
    ifExistInCart,
    updatequantity,
    updatequantityfromcart
}


