import { getDiscountedPricePercentage } from "../utilis/helper";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const ProductCard = ({ data ,className=""} ) => {

// framer motion

const item = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

    const p = data?.attributes;
    if (!p) {
        // Handle the case when data or attributes are undefined
        return null;
    }
    return (
        <motion.div
        className={`item shadow-lg rounded-xl `} variants={item}
        >
        <Link
            href={`/product/${p.slug}`}
            className="transform  overflow-hidden  bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
                className="rounded-xl shadow-inner "
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{p.price}
                    </p>

                    {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                    
                </div>
            </div>
        </Link>
        </motion.div>
    );
};

export default ProductCard;