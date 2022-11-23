import "./MostPopular.css"
import { Card, SectionWrapper, SectionHeader } from "../../components/index"
import MostPopularData from '../../Data/MostPopularData'


const MostPopular = () => {
    const cards = MostPopularData.map(card => {
        return <Card key={card.id} image={card.image} title={card.title} technology={card.technology} date={card.date} version={card.version} />

    })

    return (
        <>
            <SectionWrapper>
                <SectionHeader>Most Popular</SectionHeader>
                <div className="most-popular-items">
                    {cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default MostPopular