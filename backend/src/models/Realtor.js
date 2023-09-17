import mongoose from 'mongoose';
import { offerSchema } from './Offer';

const { Schema } = mongoose;

const realtorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  crc: { //conselho regional de corretores
    type: String,
    required: true
  }, 
  image: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  offer:[{
    type: mongoose.Types.ObjectId,
    ref: offerSchema,
    required: false,
  }]
}, 
{timestamps: true}
)

const Realtor = mongoose.model(
  "Realtor",
  realtorSchema,
);

export default Realtor;