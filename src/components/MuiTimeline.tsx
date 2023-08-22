import React from 'react';
import { Timeline, TimelineConnector,TimelineSeparator, TimelineItem, TimelineContent, TimelineDot,TimelineOppositeContent } from '@mui/lab';

const MuiTimeline = () => {
  return (
    <Timeline position='alternate'>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>9:30am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary'/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant='outlined'/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  )
};

export default MuiTimeline;