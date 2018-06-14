import mongoose from 'mongoose';

const marcadorSchema = new mongoose.Schema({
  fecha:{
    type : String,
    required: false
  },
  latitud:{
    type: Number,
  },
  longitud:{
    type: Number,
  },
  oxigenoDisuelto:{
    required:Number,
    type:false
  },
  nitratos:{
    type:Number,
    required:false
  },
  pH:{
    type:Number,
    required:false
  },
  T:{
    type:Number,
    required:false
  },
  solidosTotales:{
    type:Number,
    required:false
  },
  fosforoTotal:{
    type:Number,
    required:false
  },
  turbiedad:{
    type:Number,
    required:false
  },
  conductividad:{
    type:Number,
    required:false
  },
  dureza:{
    type:Number,
    required:false
  },
  alcalinidad:{
    type:Number,
    required:false
  }
});

export default marcadorSchema;
