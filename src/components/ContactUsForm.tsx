import {
  Stack,
  Typography,
  Box,
  Button,
  TextField,
  SxProps,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { rem } from "polished";
import { toast } from "react-toastify";
import { forwardRef } from "react";

export interface ContactUsFormProps {
  sx?: SxProps;
  buttonSx?: SxProps;
  buttonText?: string;
  title?: string;
  messageTitle?: string;
}

const url = "https://contactusemailer.onrender.com/api/send";
const recipientEmail = "mikeh80@hotmail.co.uk";

const sendEmail = async (values: {
  user_name: string;
  user_email: string;
  message: string;
}) => {

  const data = {
    name: values.user_name,
    senderEmail: values.user_email,
    recipientEmail,
    message: values.message,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

};

const validationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export const ContactUsForm = forwardRef<HTMLElement, ContactUsFormProps>(
  ({
  sx,
  title = "Contact Us",
  buttonText= "Send Message",
  buttonSx,
  messageTitle ="Your Message",
 }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        maxWidth: {xs: "100%", lg: rem(600)},
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: 3,
        mt: {xs: 1, md: 2, lg: 4},
        ...sx,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        {title}
      </Typography>
      <Formik
        initialValues={{ user_name: "", user_email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
          // Show success toast notification
            toast.success("Message successfully sent", {
            position: "bottom-center",
            autoClose: 2000,
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <Stack spacing={2}>
              <TextField
                fullWidth
                name="user_name"
                label="Your Name"
                value={values.user_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.user_name && Boolean(errors.user_name)}
                helperText={touched.user_name && errors.user_name}
              />
              <TextField
                fullWidth
                name="user_email"
                label="Your Email"
                type="email"
                value={values.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.user_email && Boolean(errors.user_email)}
                helperText={touched.user_email && errors.user_email}
              />
              <TextField
                fullWidth
                name="message"
                label={messageTitle}
                multiline
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ alignSelf: "flex-end", ...buttonSx }}
                disabled={isSubmitting}
              >
                {buttonText}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
});
