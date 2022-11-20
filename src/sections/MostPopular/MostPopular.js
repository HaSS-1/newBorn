import "./MostPopular.css"
import popular_01 from "../../assets/images/popular_01.jpg"
const MostPopular = () => {
    return (
        <div className="section-wrapper">
            <div className="section-header">
                <h4>Most Popular</h4>
            </div>
            <div className="most-popular-items">
                <div className="most-popular-item">
                    <div className="card-wrapper">
                        <img className="most-popular-item-img" src={popular_01} />
                        <div className="most-popular-content">
                            <h4 className="most-popular-item-title">
                                Movies_API <br />
                                <span>Movies Web App</span>
                            </h4>
                            <ul>
                                <li><span>1.0</span></li>
                                <li><span>2022</span></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="most-popular-item">
                    <div className="card-wrapper">
                        <img className="most-popular-item-img" src={popular_01} />
                        <div className="most-popular-content">
                            <h4 className="most-popular-item-title">
                                Movies_API <br />
                                <span>Movies Web App</span>
                            </h4>
                            <ul>
                                <li><span>1.0</span></li>
                                <li><span>2022</span></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="most-popular-item">
                    <div className="card-wrapper">
                        <img className="most-popular-item-img" src={popular_01} />
                        <div className="most-popular-content">
                            <h4 className="most-popular-item-title">
                                Movies_API <br />
                                <span>Movies Web App</span>
                            </h4>
                            <ul>
                                <li><span>1.0</span></li>
                                <li><span>2022</span></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="most-popular-item">
                    <div className="card-wrapper">
                        <img className="most-popular-item-img" src={popular_01} />
                        <div className="most-popular-content">
                            <h4 className="most-popular-item-title">
                                Movies_API <br />
                                <span>Movies Web App</span>
                            </h4>
                            <ul>
                                <li><span>1.0</span></li>
                                <li><span>2022</span></li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MostPopular