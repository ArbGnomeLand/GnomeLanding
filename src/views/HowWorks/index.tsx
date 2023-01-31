import "./how-works.scss";
import Description from "src/components/Description";
import DescWorkImage from "src/assets/images/desc-work.png";

const CARDS = [
    {
        title: "Purchase wMEME",
        text: "To join the DAO, get some wMEME here <a href='https://kyberswap.com/swap/avalanche/usdc-to-wmemo' target='_blank'>Camelot</a> on the Arbitrum Blockchain.",
    },
    {
        title: "Revenue Stream",
        text: "To benefit from the DAO’s treasury performance, stake your wMEME in the revenue share staking contract. wMEME holders will periodically receive token streams.",
    },
    {
        title: "DAO Governance",
        text: "wMEME holders can participate in GnomeLand DAO governance. Active participants can voice their opinion and vote on capital allocations and GnomeLand Improvement Proposals.",
    },
];

function HowWorks() {
    return (
        <div className="how-work container">
            <Description
                title="How Gnomeland works?"
                textList={[
                    "GnomeLand is a decentralized autonomous organization of gnomes, living through our governance token, Gnomes.",
                    "To participate in the Gnomes DAO, buy wMEME tokens. These tokens can be used to vote on protocol proposals and direct the future of the project.",
                    "They can also be staked in a revenue-sharing contract to benefit from the Gnome Treasury's performance.",
                ]}
                image={DescWorkImage}
            />
            {CARDS.map(({ title, text }, index) => (
                <div className="card">
                    <p className="card-number">{index + 1}</p>
                    <p className="card-title">{title}</p>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            ))}
        </div>
    );
}

export default HowWorks;
