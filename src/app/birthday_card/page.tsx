"use client";

import styles from "./birthday_card.module.scss";
import JSConfetti from "js-confetti";
import { useEffect } from "react";

function sprayConfetti() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
}

function sprayHeartConfetti() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ["❤️", "😍", "😻", "🥳", "💕"],
  });
}

export default function BirthdayCard() {
  // Trigger confetti on page load/render.
  useEffect(() => {
    sprayConfetti();
  }, [sprayConfetti]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.front} ${styles.inner}`}>
        <img src="./images/me_and_u.png"></img>
      </div>
      <div className={`${styles.front} ${styles.outer}`}>
        <img src="./images/happy_birthday.jpg"></img>
      </div>
      <div className={styles.letter}>
        <div className={styles.letter_content}>
          <p>Happy birthday, Nancy!</p>
          <br />
          <p>
            I hope you have an amazing day today. I wish I could be there in
            person with you to celebrate your 22nd birthday. I am celebrating
            your big day 3000 miles away with the best wishes of joy and
            happiness for you. I am so lucky to have you in my life and you hold
            a special place in my heart. Thinking of you lots today (and always)
            and sending lots of love.
          </p>
          <br />
          <p className={styles.align_right} onClick={sprayHeartConfetti}>
            <a href="#">
              Love you,
              <br />
              Desmond
            </a>
          </p>
        </div>
      </div>
      <div className={styles.back}></div>
    </div>
  );
}
