import Head from "next/head";
import Image from "next/image";
import uniformPic from '/public/images/uniforms.jpg'

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
      <div className="container w-full">
        <div className="w-full p-4 ">
          {/* <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: "url('/images/card-left.jpg')" }}
            title="Woman holding a mug"
          ></div> */}
          <div className="border-r border-yellow-400 border-l border-t border-b border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              {/* <p className="text-sm text-red-600 flex items-center">
                <svg
                  className="fill-current text-red-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
              <div className="text-gray-900 font-bold text-xl mb-2">
                KC Hornet 11u AA BB Tryout Update
              </div>
              <p className="text-gray-700 text-base">
                <b className="text-red-500">Today's Status:</b> We are rained out this afternoon. This first tryout has been rescheduled to Tuesday, July 13th at 6-8pm.  Please contact me 
                if you can make this tryout. The forecast for the 17th doesn't look good either.  Thanks!
                <br />
              </p>
              <p>
                <b>Contact Us:</b> dinohorn9@gmail.com
              </p>
              <p>
                <b>Call/Text:</b> 913.306.1393
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-yellow-900 leading-none">Dino Horn</p>
                <p className="text-yellow-600">July 8th</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 ">
          {/* <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: "url('/images/card-left.jpg')" }}
            title="Woman holding a mug"
          ></div> */}
          <div className="border-r border-yellow-400 border-l border-t border-b border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              {/* <p className="text-sm text-red-600 flex items-center">
                <svg
                  className="fill-current text-red-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
              <div className="text-gray-900 font-bold text-xl mb-2">
                KC Hornet 11u AA Baseball Fall Tryout Info
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
        <div className="w-full p-4">
          <div className="border-r border-yellow-400 border-l border-t border-b border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              {/* <p className="text-sm text-red-600 flex items-center">
                <svg
                  className="fill-current text-red-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
              <div className="text-gray-900 font-bold text-xl mb-2">
                Moved kchornets.com
              </div>

              <p>
                This week we moved kchornets.com to a new server with new
                software, so we were down a few days. DNS proprogation and
                content formatting takes a little time.
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-yellow-900 leading-none">Dino Horn</p>
                <p className="text-yellow-600">July 8th</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
