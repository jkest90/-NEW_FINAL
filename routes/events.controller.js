var request = require('request');

module.exports = {
    //get concerts
    getEvents : function(req,res) {
        //if the query request contains a category, send down the response.
        if(req.query.category) {

            request.get('http://api.eventful.com/json/events/search?app_key=w2rkS95Bbmj8DNzS&where=' +
            req.query.lat + ',' + req.query.lng +"&date="+ req.query.date + '&within=25&category=' + req.query.category,

                (err, response, body) => {
                    if (err) {
                        console.error('error!', err);
                        res.send(err);
                    } else {
                        res.send(body);
                    }
                })
        } else {
        //else
            request.get('http://api.eventful.com/json/events/search?app_key=w2rkS95Bbmj8DNzS&where=' +
            req.query.lat + ',' + req.query.lng +"&date="+ req.query.date + '&within=25',

            (err, response, body) => {
                if (err) {
                    console.error('error!', err);
                    res.send(err);
                } else {
                    res.send(body);
                }
            })
        }
    }

    // //get comedy
    // getEvents : function(req,res) {
    //
    //     request.get('http://api.eventful.com/json/events/search?app_key=w2rkS95Bbmj8DNzS&where=' +
    //     req.query.lat + ',' + req.query.lng + '&date=Today&within=25',
    //
    //         (err, response, body) => {
    //             if (err) {
    //                 console.error('error!', err)
    //                 res.send(err);
    //             } else {
    //                 res.send(body)
    //             }
    //         })
    //
    //
    // //get sports
    // getEvents : function(req,res) {
    //
    //     request.get('http://api.eventful.com/json/events/search?app_key=w2rkS95Bbmj8DNzS&where=' +
    //     req.query.lat + ',' + req.query.lng + '&date=Today&within=25',
    //
    //         (err, response, body) => {
    //             if (err) {
    //                 console.error('error!', err)
    //                 res.send(err);
    //             } else {
    //                 res.send(body)
    //             }
    //         })
    // }
    // getEvents : function(req,res) {
    //
    //     request.get('http://api.eventful.com/json/events/search?app_key=w2rkS95Bbmj8DNzS&where=' +
    //     req.query.lat + ',' + req.query.lng + '&date=Today&within=25',
    //
    //         (err, response, body) => {
    //             if (err) {
    //                 console.error('error!', err)
    //                 res.send(err);
    //             } else {
    //                 res.send(body)
    //             }
    //         })
    // }

}
