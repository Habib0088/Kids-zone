'use client';

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;


  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition rounded-2xl">
      
      {/* Image */}
      <figure className=" overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="h-56 p-2 rounded-md w-full object-cover"
        />
        {discount > 0 && (
          <span className="badge badge-error absolute top-3 left-3 text-white">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Body */}
      <div className="card-body space-y-2">
        <h2 className="card-title text-base font-semibold line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">
          Sold: <span className="font-medium">{sold}</span>
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-sm text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="card-actions mt-2">
          <div className="w-full">
            <AddToCart product={product}></AddToCart>
          </div>
          <Link href={`/products/${_id}`} className="btn  btn-sm w-full gap-2">
           
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
