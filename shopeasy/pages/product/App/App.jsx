import { Box } from "@chakra-ui/react";
import * as React from "react";
import ProductCard from "./ProductCard";
// import  products  from './_data'
// import product from "../../../components/_data";
import ProductGrid from "./ProductGrid";
import axios from "axios";

export default function App(props) {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    let res = await axios.get(
      "https://vercel.com/singh-govind/economic-nest-8248/api/products/category"
    );
    setData(res.data.data);
    console.log("data by getdata", res.data.data);
  };
  React.useEffect(() => {
    setData(props.data);
    console.log("this props will debug my code", props);
    if (!props) {
      getData();
    }
  }, []);
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <ProductGrid>
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
}

export const getServerSideProps = async () => {
  let res = await axios.get(
    "https://vercel.com/singh-govind/economic-nest-8248/api/products/category"
  );

  return {
    props: {
      data: res.data.data,
    },
  };
};
