import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { EmployeeFormContainer, Title } from "./styles";

function EmployeeForm() {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(5, "Min 5 symbols")
      .max(50, "Max 50 symbols"),
    age: Yup.number()
      .required("Age is required")
      .min(18, "Min 18 years old")
      .max(80, "Max 80 years old")
      .typeError("Age must be a number"),
    jobTitle: Yup.string().max(30, "Max 30 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      jobTitle: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
  });

  return (
    <EmployeeFormContainer>
      <Title>Employee Form</Title>
      <Input
        name="fullName"
        label="Full Name*"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        placeholder="Enter full name"
        error={formik.errors.fullName}
      />
      <Input
        name="age"
        type="number"
        label="Age*"
        value={formik.values.age}
        onChange={formik.handleChange}
        placeholder="Enter age"
        error={formik.errors.age}
      />
      <Input
        name="jobTitle"
        label="Job Title"
        value={formik.values.jobTitle}
        onChange={formik.handleChange}
        placeholder="Enter job title"
        error={formik.errors.jobTitle}
      />
      <Button type="submit" name="Create" />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
