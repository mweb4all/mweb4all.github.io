import { Theme, useMediaQuery } from "@mui/material";

export const useIsDesktop = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

export const useIsTablet = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

export const useIsTabletDown = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

export const useIsMobileDown = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

export const useIsCustomDown = (px: number) =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down(px));

export const useIsMobile = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
