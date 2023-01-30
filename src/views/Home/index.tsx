import "./home.scss";
import BlockData from "src/components/BlockData";
import { Link } from "@material-ui/core";
//images
import CatLeftImage from "src/assets/images/home-cat_left.png";
import CatRightImage from "src/assets/images/home-cat_right.png";
import BgShineImage from "src/assets/images/bg-shine.png";
import HowItWorksImage from "src/assets/images/gnomeshroom.svg";
import OurInvestmentsImages from "src/assets/images/gnomefaucet.svg";
import OurValuesImages from "src/assets/images/happygnome.svg";
import { useTreasuryBalance } from "src/hooks/useTreasuryBalance";

function Home() {
    const [loading, treasuryBalance] = useTreasuryBalance();

    return (
        <div className="container home">
            <img className="shine" src={CatLeftImage} alt="" />
            <img className="shine shine-right" src={CatRightImage} alt="" />
            <img className="shine-mobile" src={BgShineImage} alt="" />
            <section className="home__promo">
                <h1 className="title">GnomeLand</h1>
                <div className="subtitle">
                    <p className="subtitle-item">Join the gang of gnomes lurking around Arbitrum before they completely take over, and make DeFi Great Again.</p>
                    <p className="subtitle-item">Our little tricksters know how to work together to acheive maximum capital efficiency, the gnome way.</p>
                </div>
                <Link className="button button-gradient" href="https://app.wonderland.money">
                    Enter Gnome App
                </Link>
            </section>
            <section className="blocks-data">
                <BlockData className="blocks-data__item" loading={loading} title={"250000%"} subTitle="Current Gnome APR" />
            </section>
            <section className="promo-item">
                <div style={{ width: "300px" }}>
                    <img src={HowItWorksImage} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>How It Works</h3>
                    <div className="promo-item__discription-sub">Buy Gnomes and put the little bastards to work for you, giving you a high APR.</div>

                    <Link className="button" href="how-works">
                        Read more
                    </Link>
                </div>
            </section>
            <section className="promo-item">
                <div style={{ width: "400px" }}>
                    <img src={OurInvestmentsImages} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>Our Strengths</h3>
                    <div className="promo-item__discription-sub">Our deep crypto expertise helps us identify and seize opportunities early on.</div>
                    <Link className="button" href="our-strengths">
                        Read more
                    </Link>
                </div>
            </section>
            <section className="promo-item">
                <div style={{ width: "330px" }}>
                    <img src={OurValuesImages} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>Our Investments</h3>
                    <div className="promo-item__discription-sub">
                        Our treasury invests into teams building new protocols, tokens and high return yield strategies across decentralized finance.
                    </div>
                    <Link className="button" href="our-investments">
                        Read more
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
