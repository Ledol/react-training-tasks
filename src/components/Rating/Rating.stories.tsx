import {Rating, RatingValueType} from "./Rating";
import {useState} from "react";

export default {
    title: 'Components/Rating stories',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} callBack={()=>{}}/>
export const Rating1 = () => <Rating value={1} callBack={()=>{}}/>
export const Rating2 = () => <Rating value={2} callBack={()=>{}}/>
export const Rating3 = () => <Rating value={3} callBack={()=>{}}/>
export const Rating4 = () => <Rating value={4} callBack={()=>{}}/>
export const Rating5 = () => <Rating value={5} callBack={()=>{}}/>
export const RatingChange = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return(
        <Rating value={rating} callBack={setRating}/>
    )
}