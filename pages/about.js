import Head from "next/head";
import Events from "../components/events";
import Image from "next/image";
import Team from "../public/images/about-team.jpg";
import Softball from "../public/images/team-softball.jpg";
function about() {
  return (
    <>
      <Head>
        <title>KC Hornets | About</title>
        <meta
          name="keywords"
          content="about, competitive, independent club team"
        />
      </Head>
      <div className="container w-full float-left gap-0 flex-wrap">
        <div className="sm:w-3/4 float-left bg-white p-4">
          <h1>About</h1>
          <div>
            <p>
              <Image src={Team} alt="10U Team"></Image>
            </p>
            <p>
              The KC Hornets is an Independent Club Team that fields one
              competitive baseball team (11u AA) and one rec softball team (3rd
              Grade). Both teams will participate in league play at Blue Valley
              Rec league and the boys team also plays several tournaments.
            </p>
            <p>
              <strong>11u AA Baseball Team</strong>
              <br />
              Fall 2021 League: Golden Glove League (Highest AA Division)
              <br />
              Fall 2021 Tournaments: 3 - 4 Events
            </p>
            <p>
              <strong>3rd Grade Softball Team</strong>
              <br />
              Fall 2021 League: Blue Valley Rec 3rd Grade
              <br />
              Note: Machine Pitch, next Spring/Summer half the games are kid
              pitch
            </p>

            <p>
              Being an Independent Club Team; means there is no membership fees.
              The team splits the cost for Indoor Training, Outdoor Field
              Rentals, Tournament Fees, League Fees and some equipment like
              baseballs. The parent is responsible for paying the cost of the
              uniform, apparel and bags. Our accounting pro is Becky Hawkins,
              she tracks all finances / orders; which are transparent.
            </p>
            <p>
              <Image src={Softball} alt="3rd Grade Team"></Image>
            </p>
          </div>
        </div>
        <div className="sm:w-1/4 float-right p-2 bg-yellow-400 ">
          <Events />
        </div>
      </div>
    </>
  );
}

export default about;
