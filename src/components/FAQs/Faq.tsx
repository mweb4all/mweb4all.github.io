import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { rem } from "polished";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FaqProps {
    question: string;
    answer: React.ReactNode;
}

export const Faq = ({question, answer}: FaqProps) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <Accordion
            expanded={isExpanded}
            onChange={() => setIsExpanded(!isExpanded)}
            sx={{
                boxShadow: 'none',
                border: `${rem(1)} solid black`,
                borderRadius: rem(4)
            }}
            >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                    minHeight: rem(48),
                    '&.Mui-expanded': { margin: 0, minHeight: rem(48) },
                }}
            >
                <Typography variant="body2" sx={{ flexShrink: 0, width: "90%"}} fontWeight={"bold"}>
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                    {answer}
            </AccordionDetails>
        </Accordion>
    );
}