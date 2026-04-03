import SpotlightCard from "../SpotlightCard";
import Card from "../twcss/PrajapatiCard";
import {
    Happy, HoursOfSupport, delivered, projects
} from '../path/svgPath';
const Stats = () => {
    // STATS
    const cardStats = [
        { title: "Happy Clients", color: "bg-surface", svg: Happy },
        { title: "Projects", color: "bg-red", svg: HoursOfSupport },
        { title: "Hours Of Support", color: "bg-green", svg: delivered },
        { title: "Projects Delivered", color: "bg-pink", svg: projects },
    ]
    return (
        <>
            {cardStats.map((card, index) => (
                <Card
                    key={index}
                    style='size-[300px] shadow-[12px_17px_51px_rgba(0,0,0,0.22)]'
                    title={card.title}
                    svg={card.svg}
                    color={card.color}
                />
            ))}
        </>
    )
}
export default Stats;