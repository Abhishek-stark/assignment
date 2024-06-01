// import { useState } from "react";
// import {
//   Box,
//   Button,
//   Table,
//   Tbody,
//   Td,
//   Th,
//   Thead,
//   Tr,
//   IconButton,
// } from "@chakra-ui/react";
// import { EditIcon } from "@chakra-ui/icons";
// import { CreateOrderModal, EditOrderModal } from "./OrderForm";
// import { saleOrderFormSchema } from "../schemas";

// const ActiveOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [currentOrder, setCurrentOrder] = useState(saleOrderFormSchema);

//   const handleCreateOrder = (order) => {
//     setOrders([...orders, { ...order, id: orders.length + 1 }]);
//     setIsCreateModalOpen(false);
//   };

//   const handleEditOrder = (updatedOrder) => {
//     setOrders(
//       orders.map((order) =>
//         order.id === updatedOrder.id ? updatedOrder : order
//       )
//     );
//     setIsEditModalOpen(false);
//   };

//   return (
//     <Box>
//       <Button onClick={() => setIsCreateModalOpen(true)} mb={4}>
//         + Sale Order
//       </Button>
//       <CreateOrderModal
//         isOpen={isCreateModalOpen}
//         onClose={() => setIsCreateModalOpen(false)}
//         onSubmit={handleCreateOrder}
//       />
//       <EditOrderModal
//         isOpen={isEditModalOpen}
//         onClose={() => setIsEditModalOpen(false)}
//         onSubmit={handleEditOrder}
//         defaultValues={currentOrder}
//       />
//       <Table>
//         <Thead>
//           <Tr>
//             <Th>ID</Th>
//             <Th>Customer Name</Th>
//             <Th>Price</Th>
//             <Th>Last Modified</Th>
//             <Th>Edit</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {orders.map((order) => (
//             <Tr key={order.id}>
//               <Td>{order.id}</Td>
//               <Td>{order.customer_name}</Td>
//               <Td>{order.price}</Td>
//               <Td>{new Date(order.last_modified).toLocaleDateString()}</Td>
//               <Td>
//                 <IconButton
//                   icon={<EditIcon />}
//                   onClick={() => {
//                     setCurrentOrder(order);
//                     setIsEditModalOpen(true);
//                   }}
//                 />
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

// export default ActiveOrders;
import { useState, useEffect } from "react"; // Import useEffect
import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { CreateOrderModal, EditOrderModal } from "./OrderForm";
import { saleOrderFormSchema } from "../schemas";

const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);

  // Load orders from local storage when the component mounts
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("activeOrders")) || [];
    setOrders(savedOrders);
  }, []);

  const saveOrders = (orders) => {
    localStorage.setItem("activeOrders", JSON.stringify(orders));
  };

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(saleOrderFormSchema);

  const handleCreateOrder = (order) => {
    const newOrders = [...orders, { ...order, id: orders.length + 1 }];
    setOrders(newOrders);
    saveOrders(newOrders); // Save orders to local storage
    setIsCreateModalOpen(false);
  };

  const handleEditOrder = (updatedOrder) => {
    const newOrders = orders.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(newOrders);
    saveOrders(newOrders); // Save orders to local storage
    setIsEditModalOpen(false);
  };

  return (
    <Box>
      <Button onClick={() => setIsCreateModalOpen(true)} mb={4}>
        + Sale Order
      </Button>
      <CreateOrderModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateOrder}
      />
      <EditOrderModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditOrder}
        defaultValues={currentOrder}
      />
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customer_name}</Td>
              <Td>{order.price}</Td>
              <Td>{new Date(order.last_modified).toLocaleDateString()}</Td>
              <Td>
                <IconButton
                  icon={<FiMoreVertical />}
                  onClick={() => {
                    setCurrentOrder(order);
                    setIsEditModalOpen(true);
                  }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ActiveOrders;
