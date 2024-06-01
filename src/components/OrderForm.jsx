import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { saleOrderFormSchema } from "./../schemas/index";

const OrderForm = ({
  onSubmit,
  defaultValues = saleOrderFormSchema,
  isReadOnly = false,
}) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isReadOnly={isReadOnly}>
        <FormLabel>Customer Name</FormLabel>
        <Controller
          name="customer_name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </FormControl>
      <FormControl mt={4} isReadOnly={isReadOnly}>
        <FormLabel>Price</FormLabel>
        <Controller
          name="price"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
      </FormControl>
      <FormControl mt={4} isReadOnly={isReadOnly}>
        <FormLabel>Last Modified</FormLabel>
        <Controller
          name="last_modified"
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="yyyy/MM/dd"
              className="chakra-input"
              isClearable
            />
          )}
        />
      </FormControl>
      {!isReadOnly && (
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      )}
    </form>
  );
};

const CreateOrderModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <OrderForm onSubmit={onSubmit} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const EditOrderModal = ({ isOpen, onClose, onSubmit, defaultValues }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <OrderForm onSubmit={onSubmit} defaultValues={defaultValues} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { CreateOrderModal, EditOrderModal };
