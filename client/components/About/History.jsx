import React from "react";
import Quote from "../Quote";

const History = () => {
  return (
    <>
      <Quote
        text="To always be there for all runners and not to simply concentrate on 
a few of the best or elite athletes"
        author=""
      />
      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0">History</h1>
      </div>
      {/* create a text section with styling */}
      <div className="flex flex-col items-center p-4">
        <p className="text-lg text-gray-900  text-center p-4 py-0">
          Rand Athletic Club (RAC) is one of the oldest running clubs in South
          Africa, made up of runners, walkers, trail runners, ultra-marathoners
          and social members. It is a club known for its rich running history
          and tradition, and its huge attendance at time trial evenings. Up to
          500 runners would often gather at the clubhouse on Tuesday evenings to
          take part in the tough but rewarding 5km or 8km time trial. The club
          dates back to 1972, and over the years many well-known faces and
          talented runners have been part of RAC. The club’s first chairman was
          Fritz Madel and in 1973 the club constitution and colours were
          accepted. Member subscriptions were set at a mere R4 per year, with
          running licenses costing just R1.50. Initially, the young club battled
          to take off but after some hard work, membership began to increase.
          Little did they know at the time, that they would be creating a club
          that would become a pillar of the running community in decades to
          come. In 1973 six RAC members completed the Comrades Marathon. At that
          stage the club had 37 members. In 1974 it was agreed that women could
          join the club and Pam Potter was the first female member to join RAC.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0">
          Early Years
        </h1>
      </div>
      {/* create a text section with styling */}
      <div className="flex flex-col items-center p-4">
        <p className="text-lg text-gray-900  text-center p-4 py-0">
          Rand Athletic Club (RAC) is one of the oldest running clubs in South
          Africa, made up of runners, walkers, trail runners, ultra-marathoners
          and social members. It is a club known for its rich running history
          and tradition, and its huge attendance at time trial evenings. Up to
          500 runners would often gather at the clubhouse on Tuesday evenings to
          take part in the tough but rewarding 5km or 8km time trial. The club
          dates back to 1972, and over the years many well-known faces and
          talented runners have been part of RAC. The club’s first chairman was
          Fritz Madel and in 1973 the club constitution and colours were
          accepted. Member subscriptions were set at a mere R4 per year, with
          running licenses costing just R1.50. Initially, the young club battled
          to take off but after some hard work, membership began to increase.
          Little did they know at the time, that they would be creating a club
          that would become a pillar of the running community in decades to
          come. In 1973 six RAC members completed the Comrades Marathon. At that
          stage the club had 37 members. In 1974 it was agreed that women could
          join the club and Pam Potter was the first female member to join RAC.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0">
          Our Home
        </h1>
      </div>
      {/* create a text section with styling */}
      <div className="flex flex-col items-center p-4">
        <p className="text-lg text-gray-900  text-center p-4 py-0">
          RAC is based at the Old Parktonian Sports Club in Bordeaux, Randburg.
          Track and coaching is done on the Old Parks sports fields, and our
          runners have spent many happy hours under the huge tipuana tree,
          sharing drinks, and meals at the Tipu Café. Our very popular Time
          Trial runs have often seen up to 500 runners, and our Club Run routes
          will all take you on the most scenic tours of our beautiful leafy
          Johannesburg suburbs , while offering a varied and testing workouts.
        </p>

        {/* create a centered image */}
        <div className="flex flex-col items-center p-4">
          <img
            src="https://static.wixstatic.com/media/8fa582_c74c126566ad4f8b8e31cf50192031a1~mv2.jpg/v1/crop/x_0,y_522,w_2048,h_1204/fill/w_979,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/clubhouse.jpg"
            alt="RAC"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default History;
