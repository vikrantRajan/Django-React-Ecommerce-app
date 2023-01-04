import uuid from 'react-uuid';
import '../styles/rating.scss';

const calculateProductRating = (val, col, txt) => {
    let classnames = {}

    for (let i = 1; i <= Math.round(val); i++) {
        if (val >= i) {
            classnames[i] = {cl: 'fas fa-star', co: col } 
        } 
        else if (val >= i - 0.5) {
            classnames[i-0.5] = {cl: 'fas fa-star-half-alt', co: col } 
        } else {
            classnames[i-1] = {cl: 'fas fa-star', co: col }
        }
    }
    
    let ratingStars = []
    for (const [key, value] of Object.entries(classnames)) {
        ratingStars.push(<i style={{color: value.co}} className={value.cl} key={`${key}${uuid()}`}></i>)

    }

    ratingStars.push(<p className='reviews' key={uuid()}>{txt && txt}</p>)
    return ratingStars
}


const Rating = ({value, text, color}) => {

    const stars = calculateProductRating(value, color, text)
    return (
    <div className="rating">
        <span>
        {stars.map(item => (item))}
        </span>
    </div>
    )
}

export default Rating
