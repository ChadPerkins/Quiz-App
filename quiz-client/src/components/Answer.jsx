import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CardMedia,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import React, { useState } from "react";
import { BASE_URL } from "../api";
import { green, grey, red } from "@mui/material/colors";

export default function Answer({ qnAnswers }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const markCorrectOrNot = (qna, index) => {
        if ([qna.answer, qna.selected].includes(index)) {
            return {
                sx: { color: qna.answer == index ? green[500] : red[500] },
            };
        }
    };

    return (
        <Box sx={{ mt: 5, width: "100%", maxWidth: 640, mx: "auto" }}>
            {qnAnswers.map((item, j) => (
                <Accordion
                    disableGutters
                    key={j}
                    expanded={expanded === j}
                    onChange={handleChange(j)}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandCircleDownIcon
                                sx={{
                                    color:
                                        item.answer == item.selected
                                            ? green[500]
                                            : red[500],
                                }}
                            />
                        }
                    >
                        <Typography sx={{ width: "90%", flexShrink: 0 }}>
                            {item.qnInWords}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor: grey[900] }}>
                        {item.imageName ? (
                            <CardMedia
                                component="img"
                                image={BASE_URL + "images/" + item.imageName}
                                sx={{ m: "10px auto", width: "auto" }}
                            />
                        ) : null}
                        <List>
                            {item.options.map((x, i) => (
                                <ListItem key={i}>
                                    <Typography {...markCorrectOrNot(item, i)}>
                                        <b>
                                            {"(" +
                                                String.fromCharCode(65 + i) +
                                                ") "}
                                        </b>
                                        {x}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
