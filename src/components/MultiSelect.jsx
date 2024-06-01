import React, { useState } from "react";
import Select from "react-select";
import { Box, Input, Text } from "@chakra-ui/react";

const MultiSelectProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productOptions, setProductOptions] = useState([
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
    { value: "product3", label: "Benoit Saint Denis" },
    { value: "product4", label: "Anonymous Product" },
    { value: "product5", label: "Stocked Tea I" },
    { value: "product6", label: "Stocked Tea II" },
  ]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedProducts(selectedOptions);
  };

  return (
    <Box>
      <Text mb={2}>All Products *</Text>
      <Select
        isMulti
        value={selectedProducts}
        onChange={handleSelectChange}
        options={productOptions}
        placeholder="Select Products"
      />
      {selectedProducts.map((product, index) => (
        <Box key={product.value} mt={4} p={4} borderWidth={1} borderRadius="md">
          <Text mb={2}>
            {index + 1}. {product.label}
          </Text>
          <Box display="flex" mb={2}>
            <Box flex="1">
              <Text>Selling Rate</Text>
              <Input placeholder="Enter selling rate" />
            </Box>
            <Box flex="1" ml={4}>
              <Text>Total Items</Text>
              <Input placeholder="Enter Quantity" />
            </Box>
          </Box>
          <Text mt={2} color="green.500">
            104 Item(s) Remaining
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default MultiSelectProducts;
