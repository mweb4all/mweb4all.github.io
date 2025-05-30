import {
  AppBar,
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import { TrioCarousel } from "./components/TrioCarousel";
import { Copyright } from "./components/Copyright";
import { SocialMediaProps, SocialMedia } from "./components/SocialMedia";
import { OpeningTimes } from "./components/OpeningTimes";
import { rem } from "polished";
import { ContactUsForm } from "./components/ContactUsForm";
import { black, blue, cream } from "./components/Colours";
import { LinkButton } from "./components/LinkButton";

// michael.web4all@gmail.com

const welcomeMessage = "Welcome to Harlands Hair Salon";

const tableData = {
  headers: ["Service", "Price"],
  services: [
    { name: "Basic Haircut", price: "£20" },
    { name: "Styled Haircut", price: "£35" },
    { name: "Kids' Haircut", price: "£15" },
    { name: "Hair Coloring", price: "£50" },
    { name: "Hair Treatment", price: "£40" },
  ],
};

const infoParagraphs = [
  "We offer a variety of hair services tailored to your needs.",
  "Our experienced stylists ensure you get the best treatment.",
  "Visit us to experience top-notch hair care services.",
];

const socialLinks: SocialMediaProps["socialLinks"] = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
};

const openingTimes = {
  Monday: { open: "09:00", close: "18:00" },
  Tuesday: { open: "09:00", close: "18:00" },
  Wednesday: { open: "09:00", close: "18:00" },
  Thursday: { open: "09:00", close: "18:00" },
  Friday: { open: "09:00", close: "18:00" },
  Saturday: { open: "10:00", close: "16:00" },
  Sunday: { open: "Closed", close: "Closed" },
};

const pageTitle = "Harlands Hair Salon";

const carouselImages = [
  "https://images.unsplash.com/photo-1599351430140-c70f0250bd70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683133539091-a57b306742a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1629397685944-7073f5589754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const googleMap =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.8939286995587!2d-1.1184421000000002!3d53.951391799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793120de033f53%3A0xf59f6c43edee450c!2s225A%20Hamilton%20Dr%20W%2C%20Acomb%2C%20York%20YO24%204PL!5e0!3m2!1sen!2suk!4v1745663389784!5m2!1sen!2suk";

const shadowOffset = 2;

export const Config = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const pricingSectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <AppBar
        position="static"
        color="default"
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mr: 0.5,
              flexGrow: 1,
              color: black,
              fontFamily: "Dancing Script",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: "bold",
            }}
          >
            {pageTitle}
          </Typography>
          <SocialMedia socialLinks={socialLinks} />
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        sx={{ background: "white", borderTop: `${rem(2)} solid ${cream}` }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <Typography
              sx={{
                color: black,
                fontWeight: "bold",
                mr: 0.5,
                fontSize: { xs: "0.8rem", md: "1.3rem" },
                textDecoration: "none",
              }}
            >
              Book now:
            </Typography>
            <Typography
              component="a"
              href="tel:0987391238"
              sx={{
                color: black,
                fontWeight: "bold",
                fontSize: { xs: "0.8rem", md: "1.3rem" },
                textDecoration: "none",
              }}
            >
              09873 91238
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="flex-end">
            <LinkButton ref={pricingSectionRef} title="Pricing" />
            <LinkButton ref={contactSectionRef} title="Contact Us" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: { xs: rem(300), md: rem(500) },
          backgroundImage:
            "url(https://images.unsplash.com/photo-1599351430140-c70f0250bd70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 1,
          }}
        />
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "3rem", md: "5rem", lg: "7rem" },
            fontFamily: "Dancing Script",
            textShadow: `-${shadowOffset}px -${shadowOffset}px 0 #000, ${shadowOffset}px -${shadowOffset}px 0 #000, -${shadowOffset}px ${shadowOffset}px 0 #000, ${shadowOffset}px ${shadowOffset}px 0 #000;`,
            zIndex: 2, // Ensure text is above the overlay
          }}
        >
          {welcomeMessage}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Stack
          ref={pricingSectionRef}
          sx={{
            height: "max-content",
            alignItems: "center",
            justifyContent: "center",
            borderTop: `${rem(4)} solid ${cream}`,
            borderBottom: `${rem(4)} solid ${cream}`,
            backgroundColor: "white",
            px: { xs: 1, md: 4 },
            py: { xs: 2, md: 3 },
            color: black,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Our Prices
          </Typography>
          <Stack
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {infoParagraphs.map((paragraph, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                {paragraph}
              </Typography>
            ))}
            <Stack
              sx={{
                width: { xs: "85%", md: "90" },
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: 3,
              }}
            >
              <Box sx={{ overflowX: "auto" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {tableData.headers.map((header, index) => (
                        <TableCell
                          key={index}
                          align={index === 0 ? "left" : "right"}
                          sx={{
                            fontWeight: "bold",
                            borderBottom: "2px solid #ccc",
                          }}
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.services.map((service, index) => (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {service.name}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {service.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            my: 3,
          }}
        >
          <TrioCarousel carouselImages={carouselImages} />
        </Box>

        <Stack
          ref={contactSectionRef}
          sx={{
            height: "max-content",
            justifyContent: "center",
            backgroundColor: cream,
            padding: 4,
          }}
        >
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"center"}
            gap={2}
          >
            <ContactUsForm sx={{ flex: 1 }} />
            <OpeningTimes sx={{ flex: 1 }} openingTimes={openingTimes} />
          </Stack>
          <Box
            sx={{
              width: "100%",
              height: "400px",
              mt: 4,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              title="Google Map"
              src={googleMap}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Box>
        </Stack>
      </Box>
      <Copyright />
    </>
  );
};
