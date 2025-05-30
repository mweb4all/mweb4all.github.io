import { Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { grey } from "./Colours";

export interface SocialMediaProps {
  socialLinks: Record<"facebook" | "twitter" | "instagram", string>;
}

export const SocialMedia = ({ socialLinks }: SocialMediaProps) => {
  return (
    <Stack
      flexDirection="row"
      sx={{ backgroundColor: "white", border: `3px solid ${grey}` }}
    >
      {socialLinks.facebook && (
        <IconButton color="inherit" href={socialLinks.facebook} target="_blank">
          <FacebookIcon />
        </IconButton>
      )}
      {socialLinks.twitter && (
        <IconButton color="inherit" href={socialLinks.twitter} target="_blank">
          <TwitterIcon />
        </IconButton>
      )}
      {socialLinks.instagram && (
        <IconButton
          color="inherit"
          href={socialLinks.instagram}
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
      )}
    </Stack>
  );
};
