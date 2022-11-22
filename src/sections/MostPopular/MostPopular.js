import "./MostPopular.css"

import popular_01 from "../../assets/images/popular_01.jpg"
import popular_02 from "../../assets/images/popular_02.jpg"
import popular_03 from "../../assets/images/popular_03.jpg"
import popular_04 from "../../assets/images/popular_04.jpg"

import { Card, SectionWrapper, SectionHeader } from "../../components/index"



const MostPopular = () => {
    return (

        <>
            <SectionWrapper>
                <SectionHeader>one Most Popular</SectionHeader>
                <div className="most-popular-items">

                    <Card image={popular_01} title="Project 1" technology="JavaScript" date="2022" version="0.0.1" />
                    <Card image={popular_02} title="Project 2" technology="Ract" date="2022" version="0.1.1" />
                    <Card image={popular_03} title="Project 3" technology="Laravel" date="2022" version="0.1" />
                    <Card image={popular_04} title="Project 4" technology="Bootstrap" date="2021" version="0.2.1" />

                    <Card image={popular_04} title="Project 1" technology="JavaScript" date="2022" version="0.0.1" />
                    <Card image={popular_03} title="Project 2" technology="Ract" date="2022" version="0.1.1" />
                    <Card image={popular_02} title="Project 3" technology="Laravel" date="2022" version="0.1" />
                    <Card image={popular_01} title="Project 4" technology="Bootstrap" date="2021" version="0.2.1" />





                </div>
            </SectionWrapper>

        </>
    )
}

export default MostPopular