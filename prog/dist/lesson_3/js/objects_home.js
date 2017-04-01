"use strict";

/**
 * Created by shura on 16.03.17.
 */
//task 1
var Document = {
    "Title": {},
    "Body": {},
    "Footer": {},
    "Date": {}
};
console.log(Document);

//task 2
var Digits = {
    x: 17,
    y: 25,
    write: function write() {
        document.write("<p>x = " + this.x + " y = " + this.y + "</p>");
    }
};
Digits.write();

//task 3
var Adress = {
    "results": [{
        "address_components": [{
            "long_name": "5",
            "short_name": "5",
            "types": ["street_number"]
        }, {
            "long_name": "Kyiv Politechnical Institute",
            "short_name": "Kyiv Politechnical Institute",
            "types": ["establishment"]
        }, {
            "long_name": "Academic Jangel str.",
            "short_name": "Academic Jangel str.",
            "types": ["route"]
        }, {
            "long_name": "Solomiansky district",
            "short_name": "Solomiansky district",
            "types": ["sublocality_level_1", "sublocality", "political"]
        }, {
            "long_name": "Kyiv",
            "short_name": "Kyiv",
            "types": ["locality", "political"]
        }, {
            "long_name": "Kyiv City",
            "short_name": "Kyiv City",
            "types": ["administrative_area_level_2", "political"]
        }, {
            "long_name": "Kyiv City",
            "short_name": "Kyiv City",
            "types": ["administrative_area_level_1", "political"]
        }, {
            "long_name": "Ukraine",
            "short_name": "UA",
            "types": ["country", "political"]
        }],
        "geometry": {
            "location": {
                "lat": 50.449819,
                "lng": 30.453404
            },
            "location_type": "ROOFTOP",
            "viewport": {
                "northeast": { "lat": 50.4511679802915, "lng": 30.4547529802915 },
                "southwest": { "lat": 50.4484700197085, "lng": 30.4520550197085 }
            }
        },
        "types": ["street_address"]
    }],
    "status": "OK"
};

var copyAdress = JSON.parse(JSON.stringify(Adress));
console.log(copyAdress);

var addressResults = Adress.results[0];
console.log(addressResults);
document.write("<p> \"" + addressResults.address_components[1].long_name + ", " + addressResults.address_components[2].long_name + ", " + addressResults.address_components[0].long_name + ", " + addressResults.address_components[4].long_name + ", " + addressResults.address_components[7].long_name + "\"</p>");
document.write("<p>Latitude: " + addressResults.geometry.location.lat + ", longitude: " + addressResults.geometry.location.lng + "</p>");

var houseColor = {
    h1: "White",
    h2: "Green",
    h3: "Grey",
    h4: "Black",
    h5: "Pink"
};
for (var key in houseColor) {
    document.write("<p>" + houseColor[key] + "</p>");
}