"use client";

import JSConfetti from "js-confetti";
import { useEffect, useCallback } from "react";

export default function BirthdayCard() {

  const sprayConfetti = useCallback(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }, []);

  // Trigger confetti on page load/render.
  useEffect(() => {
    console.log("confetti");
    sprayConfetti();
  }, [sprayConfetti]);

  return (
    <div className="birthday_card_letter">
      <button onClick={sprayConfetti}>Click for confetti</button>
      <p>Happy birthday, Nancy!</p>
      <br />
      <p>
        I hope you have an amazing day today. I wish I could be there in person
        with you, celebrating your 22nd birthday. I am celebrating your big day
        3000 miles away with the best wishes of joy and happiness for you.
        Thinking of you lots today (and always) and sending lots of love.
      </p>
      <br />
      <p>
        Love you,
        <br />
        Desmond
      </p>
    </div>
  );
}
