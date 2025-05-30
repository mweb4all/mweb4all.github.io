import { Box, Stack, SxProps } from "@mui/material"
import { useIsDesktop } from "../../hooks/breakpoint";
import { Faq, FaqProps } from "./Faq";
import { forwardRef, useMemo } from "react";

interface FaqsProps {
    sx?: SxProps;
    faqs: Array<FaqProps>
}

export const Faqs = forwardRef<HTMLElement, FaqsProps>(({sx, faqs}, ref) => {

    const isDesktop = useIsDesktop();
    const faqsList1 = useMemo(() =>
        faqs.map((faq, index) => index % 2 ? faq : null).filter((f) => Boolean(f)) as Array<FaqProps>
    , [faqs]);
    const faqsList2 = useMemo(() =>
        faqs.map((faq, index) => (index+1) % 2 ? faq : null).filter((f) => Boolean(f)) as Array<FaqProps>
    , [faqs]);

    return (
        <Box
            ref={ref}
            sx={{...sx, display: "grid", gridTemplateColumns: isDesktop ? "1fr 1fr": "1fr", gap: 2}}
        >
            {isDesktop ? 
                <>
                    <Stack gap={2}>
                        {faqsList2.map((props, index) => <Box key={index}><Faq {...props}/></Box>)}
                    </Stack>
                    <Stack gap={2}>
                        {faqsList1.map((props, index) => <Box key={index}><Faq {...props}/></Box>)}
                    </Stack>
                </> :
                faqs.map((props, index) => <Box key={index}><Faq {...props}/></Box>)
            }
        </Box>
    )
});