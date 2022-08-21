import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [on, setOn] = useState(false)


    return (
        <div className="App">
            <OnOff status={on} callBack={setOn}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} callBack={setRatingValue}/>
            <Accordion titleValue={"Menu"}
                       collapsed={collapsed}
                       callBack={() => setCollapsed(!collapsed)}/>

        </div>
    );
}

export default App;
