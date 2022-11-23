import './ProjectsLibrary.css'
import { ProjectsLibraryCard, SectionWrapper, SectionHeader } from '../../components/index'

import ProjectsLibraryData from '../../Data/ProjectLibraryData'

const ProjectsLibrary = () => {
    const cards = ProjectsLibraryData.map(card => {
        return <ProjectsLibraryCard key={card.id} image={card.image} title={card.title} technology={card.technology} date={card.date} version={card.version} />
    })

    return (
        <>
            <SectionWrapper>
                <SectionHeader>Projects Library</SectionHeader>
                <div className='project-library-cards'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default ProjectsLibrary
