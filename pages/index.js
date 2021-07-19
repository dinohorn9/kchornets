import Head from "next/head";
import Image from "next/image";
import Events from "../components/events";
import uniformPic from "/public/images/uniforms.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>KC Hornets | Home</title>
        <meta
          name="keywords"
          content="kansas city, overland park, ks, 11u, AA, Baseball, Softball, 
          Blue Valley Rec"
        />
      </Head>
      <div className="container w-full float-left bg-yellow-400 gap-0 flex-wrap">
        <div className="sm:w-3/4 float-left bg-white p-4">
          <div className="border-r mb-4 border-l border-t border-b border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Tryouts last Saturday and this Tuesday
            </div>
            <p className="text-gray-700">
              Saturday tryouts went great. Thanks to all the kids and parents
              that made it out. We had a few kids that could not make it so we
              have private tryouts Tuesday. Since it is multiple kids, we
              welcome any new tryouts that want to participate.
              <br />
            </p>
            <p>
              <a
                href="https://www.lenexa.com/government/departments___divisions/parks___recreation/outdoor_recreation/parks/freedom_fields"
                target="new"
              >
                Freedom Field #4.
              </a>
              <br />
              W 83rd St, Lenexa, KS 66227
              <br />
              6-7:30pm
              <br />
            </p>
            <p>
              <b>Call/Text/Email:</b> 913.306.1393 / dinohorn9@gmail.com
            </p>
            <p>
              <b>Posted: </b>July 18th, 2021 @ 8:26pm
            </p>
          </div>

          <div className="border-r mb-4 border-l border-t border-b border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="text-gray-900 font-bold text-xl mb-2">
              7/17 Saturday 11U/AA Tryouts Today!
            </div>
            <p className="text-gray-700">
              <b className="text-red-500">Status:</b> Finally the weather is
              looking good. Just a reminder, from 12pm-2pm we will have tryouts
              are at{" "}
              <a
                href="https://www.lenexa.com/government/departments___divisions/parks___recreation/outdoor_recreation/parks/freedom_fields"
                target="new"
              >
                Freedom Field #3.
              </a>{" "}
              Please arrive by 11:45, it should be fun!
              <p className="text-gray-700">
                Fall Cost - Since we are an Independent Club, we do not have
                fees. We do try to find sponsors to help pay for custom player
                bags, team banner, baseballs and tournament fees (like we did in
                the spring). Parents would be responsible for Uniforms, Golden
                Glove league fees (around $170) and tournament fees(avg $50 per
                event).
              </p>
            </p>
            <p>
              <b>Contact Us:</b> dinohorn9@gmail.com
            </p>
            <p>
              <b>Call/Text:</b> 913.306.1393
            </p>
            <p>
              <b>Posted: </b>July 17th, 2021
            </p>
          </div>

          <div className="border-r mb-4 border-l border-t border-b border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="text-gray-900 font-bold text-xl mb-2">
              KC Hornets 11u AA BB Tryout Update
            </div>
            <p className="text-gray-700">
              <b className="text-red-500">Status:</b> We are NOT going to have
              tryouts this Tuesday, instead we will have tryouts this Saturday
              July 17th. Everyone is invited, please let me know if your going
              to be there.
              <br />
            </p>
            <p>
              <b>Call/Text/Email:</b> 913.306.1393 / dinohorn9@gmail.com
            </p>
            <p>
              <b>Posted: </b>July 13th, 2021
            </p>
          </div>

          <div
            className="border-r  border-l border-t border-b border-yellow-400
           bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 
            "
          >
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                KC Hornets 11u AA Baseball Fall Tryout Info
              </div>
              <p className="text-gray-700 text-base">
                <b>Dates:</b> July 10th and July 17th 2021
                <br />
                <b>Location:</b> Freedom Field #3 <br />
                <b>Time:</b> 12pm - 2pm
                <br />
                <b>Arrival:</b> 11:45am
              </p>
              <p>
                <b>Call/Text/Email:</b> 913.306.1393 / dinohorn9@gmail.com</p>
              <p>
                <b>Tryout Notes:</b> The team this fall will play about 10 games
                in the Blue Valley Rec Golden Glove 11u AA league. We will play
                in at least three 11u AA tournaments during September and
                October.
              </p>
              <p>
                <b>Fall Tournaments:</b>
                <br />
                September 11th-13th:
                <br />
                <span className="text-yellow-400 font-bold">
                  3&2 Sonic Blast
                </span>
                <br />
                September 25th-27th:
                <br />
                <span className="text-yellow-400 font-bold">
                  3&2 Stars and Stripes (Optional)
                </span>
                <br />
                October 2nd-4th:
                <br />
                <span className="text-yellow-400 font-bold">Monster Bash</span>
                <br />
                October 15th-18th:
                <br />
                <span className="text-yellow-400 font-bold">
                  3&2 October Fest
                </span>
                <br />
              </p>
              <Image src={uniformPic} alt="KC Hornets Uniforms" />
            </div>
          </div>
        </div>

        <div className="sm:w-1/4 float-right p-2">
          <Events />
        </div>
      </div>
    </>
  );
}
