import Card from './Card';
import data from '../data/data.json';
const Cards = () => {
    return(
        <div className="cards">
       {data.map((item, index)=>{
                return(
                    <Card
                        key={index}
                        name={item.name}
                        designation={item.designation}
                        website={item.website}
                        image={item.image}
                    />
                );
            })}
      </div>
    );
}

export default Cards
