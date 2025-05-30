import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Carousel, CarouselProps } from "./Carousel";

interface TrioCarouselProps extends CarouselProps {}

export const TrioCarousel = ({ carouselImages }: TrioCarouselProps) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isTablet ? (
        <Carousel carouselImages={carouselImages} indexToStart={0} /> //carouselImages={carouselImages}/>
      ) : (
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          <Carousel
            sx={{ gridArea: "1/1/2/2" }}
            carouselImages={carouselImages}
            indexToStart={0}
            offset={1000}
          />
          <Carousel
            sx={{ gridArea: "2/2/3/3" }}
            carouselImages={carouselImages}
            indexToStart={1}
            offset={4500}
          />
          <Carousel
            sx={{ gridArea: "1/3/2/4" }}
            carouselImages={carouselImages}
            indexToStart={2}
            offset={3000}
          />
        </Box>
      )}
    </>
  );
};
