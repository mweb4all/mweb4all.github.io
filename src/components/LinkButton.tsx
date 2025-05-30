import { Button } from "@mui/material";
import { forwardRef } from "react";
import { blue, grey } from "./Colours";
import { rem } from "polished";

interface LinkButtonProps {
  title: string;
}

export const LinkButton = forwardRef<HTMLElement, LinkButtonProps>(
  ({ title }, ref) => (
    <Button
      sx={{
        color: blue,
        fontWeight: "bold",
        fontSize: { xs: "0.8rem", md: "1.2rem" },
        width: { xs: rem(100), md: rem(140) },
        border: `${rem(2)} solid black`,
        borderRadius: 2,
        backgroundColor: "white",
        ml: 2,
        height: rem(40),
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: grey,
          borderColor: blue,
          color: "white",
        },
      }}
      onClick={() => {
        if (ref && typeof ref !== "function" && ref.current) {
          ref.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
    >
      {title}
    </Button>
  ),
);
