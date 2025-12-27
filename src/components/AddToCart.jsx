import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddToCart = ({ product }) => {
  const isLogin = false;
  const route = useRouter();
  const path = usePathname();
  const handleAdd2Cart = () => {
    if (isLogin) alert(product._id);
    else {
      route.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
    <div>
      <button
        onClick={handleAdd2Cart}
        className="btn btn-primary btn-sm w-full gap-2"
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
