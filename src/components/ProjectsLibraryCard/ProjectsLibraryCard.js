import './ProjectsLibraryCard.css'
import { SecondaryButton } from '../../components/index'
const ProjectsLibraryCard = (props) => {
    return (
        <div className='project-library-card'>
            <ul>
                <li><img className='project-library-card-img' src={props.image} alt='project thumbnail' /></li>
                <li><h4>{props.title}</h4><span>{props.technology}</span></li>
                <li><h4>Version</h4><span>{props.version}</span></li>
                <li><h4>Version</h4><span>{props.version}</span></li>
                <li><h4>Lang</h4><span>{props.technology}</span></li>
                <SecondaryButton>Demo</SecondaryButton>

            </ul>
        </div>
    )
}

export default ProjectsLibraryCard
