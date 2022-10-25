import React, {memo} from "react";
import { useSelector } from "react-redux";
import { categoriesData } from "../store/categoriesSlice";
import {Modal,Button,Form, Input,Select,notification} from 'antd';
import axios from "axios";


const AddProductModal = ({isOpen,setIsModalOpen}) => {
    const {categoriesList} = useSelector(categoriesData);
    const [form] = Form.useForm(); 
    const { Option } = Select;

    const onSubmit = (values) => {
        if (values) {
          axios
            .post(
              "https://upayments-studycase-api.herokuapp.com/api/products",
              values)
            .then((res) => {
                console.log(res);
              if(res.status === 201 && res.data.message === "Success") {
                notification.success({
                    message: "Success",
                    description: "The product has been successfully added",
                    duration: 2,
                  });
                  form.resetFields();
                  setIsModalOpen(false);
                  setTimeout(() => {
                    window.location.reload();
                  }, 2500);
              }
            })
            .catch((e) => {
              notification.error({
                message: e.message,
                description: "The product could not be added",
                duration: 2,
              });
            });
        }
    }

    return (
      <Modal      
        title={"Add New Product"}
        centered
        open={isOpen}
        onCancel={() => {
            form.resetFields();
            setIsModalOpen(false);
        }}
        footer={[]}
      >
        <Form 
        form={form} 
        onFinish={onSubmit} 
        layout="vertical"
        initialValues={{developerEmail: "kahramanfurkan12@gmail.com"}}
        >
          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true, message: "Please enter product's name !" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Product Price"
            name="price"
            rules={[{required: true,message: "Please enter product's price!"}]}
          >
            <Input type="number"/>
          </Form.Item>

          <Form.Item
            label="Product Category"
            name="category"
            rules={[{ required: true, message: "Please enter product's category !" }]}
          >
            <Select>
                {categoriesList?.map((item,i) => (
                    <Option value={item.name} key={i}>
                        {item.name}
                    </Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Product Description"
            name="description"
            rules={[{required: true,message: "Please enter product's description !"}]}
          >
            <Input.TextArea/>
          </Form.Item>

          <Form.Item
            label="Product Avatar"
            name="avatar"
            rules={[{ required: true, message: "Please enter product's avatar !" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Developer Email"
            name="developerEmail"
          >
            <Input disabled/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="float-right">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
};

export default memo(AddProductModal);