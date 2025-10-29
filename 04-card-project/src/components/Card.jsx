import { Bookmark } from 'lucide-react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <img src={props.logo} alt={props.company} />
                <button>Save <Bookmark/></button>
            </div>
            <div className="center">
                <h3>{props.company} <span>{props.posted}</span></h3>
                <h2>{props.title}</h2>
                <div>
                    <h4>{props.tags[0]}</h4>
                    <h4>{props.tags[1]}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    );
}

export default Card;