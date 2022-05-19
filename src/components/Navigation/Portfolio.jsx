import { NavLink } from "react-router-dom";


function Portfolio() {

    const GalleryLieux = [
        {src:"/images/portfolio/01.jpg"},
        {src:"/images/portfolio/02.jpg"},
        {src:"/images/portfolio/03.jpg"},
        {src:"/images/portfolio/04.jpg"},
        {src:"/images/portfolio/05.jpg"},
        {src:"/images/portfolio/06.jpg"},
        {src:"/images/portfolio/07.jpg"},
        {src:"/images/portfolio/08.jpg"},
        {src:"/images/portfolio/09.jpg"},
        {src:"/images/portfolio/10.jpg"},
        {src:"/images/portfolio/11.jpg"},
        {src:"/images/portfolio/12.jpg"},
        {src:"/images/portfolio/13.jpg"},
        {src:"/images/portfolio/14.jpg"},
        {src:"/images/portfolio/15.jpg"},
        {src:"/images/portfolio/16.jpg"},
        {src:"/images/portfolio/17.jpg"},
        {src:"/images/portfolio/18.jpg"},
        {src:"/images/portfolio/19.jpg"},
        {src:"/images/portfolio/20.jpg"},
        {src:"/images/portfolio/21.jpg"},
        {src:"/images/portfolio/22.jpg"},
        {src:"/images/portfolio/23.jpg"},
        {src:"/images/portfolio/24.jpg"},
        {src:"/images/portfolio/25.jpg"},
        {src:"/images/portfolio/26.jpg"},
        {src:"/images/portfolio/27.jpg"},
        {src:"/images/portfolio/28.jpg"},
        {src:"/images/portfolio/29.jpg"},
    ]

    return (
        <main className="BodyPortfolio">
            <section className="PortfolioWelcome">
                <h2>Gastronomie</h2>
                <h3>Adepte de créativité et de saveurs, pour rendre vos réceptions toujours plus belles</h3>
            </section>
            <section className="Portfolio">

                <div className="Portfolio">
                    { GalleryLieux.map((item, i) => {

                    return (
                        <div key={i} className="ItemPortfolio">
                            <img src={item.src} alt="ImagesGastronomie"/>
                        </div> 
                    )}
                    )}
                   
                </div>    
            </section>
        </main>

    );
}

export default Portfolio;