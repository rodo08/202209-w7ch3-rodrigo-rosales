import { model, Schema } from "mongoose";

// eslint-disable-next-line @typescript-eslint/naming-convention
const ItemSchema = new Schema({
  picture: {
    type: String,
  },
  propertyOf: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Item = model("Item", ItemSchema, "items");

export default Item;
