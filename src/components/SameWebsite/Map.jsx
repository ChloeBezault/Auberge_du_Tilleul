import { NavLink } from "react-router-dom";


export default function Map() {

    return (

    <section className="map">
        <div className="responsive-map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.7105436814313!2d3.1878081154352857!3d50.651066680770484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3280e9b594235%3A0x95ad09fecd26f6d9!2sAuberge%20du%20Tilleul%20Lille!5e0!3m2!1spt-PT!2spt!4v1651519302311!5m2!1spt-PT!2spt" 
            width="1000" 
            height="450" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            >
            </iframe>
        </div>
    </section>

    );
}