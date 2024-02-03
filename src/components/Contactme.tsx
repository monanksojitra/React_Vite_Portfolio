import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  topic: string;
  message: string;
  termsAccepted: boolean;
}

const validationSchema = Yup.object({
  lastName: Yup.string().required("Last name is required"),
  firstName: Yup.string().required("First name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  topic: Yup.string().required("Please choose a topic"),
  message: Yup.string().required("Message is required"),
  termsAccepted: Yup.boolean().oneOf([true], "You must accept the terms"),
});

const Contactme = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      termsAccepted: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log("Form submitted:", values);
      // Reset form data
      formik.resetForm();
    },
  });

  return (
    <div className="flex items-center flex-col text-Textcl gap-1 lg:gap-4 py-4">
      <p className="text-xs font-medium lg:text-xl">Get In Touch</p>
      <p className="text-xl font-bold lg:text-4xl">Contact me</p>
      <p className="text-sm font-light lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form
        className="my-2 space-y-4 px-6 w-full sm:w-[60%] "
        onSubmit={formik.handleSubmit}
      >
        <div className="grid md:grid-cols-2 gap-x-3 gap-y-2 ">
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              className={`outline-none border-[1px] rounded-md border-Primary p-2 ${
                formik.errors.firstName && formik.touched.firstName
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <p className="text-xs text-red-500 my-2 lg:text-sm">
                {formik.errors.firstName}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              className={`outline-none border-[1px] rounded-md border-Primary p-2 ${
                formik.errors.lastName && formik.touched.lastName
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <p className="text-xs text-red-500 my-2 lg:text-sm">
                {formik.errors.lastName}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label>Email</label>
            <input
              className={`outline-none border-[1px] rounded-md border-Primary p-2 ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-xs text-red-500 my-2 lg:text-sm">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label>Phone number</label>
            <input
              className={`outline-none border-[1px] rounded-md border-Primary p-2 ${
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className="text-xs text-red-500 my-2 lg:text-sm">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>
        </div>

        <div>
          <p>Message</p>
          <textarea
            name="message"
            id=""
            rows={5}
            className={`outline-none w-full border-[1px] rounded-md border-Primary p-2 ${
              formik.errors.message && formik.touched.message
                ? "border-red-500"
                : ""
            }`}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.message && formik.touched.message && (
            <p className="text-xs text-red-500 my-2 lg:text-sm">
              {formik.errors.message}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <input
            className={`outline-none border-[1px] rounded-md border-Primary p-2 ${
              formik.errors.termsAccepted && formik.touched.termsAccepted
                ? "border-red-500"
                : ""
            }`}
            type="checkbox"
            name="termsAccepted"
            id=""
            checked={formik.values.termsAccepted}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>I accept the terms</p>
          {formik.errors.termsAccepted && formik.touched.termsAccepted && (
            <p className="text-xs text-red-500 my-2 lg:text-sm">
              {formik.errors.termsAccepted}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-Primary w-fit rounded-md px-7 lg:px-12 py-3 text-xs lg:text-xl text-white font-normal"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactme;
