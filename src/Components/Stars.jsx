import { FaStar, FaRegStar } from "react-icons/fa";

// Creazione del,le stelle
export default function CreateStars(vote_average) {
    let stars = [];
    let maxStars = 5;
    const star = Math.ceil(vote_average / 2);
    for (let i = 0; i <= maxStars; i++) {
        if (i < star) {
            stars.push(<FaStar key={i} style={{ color: "yellow" }} />);
        } else {
            stars.push(<FaRegStar key={i} />);
        }
    }
    return stars;
}