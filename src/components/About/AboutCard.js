import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I grew up in <b className="purple">Portland, Oregon</b>, and I love the outdoors. I particularly enjoy skipping rocks.
            <br />
            <br/>
            <b className="purple">Swimming and jumping</b> in rivers is one of my favorite things. 
            I once did a flip off of a 40 foot jump, but I am far too scared to ever try that again.
            <br />
            <br/>
            I also love <b className="purple">hiking and birdwatching</b>. Pinnacles National Park is the perfect place to do both of those things, 
            and it is where a California Condor flew just 10 feet above my head.
            <br />
            <br />
            I'm also kind of a nerd. I play the modern game of Magic the Gathering, 
            and the ancient game of Go, and I love geeking out about <b className="purple">game design</b> and rules interactions.
            <br/>
            <br/>
            I studied <b className="purple">Mandarin</b> for four years in high school, and I can still carry a decent conversation.
            <br/>
            <br/>
            I was a <b className="purple">competitive swimmer</b> in high school. My best events were the 100 and 200 free, as well as 100 fly. I set multiple team records.
            As a senior in high school, I set up a mentorship program to help connect the team's younger swimmers with high school aged swimmers.
            <br/>
            <br/>
            I have an adorable pet <b className="purple">Ball Python</b> named George. He sometimes gets a bath!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
