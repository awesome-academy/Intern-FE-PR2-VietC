import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    screenshots: {
      type: Array,
      required: false,
    },
    genres: {
      type: Array,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    platforms: {
      type: Array,
      required: true,
    },
    released: {
      type: String,
      required: true,
    },
    pc_requiments: {
      minimum: {
        type: String,
        required: true,
      },
      recommended: {
        type: String,
        required: true,
      },
    },
    mac_requiments: {
      minimum: {
        type: String,
        required: true,
      },
      recommended: {
        type: String,
        required: true,
      },
    },
    linux_requiments: {
      minimum: {
        type: String,
        required: true,
      },
      recommended: {
        type: String,
        required: true,
      },
    },
    developer: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    detailed_description: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: true,
    },
    supported_languages: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    newPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    oldPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
