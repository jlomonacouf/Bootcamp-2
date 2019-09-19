/* Add all the required libraries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
	/* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   var Listing = mongoose.model('Listing', Listing);
   
	Listing.findOne({ 'code': 'LBW' }, function (err, entry) {
		if (err) return handleError(err);
		console.log(entry);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.deleteOne({ code: 'CABL' }, function (err) {});
   console.log("Removed entry with code CABL");
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
  */
	Listing.findOneAndUpdate({code: 'PHL'}, {address: "102 Phelps Lab, Gainesville, FL 32611"}, {new: true}, (err, entry) => {
		if (err) return handleError(err);
		console.log(entry);
	
	});
	
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, entries) {
	   entries.forEach(function(entry) {
			console.log(entry);
	   });
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
