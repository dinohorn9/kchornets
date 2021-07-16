import Head from "next/head";
import Events from "../components/events";
function development() {
  return (
    <>
      <Head>
        <title>KC Hornets | Player Development</title>
        <meta name="keywords" content="player development" />
      </Head>
      <div className="container w-full float-left gap-0 flex-wrap">
        <div className="sm:w-3/4 float-left bg-white p-4">
          <h1>Development</h1>
          <p>
            <strong className="text-lg">Baseball Overview</strong>
            <p>
              We look for a real commitment from the player and parent. Our goal
              is to develop these kids into an AAA competitive team.
            </p>
            <p>
              <strong>Teaching Concepts</strong>
            </p>
            Fundamentals and progression drills are primary focus at practice.
            Before hitting ground balls to a player, we have to first teach them
            the basic fundamentals of fielding a ball and the fundamentals of
            throwing a ball. The same goes for pitching… It wouldn’t make sense
            to critique or try to fix a pitcher’s mechanics if they don’t
            understand how throwing mechanics works. We really want them to
            understand not just “How”, but the science behind the “Why”. E.g.
            How does the chain of kinetic energy start in your back foot and
            work it’s way up through the body and out to the ball or bat? E.g.
            What is the proper arm path? Breaking Down to Build Up In January,
            we will start to break down all the kids throwing and hitting
            mechanics to learn correct fundamentals and ingrain good muscle
            memory. During this time we learn good habits with lots of drills
            and help them complete the first building block. It will look ugly
            for a while, but in the end will look mechanically correct, athletic
            and smooth. From there we can start to teach pitching mechanics;
            which will build accuracy. Once we get to a point they have a good
            fluid arm path that is transferring energy correctly; we start to
            teach velocity. The same goes for all positions and hitting. Sports
            Science, Biomechanics and Technology Baseball science and teaching
            has changed since we were kids. Instead of pushing off the mound, we
            drift. Short arming that ball can be more consistent than long
            arming a ball, while velocity stays the same Leading with the elbow
            is important Hip to Shoulder Separation Supinating and Pronating
            during ball release The Towel Drill is ineffective Energy Leakage of
            the throw or swing Use the Pitch Smart Guidelines Understanding the
            Kinetic Chain of Energy created from start to finish Using slow
            motion video analysis to correct player flaws Arm Health Arm health
            doesn’t simple mean pitch count or getting rest. Though, we do
            follow the Pitch Smart recommendations Arm health starts with the
            player understanding the science and physics of how the body propels
            a ball. It means understanding a correct arm path. Unfortunately,
            most young players really get their arm pain from bad mechanics. If
            not corrected early, they can have years of elbow strain and put a
            tremendous amount of pressure put on their shoulder and other parts
            of their body. Competitive Mindset Like most sports, having success
            is 80% mental. We believe being confident is key to competing at a
            high level. We teach the kids to be warrior-like (dominant mindset)
            in their positions. Example. The pitcher needs the mindset that they
            are going to dominate every hitter and we teach the hitter that
            every pitcher is beatable; no matter what skill level they are
            facing. Dealing with Success and Failure When a hitter makes contact
            and gets on base, they are successful. Which means the pitcher or
            fielder would of failed in some way. Each player will have many
            successes and failures, so it’s important to teach them how to deal
            with it. Competitive kids can be very emotional when they fail
            because they strive to win. We love that they have this drive to be
            the best, but sometimes it can lead to anger and frustration. We
            teach them to own that responsibility; they are the only ones that
            can change the outcome next time. Ultimately, we hope these will be
            life long lessons.
          </p>
        </div>

        <div className="sm:w-1/4 float-right p-2 bg-yellow-400 ">
          <Events />
        </div>
      </div>
    </>
  );
}

export default development;
