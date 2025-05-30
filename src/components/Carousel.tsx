import { useState, useEffect, useRef } from "react";
import { Box, SxProps } from "@mui/material";

export interface CarouselProps {
  carouselImages: Array<string>;
  indexToStart?: number;
  offset?: number;
  sx?: SxProps;
}

const time = 6000;

export const Carousel = ({
  carouselImages,
  indexToStart = 0,
  offset = 0,
  sx,
}: CarouselProps) => {
  const [index, setIndex] = useState(indexToStart);
  const items = carouselImages;
  const trackRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, time);
      return () => clearInterval(interval);
    }, offset); // Delay start by 3000ms (3 seconds)
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (index >= items.length) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setIndex((prevIndex) => prevIndex - items.length);
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = "transform 1s ease-in-out";
          }
        }, 50);
      }, 1000);
    }
  }, [index, items.length]);

  return (
    <Box sx={{ overflow: "hidden", width: "300px", ...sx }}>
      <Box
        ref={trackRef}
        sx={{
          display: "flex",
          transition: "transform 1s ease-in-out",
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {items.concat(items).map((item, i) => (
          <Box
            key={i}
            sx={{
              minWidth: "300px",
              width: "300px",
              height: "200px",
              backgroundImage: `url(${item})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};
