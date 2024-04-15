import React from 'react';
import styled from 'styled-components';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import { Container, Wrapper, Title, Desc, TimelineSection } from './EducationStyle';


const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    Aqui estão alguns detalhes sobre minha formação acadêmica.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index