import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
  Trabalhei em uma variedade de projetos, abrangendo diversas tecnologias e áreas. Aqui estão alguns dos meus projetos destacados.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'FrontEnd' ?
            <ToggleButton active value="FrontEnd" onClick={() => setToggle('FrontEnd')}>FrontEnd</ToggleButton>
            :
            <ToggleButton value="FrontEnd" onClick={() => setToggle('FrontEnd')}>FrontEnd</ToggleButton>
          }
          <Divider />
          {toggle === 'BackEnd' ?
            <ToggleButton active value="BackEnd" onClick={() => setToggle('BackEnd')}>BackEnd</ToggleButton>
            :
            <ToggleButton value="BackEnd" onClick={() => setToggle('BackEnd')}>BackEnd</ToggleButton>
          }
          <Divider />
          {toggle === 'Full Stack' ?
            <ToggleButton active value="Full Stack" onClick={() => setToggle('Full Stack')}>Full Stack</ToggleButton>
            :
            <ToggleButton value="Full Stack" onClick={() => setToggle('Full Stack')}>Full Stack</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects