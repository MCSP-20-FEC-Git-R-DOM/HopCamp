import { useState,useRef } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Current_campsite from './Current_campsite/Current_campsite.jsx'
import Available_sites from './Available_sites/Available_sites.jsx'
import Header from "./Header/Header.jsx";
import Ratings from "./Ratings/Ratings";
import Camping_spots from "./Camping_spots/Camping_spots";
import Photo_gallery from './Photo_gallery/Photo_gallery';
import Tent_site from './Tent_site/Tent_site';
import Camping_Location from './Camping_Location/Camping_Location.jsx';
import Host from './Host/Host';
import Camp_safety from './Camp_safety/Camp_safety';
import Campsite_info from './Campsite_info/Campsite_info';
import Safety_Partners from './Safety_Partners/Safety_Partners.jsx';
import ThingsNearby from './Things_Nearby/ThingsNearby.jsx';
import Tent_Site_Map from './Tent_site/Tent_site_map';

function App() {
    const popupCalenderEl = useRef(null);
    const handleClick = (event) => {
        const popUpCalender = popupCalenderEl.current;
        console.log(popUpCalender);
        if (popUpCalender && !popUpCalender.contains(event.target))
            if (popUpCalender.classList.contains("show"))
                popUpCalender.classList.toggle("show");
    };

    return (
        <>
            <Header />
            <div id="contentWrapper" onClick={handleClick}>
                <Current_campsite />
                <Photo_gallery />
                <Campsite_info />
                <Available_sites />
                <Tent_site />
                <Camping_Location />
                <Host />
                <Ratings />
                <h1>Things To Do Nearby (Dan)</h1>
                {/* <ThingsNearby /> */}
                <Camping_spots />
                <h1>Camp Safety (Dennis)</h1>
                <Safety_Partners />
                <Camp_safety />
                <h1>Footer (Chris)</h1>
            </div>
        </>
    );
}

export default App
