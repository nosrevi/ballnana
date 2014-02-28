'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Court Schema
 */
var CourtSchema = new Schema({
  name: String,
  lat: String,
  lng: String
});

mongoose.model('Court', CourtSchema);
