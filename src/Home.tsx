import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import { Copyright } from "./components/Copyright";
import { rem } from "polished";
import { ContactUsForm } from "./components/ContactUsForm";
import DoneIcon from '@mui/icons-material/Done';
import Screen from "./assets/computer.svg?react";
import { Faqs } from "./components/FAQs/Faqs";
import { FaqProps } from "./components/FAQs/Faq";
import { useIsDesktop, useIsMobile, useIsTablet } from "./hooks/breakpoint";

//ANalytics needs mentioning

const price = 12;

const generalInformation: Array<FaqProps> = [
  {
    question: "What is the cost?",
    answer: (
      <>
        <Typography variant="body1" gutterBottom>
          Just £{price} a month, with no setup costs.
        </Typography>
      </>
    ),
  },
  {
    question: "Are there any hidden costs?",
    answer: (
      <Typography variant="body1">
        Absolutely not. Picture updates and pricing updates are included in the monthly fee.
      </Typography>
    ),
  },
  {
    question: "How do I pay?",
    answer: (
      <Typography variant="body1">
        Just set up a standing order for £{price} a month to our bank account, and we'll take care of the rest.
      </Typography>
    ),
  },
  {
    question: "Can I cancel at any time?",
    answer: (
      <Typography variant="body1">
        Yes, you can cancel at any time. Just let us know, and we'll stop the service.
      </Typography>
    ),
  },
  {
    question: "Is there a minimum contract length?",
    answer: (
      <Typography variant="body1">
        Nope. Unlike many other website providers, we believe there should be no lengthy contract requirements.
      </Typography>
    ),
  },
  {
    question: "Can I edit my own website?",
    answer: (
      <Typography variant="body1">
        You may ask us to change wording, pictures, and prices—but beyond that, no other changes can be made. We aim to keep things as simple as possible.
        If you’re looking for more configuration options, this service may not be the right fit for you.
      </Typography>
    ),
  },
  {
    question: "Do I own the website?",
    answer: (
      <Typography variant="body1">
        Since we are providing the service, you do not own the website. However, you can cancel at any time, and we will stop hosting it.
      </Typography>
    ),
  },
    {
    question: "Where do the contact-us messages go?",
    answer: (
      <Typography variant="body1">
        You simply provide an email address and we will forward all contact messages to that address. You can just reply to the email you receive to respond to the customer.
      </Typography>
    ),
  },
];


const benefits = [
  <>
<b>8 out of 10</b> customers are more likely to engage with a business that has a website.
  </>,
    <>
    <b>88%</b> of consumers who search for a business on mobile visit or call within 24 hours.
      </>,
  <>
Increase your business online presence and reach more customers.
  </>,
  <>
<b>SEO Friendly</b> - be seen on Google. <b>93%</b> of web traffic is directed through Google.
  </>,
  <>
<b>73%</b> of small businesses have a website. It's time you joined them.
  </>,
  <>
No set up costs - just a simple monthly fee of <b>£{price}</b>.
  </>,
  <>
No need to learn HTML or config, no domain worries, just email with price or picture updates and we'll do the rest.
  </>,
];

const contentWidth = rem(1300);
const iconSize = 40;

