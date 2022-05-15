import { NavLink } from "react-router-dom";


export default function NosSalons() {
    return (
        <main>



            <section className="MapVirtualHalls">
                <div className="respMapVirtual">
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1652610557038!6m8!1m7!1sCAoSLEFGMVFpcE1PNFg5clhUQk5jNjZGNHVpZHVpUTRYMHNKZ3R5cm04QWdJRk1q!2m2!1d50.65115318063766!2d3.19006460739115!3f88.91!4f-0.9500000000000028!5f0.4000000000000002" width="1000"
                    height="500" 
                    allowfullscreen="" 
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    title="map-virtualVisit"
                >
                </iframe>
                </div>
            </section>
           
        </main>

    );
}