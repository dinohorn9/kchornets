import Image from "next/image";
import hornetMascot from "/public/images/hornets.png";
function Events() {
  return (
    <div>
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
      </div>

      <div
        className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           mt-4"
      >
        <div className="text-gray-900 text-sm mb-2">
          <strong>KC Hornet BB 11U Fall Tryout</strong>
        </div>
        <div className="text-gray-900 text-sm mb-2 ">
          <strong>Location: </strong>Freedom Field #3
          <br />
          W 83rd St, Lenexa, KS 66227
          <br />
          <strong>Time: </strong>12-2pm
          <br />
          <strong>Arrival: </strong>11:45am
          <br />
        </div>
      </div>

      <div
        className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           mt-4"
      >
        <div className="text-gray-900 text-sm mb-2">
          <strong>11u BB Fall Registration</strong>
        </div>
        <div className="text-gray-900 text-sm mb-2 ">
          <strong>Due: </strong>July 28th, 2021
        </div>
      </div>

      <div
        className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           mt-4"
      >
        <div className="text-gray-900 text-sm mb-2">
          <strong>3rd Grade SB Fall Registration</strong>
        </div>
        <div className="text-gray-900 text-sm mb-2 ">
          <strong>Due: </strong>July 28th, 2021
        </div>
      </div>

      <div
        className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           mt-4"
      >
        <div className="text-gray-900 text-sm mb-2">
          <strong>11u Uniform Order Due Date</strong>
        </div>
        <div className="text-gray-900 text-sm mb-2 ">
          <strong>Due: </strong>July 24th, 2021
        </div>
      </div>

      <div
        className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           mt-4"
      >
        <div className="text-gray-900 text-sm mb-2">
          <strong>3rd Grade SB Uniform Order Due Date</strong>
        </div>
        <div className="text-gray-900 text-sm mb-2 ">
          <strong>Due: </strong>July 24th, 2021
        </div>
      </div>

      <div
        className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           mt-4"
      >
        <div className="text-gray-900 text-sm mb-2">
          <strong>
            11u BB Tournament
            <br />
            3&2 Sonic Blast
          </strong>
        </div>
        <div className="text-gray-900 text-sm mb-2 ">
          <strong>Due: </strong>Sept 25th-27th, 2021
        </div>
      </div>

      <div
        className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           mt-4"
      >
        <div className="text-gray-900 text-sm mb-2">
          <strong>
            11u BB Tournament
            <br />
            Monster Bash
          </strong>
        </div>
        <div className="text-gray-900 text-sm mb-2 ">
          <strong>Due: </strong>Oct 2nd-4th, 2021
        </div>
      </div>

      <div
        className="border-r border-l border-t border-b
           border-yellow-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
           mt-4"
      >
        <div className="text-gray-900 text-sm mb-2">
          <strong>
            11u BB Tournament
            <br />
            3&2 October Fest
          </strong>
        </div>
        <div className="text-gray-900 text-sm mb-2 ">
          <strong>Due: </strong>Oct 15th-18th, 2021
        </div>
      </div>
    </div>
  );
}

export default Events;
