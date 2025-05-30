import { Typography, SxProps, Theme, Stack, styled } from "@mui/material";
import { rem } from "polished";
import { NavLink } from "react-router-dom";

interface CopyrightProps {
  websiteName?: string;
  sx?: SxProps<Theme>;
}

export const Copyright = ({ websiteName = "GoWebly", sx }: CopyrightProps) => (
  <Stack
    alignItems={"center"}
    justifyContent="center"
    sx={{
      minHeight: rem(50),
      lineHeight: rem(100),
      backgroundColor: "black",
      ...sx,
    }}
  >
    <Typography
      sx={{ color: "White" }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "}
      <StyledNavLink to={"/"}>{websiteName}</StyledNavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  </Stack>
);

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: "white",
  textDecoration: "underline",
}));