export const Home = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const faqsSectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <>
      <Helmet>
        <title>
          {`GoWebly - no easier way for your business to have a website. Just £${price} a
          month.`}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <AppBar
        position="static"
        color="default"
        sx={{
          // backgroundColor: "#1e88e5",
            background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
            color: "white",
            boxShadow: "none",
            py: "0.5rem",
            px: {xs: "0.5rem", md: "1rem"},
            borderBottom: `4px solid #FF9149`,
          }}
          >
        <Toolbar
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            p: 0
          }}
        >
            <Typography
              variant="h6"
              sx={{
                textAlign: "left",
                mr: 0.5,
                color: "white",
                flexGrow: 1,
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontWeight: "bold",
                px: 1,
              }}
            >
              GoWebly
            </Typography>
          <Stack direction="row" gap={1}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "white",
                color: "#1e88e5",
                "&:hover": { backgroundColor: "#e3f2fd" },
                px: {xs: "0.5rem", md: "1rem"}
              }}
              onClick={() => {
                if (faqsSectionRef.current) {
                  faqsSectionRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              FAQ's
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "white",
                color: "#1e88e5",
                "&:hover": { backgroundColor: "#e3f2fd" },
                px: {xs: "0.5rem", md: "1rem"}
              }}
              onClick={() => {
                if (contactSectionRef.current) {
                  contactSectionRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              Contact us
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack
        sx={{
          maxWidth: contentWidth,
          mx: {xs: 1, md: 2, lg: "auto"},
          mt: 4,
          textAlign: "center",
          padding: "2rem",
          background: "linear-gradient(135deg, #1e88e5, #42a5f5)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          We build it. Just £{price} a month. That's it.
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Affordable, professional websites for small businesses.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#1e88e5",
            fontWeight: "bold",
            padding: "0.75rem 2rem",
            borderRadius: "50px",
            width: "fit-content",
            margin: "0 auto",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
          onClick={() => {
            if (contactSectionRef.current) {
              contactSectionRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
        >
          Make me a website please
        </Button>
      </Stack>
      <Stack
        flexDirection={{xs:"column", md: "row"}}
        sx={{
          maxWidth: contentWidth,
          mx: "auto",
          mt: 4,
          gap: {xs: 0, md: 4},
          alignItems: "center",
        }}
      >
        <Box component="ul" sx={{ pl: {xs:2, md: 4}, mt: 0, flex:{md: 1} }}>
          {benefits.map((benefit, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: rem(8),
              }}
            >
              <DoneIcon sx={{
                height: rem(iconSize),
                width: rem(iconSize),
                minWidth: rem(iconSize),
                minHeight: rem(iconSize),
                marginRight: rem(8),
                color: 'green'
              }}/>
              <Typography>{benefit}</Typography>
            </li>
          ))}
        </Box>
        <Screen style={{ height: isDesktop ? "450px" : "300px", width: isDesktop ? "450px" : "300px" }} />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          mt: {xs: 2, md: 3, lg: 4},
          mx: 2
        }}
      >
        <Typography
          variant="h4"
          sx={{
        color: "red",
        fontWeight: "bold",
          }}
        >
          ⚠️
        </Typography>
        <Typography
          variant="h4"
          sx={{
        color: "red",
        fontWeight: "bold",
        textAlign: "center",
          }}
        >
          You're missing out on new customers without a website.
        </Typography>
        <Typography
          variant="h4"
          sx={{
        color: "red",
        fontWeight: "bold",
          }}
        >
          ⚠️
        </Typography>
      </Stack>
      <Stack
        sx={{
          backgroundColor: "#1e88e5",
          color: "white",
          py: 4,
          mt: 4,
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ mx: "auto", fontWeight: "bold" }}>
          How it works?
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, maxWidth: contentWidth, mx: "auto" }}
        >
          We handle everything from
          setup to maintenance, producing a professional website for you while
          you focus on running your business.
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, maxWidth: contentWidth, mx: "auto" }}
        >
          Request us to make you a website - once you like what you see, we can finalise things like price and pictures. And thats it.
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, maxWidth: contentWidth, mx: "auto" }}
        >
          Having a website doesn't need to be expensive, complicated, or
          time-consuming. Its never been easier to get your business online.
        </Typography>
      </Stack>
      <Typography variant="h5" sx={{ textAlign: "center", mt: {xs:2, md: 4} }}>
        FAQs
      </Typography>
      <Faqs ref={faqsSectionRef} sx={{ maxWidth: {xs: "100%", lg: contentWidth}, mx: {xs: 2, lg: "auto"}, my: {xs:2, md: 4}}} faqs={generalInformation} />
      <ContactUsForm ref={contactSectionRef} sx={{ flex: 1, boxShadow: "none", mx: "auto", pt: {xs: 1}}} title="Make me a website" buttonSx={{alignSelf: "center"}} messageTitle="Business name and a few details"/>
      <Copyright />
    </>
  );
};
