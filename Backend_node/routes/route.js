const express = require('express')


const dbcart = require('../mysql_queries/cartlist/dbcart');
const dblist = require('../mysql_queries/inventorylist/dbinventory');
const dbuser = require('../mysql_queries/userlist/dbuser');
const dbmessage = require('../mysql_queries/messagelist/dbmessage');


const router = express.Router();

router.get('/items', (req, res) => {
    res.send("hello , from get method")
})


router.get('/cartbyId/:id', function (req, res) {

    console.log("ujjwal in cart server side")

    var user_id = (req.query.id);

    console.log("hahahahahahahahah")

    console.log(user_id)

    console.log(typeof user_id)

    dbcart.getCartItemsById(user_id).
        then(function (orders) {

            console.log("mahaveer 8383")

            // console.log(typeof orders[0])

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            console.log("hey i am in error")
            console.log(err)
            res.send(err)
        })
})

//original
router.get('/listings', function (req, res) {

    console.log("ujjwal in listings server side")

    dblist.getAllBooks().

        then(function (orders) {

            console.log("mahaveer 10")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.get('/listingsCategory', function (req, res) {

    console.log("ujjwal in listings server side")

    var category = (req.query.id);


    dblist.getBooksWithCategory(category).

        then(function (orders) {

            console.log("mahaveer 10")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.get('/listingsName', function (req, res) {

    console.log("ujjwal in listings server side")

    var name = (req.query.id);


    dblist.getBooksWithName(name).

        then(function (orders) {

            console.log("mahaveer 10")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.get('/listingsCondition', function (req, res) {

    console.log("ujjwal in listings server side")

    var condition = (req.query.id);


    dblist.getBooksWithCondition(condition).

        then(function (orders) {

            console.log("mahaveer 10")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.get('/listingsAuthor', function (req, res) {

    console.log("ujjwal in author server side")

    var author = (req.query.id);

    console.log(author);


    dblist.getBooksOfAuthor(author).

        then(function (orders) {

            console.log("mahaveer 10")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.get('/listingsPrice', function (req, res) {

    console.log("ujjwal in listings server side")

    var price = (req.query.id);


    dblist.getBooksWithPrice(price).

        then(function (orders) {

            console.log("mahaveer 10")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.get('/getitembyId/:id', function (req, res) {

    console.log("ujjwal in getitembyId serve ")

    var book_id = req.query.id;

    dblist.getItemById(book_id).

        then(function (orders) {

            console.log("mahaveer 900")

            // console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.post('/addtocart', function (req, res) {

    console.log("ujjwal in addtocart server side")

    // var data=req.body.json; 

    // console.log(req.body)

    // var ele=JSON.stringify(data)

    // console.log(ele)

    buyer_email = req.body.buyer_email;
    book_id = req.body.book_id;
    seller_id = req.body.seller_id;
    book_name = req.body.book_name;
    author_name = req.body.author_name;
    img = req.body.img;
    price = req.body.price;
    quantity = req.body.quantity;
    seller_email = req.body.seller_email;


    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")


    dbcart.ifExistInCart(book_id, buyer_email)

        .then(function (orders) {

            console.log("mahaveer 100")

            console.log(orders)

            console.log("I am top of thee world")
            console.log(orders.length)
            console.log("I am bottom of thee world")




            if (orders.length > 0) {

                console.log(" order lenght is > 0");

                dbcart.updatequantity(buyer_email, book_id, orders[0].quantity).

                    then(function (orders) {

                        console.log("mahaveer 100")

                        console.log(orders)

                        res.send(orders);

                        console.log("bye")

                    }).catch(function (err) {
                        res.send(err)
                    })

            } else {

                console.log(" order lenght is = 0");


                dbcart.insertincart(buyer_email, book_id, seller_id, book_name, author_name,
                    img, price, seller_email).

                    then(function (orders) {

                        console.log("mahaveer 100")

                        console.log(orders)

                        res.send(orders);

                        console.log("bye")

                    }).catch(function (err) {
                        res.send(err)
                    })

            }


            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })


})

router.post('/incorder', function (req, res) {

    console.log("ujjwal in inc order server side")

    // var data=req.body.json; 

    // console.log(req.body)

    // var ele=JSON.stringify(data)

    // console.log(ele)

    book_id = req.body.book_id;
    buyer_email = req.body.buyer_email;
    quantity = req.body.quantity + 1;


    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

    dbcart.updatequantityfromcart(buyer_email, book_id, quantity).

        then(function (orders) {

            console.log("mahaveer 0000")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.post('/decorder', function (req, res) {

    console.log("ujjwal in dec order server side")

    // var data=req.body.json; 

    // console.log(req.body)

    // var ele=JSON.stringify(data)

    // console.log(ele)

    order_id = req.body, order_id;
    book_id = req.body.book_id;
    buyer_email = req.body.buyer_email;
    quantity = req.body.quantity;

    if (quantity <= 1) {


        console.log("you are irritating me######################")

        dbcart.removefromcart(order_id, buyer_email).

            then(function (orders) {

                console.log("mahaveer 500")

                console.log(orders)

                res.send(orders);

                console.log("bye")

            }).catch(function (err) {
                res.send(err)
            })

    } else {

        quantity = quantity - 1;


        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

        dbcart.updatequantityfromcart(buyer_email, book_id, quantity).

            then(function (orders) {

                console.log("mahaveer 0000")

                console.log(orders)

                res.send(orders);

                console.log("bye")

            }).catch(function (err) {
                res.send(err)
            })

    }
})

router.post('/removefromcart', function (req, res) {

    console.log("ujjwal in remove from cart server side")

    // var data=req.body.json; 

    // console.log(req.body)

    // var ele=JSON.stringify(data)

    // console.log(ele)

    order_id = req.body.order_id;
    buyer_email = req.body.buyer_email;


    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

    dbcart.removefromcart(order_id, buyer_email).

        then(function (orders) {

            console.log("mahaveer 500")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.post('/addtolisting', function (req, res) {

    console.log("ujjwal in addtolisting server side")

    // var data=req.body.json; 

    // console.log(req.body)

    // var ele=JSON.stringify(data)

    // console.log(ele)

    seller_id = req.body.seller_id;
    book_name = req.body.book_name;
    author_name = req.body.author_name;
    img = req.body.img;
    price = req.body.price;
    book_condition = req.body.book_condition;
    category = req.body.category;
    seller_email = req.body.seller_email;



    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

    dblist.insertinproductlist(seller_id, book_name, author_name, img, price, book_condition, category, seller_email).

        then(function (orders) {

            console.log("mahaveer 200")

            console.log(orders)

            res.send(orders);

            console.log("bbye")

        }).catch(function (err) {
            res.send(err)
        })
})


router.post('/adduser', function (req, res) {

    console.log("ujjwal in adduser server side")

    // var data=req.body.json; 

    // console.log(req.body)

    // var ele=JSON.stringify(data)

    // console.log(ele)

    name = req.body.name;
    email = req.body.email;
    college = req.body.college;
    address = req.body.address
    phoneNumber = req.body.phoneNumber;
    password = req.body.password;


    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

    dbuser.insertuser(name, email, college, address, phoneNumber, password).

        then(function (orders) {

            console.log("mahaveer 760")

            console.log(orders)

            var obj = {
                success: true,
                message: "User has been successfully registered",
                user_email: email
            }

            res.send(obj);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })

})

router.post('/checkuser', function (req, res) {

    console.log("ujjwal in check server side")


    email = req.body.email;
    password = req.body.password;

    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

    dbuser.getuser(email, password).

        then(function (orders) {

            console.log("mahaveer 550")

            console.log("ladies first")
            console.log(orders[0])
            console.log("ladies end")
            if (orders.length == 0) {

                var obj2 = {
                    success: false,
                    message: "Incorrect email or password",
                    user_id: 0
                }

                res.send(obj2);
            }
            else {

                var obj1 = {
                    success: true,
                    message: "Logged In",
                    user_email: orders[0].email
                }

                console.log(obj1)
                res.send(obj1);

            }

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })

})


router.post('/storemessage', function (req, res) {

    console.log("ujjwal in check message server side")

    // var data=req.body.json; 

    // console.log(req.body)

    // var ele=JSON.stringify(data)

    // console.log(ele)

    message = req.body.message;
    sender_email = req.body.sender_email;
    reciever_id = req.body.reciever_id;
    book_id = req.body.book_id;
    img = req.body.img;
    book_name = req.body.book_name;
    seller_email = req.body.seller_email;


    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

    dbmessage.insertMessage(message, sender_email, reciever_id, book_id, img, book_name, seller_email).

        then(function (orders) {

            console.log("mahaveer 55555")

            console.log(orders)


            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })

})

router.get('/getmessages', function (req, res) {

    console.log("ujjwal in get message serve ")

    var email = req.query.id;


    dbmessage.getMessagesById(email).

        then(function (orders) {

            console.log("mahaveer Inside 100000")

            console.log(orders)

            res.send(orders);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })

})

router.post('/clearmessages', function (req, res) {

    console.log("ujjwal in clear message server side")

    // var data=req.body.json; 

    // console.log(req.body)

    // var ele=JSON.stringify(data)

    // console.log(ele)

    email = req.body.email;


    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

    dbmessage.clearmessages(email).

        then(function (orders) {

            console.log("mahaveer 500")

            console.log(orders)

            var obj = {

                success: true,
                message: "messages deleted"
            }

            res.send(obj);

            console.log("bye")

        }).catch(function (err) {
            res.send(err)
        })
})

router.post('/hello', function (req, res) {

    console.log("can you hera me")

    
})






module.exports = router;
