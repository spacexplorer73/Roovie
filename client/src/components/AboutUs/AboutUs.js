import React from 'react';

import { Paper, Typography } from "@material-ui/core";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot,  } from "@material-ui/lab";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import UpdateIcon from '@material-ui/icons/Update';
import { useStyles } from "./styles";

/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
    const classes = useStyles();

    return(
        <Paper className={classes.container} elevation={6}>
            <div className={classes.heading}>About Us</div>
            <div className={classes.timeline}>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{ color:'#333', background: 'green' }}>
                                <PlayArrowIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={6} className={classes.timelinePaper}>
                                <Typography className={classes.timelineHeading} variant="h6" component="h1">
                                    June, 2021
                                </Typography>
                                <Typography className={classes.timelineDetail}>Start of the Journey</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={6} className={classes.timelinePaper}>
                                <Typography className={classes.timelineHeading} variant="h6" component="h1">
                                    July, 2021
                                </Typography>
                                <Typography className={classes.timelineDetail}>Authentication with JWT</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{ color:'#333', background: 'green' }}>
                                <ThumbUpAltIcon />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={6} className={classes.timelinePaper}>
                                <Typography className={classes.timelineHeading} variant="h6" component="h1">
                                    August, 2021
                                </Typography>
                                <Typography className={classes.timelineDetail}>Some basic Functionalities</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <UpdateIcon />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={6} className={classes.timelinePaper}>
                                <Typography className={classes.timelineHeading} variant="h6" component="h1">
                                    Future Endeavours
                                </Typography>
                                <ul type="disc" className={classes.timelineDetail}>
                                    <Typography>
                                        <li>Admin Dashboard & Functionality</li>
                                    </Typography>
                                    <Typography>
                                        <li>Improving overall speed</li>
                                    </Typography>
                                </ul>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </Paper>
    );
}

export default AboutUs;