import React, { useState } from "react";
import Header from "./Header/Header";
import Table from "./Table/Addtable";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './add.css'
import axios from "axios";

export default function AddPage() {
    const [data, setData] = useState([]);

  const validationSchema = Yup.object({
    image: Yup.string()
      .url("Invalid URL format")
      .required("Image URL is required"),
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    price: Yup.number()
      .positive("Price must be a positive number")
      .required("Price is required")
  });

  const initialValues = {
    image: "",
    name: "",
    price: "",
  };

   const handleSubmit = async (values, { resetForm }) => {
    try {
        console.log(values);
        
      const response = await axios.post("http://localhost:8080/clothes", values);
      if (response.status === 201 || response.status === 200) {
        setData((prevData) => [...prevData, response.data]);
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="add-form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <div className="add-product">
                  <label>Image:</label>
                  <Field type="text" name="image" className='field'/>
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="add-product">
                  <label>Name:</label>
                  <Field type="text" name="name"  className='field'/>
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="add-product">
                  <label>Price:</label>
                  <Field type="number" name="price" className='field' />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="error"
                  />
                </div>
                <button type="submit" className="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Table />
    </>
  );
}
