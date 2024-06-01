import { saleOrderFormSchema, customerSchema, productSchema } from "../schemas";

// Mock customer data
const customers = [
  {
    ...customerSchema,
    id: 1,
    name: "Ram",
    email: "ram@example.com",
    pincode: "400001",
  },
  // Add more customers as needed
];

// Mock product data
const products = [
  {
    ...productSchema,
    id: 1,
    name: "Product 1",
    category: "Category A",
    sku: [{ id: 1, selling_price: 100, max_retail_price: 120 }],
  },
  // Add more products as needed
];

// Mock sale orders
const saleOrders = [
  {
    ...saleOrderFormSchema,
    customer_id: 1,
    items: [{ sku_id: 1, price: 100, quantity: 1 }],
    invoice_no: "INV001",
    invoice_date: "2024-07-05",
  },
  // Add more orders as needed
];

export const fetchCustomers = () => Promise.resolve(customers);
export const fetchProducts = () => Promise.resolve(products);
export const fetchSaleOrders = () => Promise.resolve(saleOrders);
