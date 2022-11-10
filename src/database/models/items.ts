import { model, Schema } from "mongoose";

const itemSchema = new Schema({
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

// eslint-disable-next-line @typescript-eslint/naming-convention
const Item = model("Item", itemSchema, "items");

export default Item;
