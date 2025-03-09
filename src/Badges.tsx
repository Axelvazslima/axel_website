import badgesData from "../data/data.json"
import SubPagesComponent from "./components/SubPagesComponent";

function BadgeComponent() {
    const badges = badgesData.badges.map((badge) => badge);
    return (
        <SubPagesComponent h2="Badges" h3="Badges I have earned from studies" p="Click on its card to view them." badges={badges}/>
    )
}

export default BadgeComponent;