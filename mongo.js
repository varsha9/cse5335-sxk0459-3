var connect = require('connect'),
    mongo = require('mongodb');
mongo.connect('mongodb://heroku_d03kn7hw:4pd26pbsinojodrga1hkp3sjv5@ds045604.mongolab.com:45604/heroku_d03kn7hw', {}, function(error, db) {

    if(error){
        return console.log("Not connected");
    }

    console.log("Connected");

    db.createCollection("Pro", { size: 2147483648 } );



    fs = require('fs');
    fs.readFile('./Date.json', 'utf8', function (err, data) {

        if (err) {
            return console.log(err);
        }

        var arr = JSON.parse(data);

        console.log(arr);


        for(i=0;i< arr.length;i++) {


            arr[i]["_id"] = i;

            db.collection('Pro').insertOne(arr[i], function (err, result) {
                if (err) {
                    return console.log("Not connected");


                }
                else{
                    console.log(result);

                }



            })
        }
    });


});