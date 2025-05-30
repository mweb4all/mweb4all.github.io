import {
  Stack,
  Typography,
  Box,
  Button,
  TextField,
  SxProps,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export interface ContactUsFormProps {
  sx?: SxProps;
}

const sendEmail = async (values: {
  user_name: string;
  user_email: string;
  message: string;
}) => {
  const url = "https://api.brevo.com/v3/smtp/email";

  const data = {
    sender: { name: values.user_name, email: values.user_email },
    to: [{ email: "michael.web4all@gmail.com", name: "Recipient" }],
    subject: "Hello from your Web App!",
    htmlContent: `<h1>${values.message}</h1>`,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key":""
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
};

const validationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export const ContactUsForm = ({ sx }: ContactUsFormProps) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: 3,
        mt: 4,
        ...sx,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Contact Us
      </Typography>
      <Formik
        initialValues={{ user_name: "", user_email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
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
                label="Your Message"
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
                sx={{ alignSelf: "flex-end" }}
                disabled={isSubmitting}
              >
                Send Message
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
