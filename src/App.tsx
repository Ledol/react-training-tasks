import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [on, setOn] = useState(false)
    const items = [
        {title: "Dima", value: 1 },
        {title: "Kate", value: 2 },
        {title: "Vlad", value: 3 },
        {title: "Nikita", value: 4 },
    ]
    const itemsForSelect = [
        {title: "Minsk", value: 1 },
        {title: "Moscow", value: 2 },
        {title: "Kiev", value: 3 },
    ]



    const accordionOnClickItem = (value: number)=>{
        alert(`user with ID ${value} should be happy`)
    }

    const [parentValue, setParentValue] = useState<string | undefined>('2')

    return (
        <div className="App">
            {/*<UncontrolledAccordion titleValue={'Menu'}/>
            <OnOff status={on} callBack={setOn}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} callBack={setRatingValue}/>*/}
            <Accordion titleValue={"Menu"}
                       collapsed={collapsed}
                       callBack={() => setCollapsed(!collapsed)}
                       items={items}
                       onClick={accordionOnClickItem}/>

            {/*<Select value={parentValue} items={itemsForSelect} onClick={setParentValue}/>*/}

        </div>
    );
}

export default App;
