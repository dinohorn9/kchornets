import Head from "next/head";
import Image from "next/image";
import uniformPic from "/public/images/uniforms.jpg";
import hornetMascot from "/public/images/hornets.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>KC Hornets | Home</title>
        <meta
          name="keywords"
          content="kansas city, overland park, ks, 11u, AA, Baseball, Softball, Blue Valley Rec"
        />
      </Head>
      <div className="container w-full float-left bg-yellow-400">
        <div className="w-3/4 float-left bg-gray-200 p-4">
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
              <b>Contact Us:</b> dinohorn9@gmail.com
            </p>
            <p>
              <b>Call/Text:</b> 913.306.1393
            </p>

            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-yellow-900 leading-none">Dino Horn</p>
                <p className="text-yellow-600">July 12th</p>
              </div>
            </div>
          </div>

          <div className="border-r  border-l border-t border-b border-yellow-400
           bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 
            ">
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
                <b>Contact Us:</b> dinohorn9@gmail.com
              </p>
              <p>
                <b>Call/Text:</b> 913.306.1393
              </p>
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
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-yellow-900 leading-none">Dino Horn</p>
                <p className="text-yellow-600">July 8th</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 float-right p-2">
          <div
            className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           flex flex-col justify-between leading-normal"
          >
            <div>
              <Image src={hornetMascot} alt="Hornets"></Image>
            </div>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Upcoming Schedule
            </div>
            <div className="text-gray-900 text-sm mb-2 ">
              KC Hornet BB 11U Fall Tryout
            </div>
            <div>July 17th, 2021</div>
          </div>
        </div>
      </div>
    </>
  );
}
