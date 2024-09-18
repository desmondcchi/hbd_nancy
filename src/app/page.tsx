import Link from "next/link"

export default function EnvelopeAndLetter() {
  return (
    <div className="envelope-wrapper">
      <div className="lid closed"></div>
      <div className="lid opened"></div>
      <div className="envelope"></div>
      <div className="letter">
        <p>
          <Link href="/birthday_card">Hi Nancy :D</Link>
        </p>
      </div>
    </div>
  );
}
