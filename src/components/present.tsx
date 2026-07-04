import { useState, useEffect } from "react";
import { Hourglass, Calendar } from "lucide-react";

export type AgeState = {
  years: number;
  months: number;
  days: number;
  hours: number;
  totalDays: number;
};

export function getAgeSinceBirth(birthDate: Date, now: Date = new Date()): AgeState {
  const diffMs = Math.max(0, now.getTime() - birthDate.getTime());
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: Math.max(0, hours),
    totalDays,
  };
}

export default function Present() {
  const birthDate = new Date("2008-07-07T00:00:00");
  const targetDate = new Date("2026-07-07T00:00:00");

  const [age, setAge] = useState<AgeState>(() => getAgeSinceBirth(birthDate));
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setAge(getAgeSinceBirth(birthDate, now));

      const diffTarget = targetDate.getTime() - now.getTime();

      if (diffTarget > 0) {
        const daysLeft = Math.floor(diffTarget / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor(
          (diffTarget % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutesLeft = Math.floor(
          (diffTarget % (1000 * 60 * 60)) / (1000 * 60),
        );
        const secondsLeft = Math.floor((diffTarget % (1000 * 60)) / 1000);

        setCountdown({
          days: daysLeft,
          hours: hoursLeft,
          minutes: minutesLeft,
          seconds: secondsLeft,
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    tick();
    const interval = window.setInterval(tick, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="present-container">
      <div className="header-timer present-timer">
        <div className="header-timer-box">
          <div className="timer">
            <Hourglass size={28} className="icon" />
          </div>
          <div className="timer">
            <p>
              <Calendar className="icon" size={18} /> Tempo restante{" "}
            </p>
            <span>
              {" "}
              {countdown.days}d :{countdown.hours}h :{countdown.minutes}m :
              {countdown.seconds}s{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="present-title">
        <span>Feliz Aniversário, nossa Leitora!</span>
        <h2>Ana Vissolela Vicente</h2>
        <p>
          Um pequeno espaço virtual decorado com todo o meu carinho, para
          celebrar o melhor dia do ano: O seu aniversário
        </p>
      </div>
      <div className="present-years">
        <div className="present-box">
          <h2>Tempo celebrando sua linda trajetória</h2>
          <div className="present-box-line">
            <span>
              {" "}
              <h1>{age.years}</h1> <p>Anos</p>{" "}
            </span>
            <span>
              {" "}
              <h1>{age.months}</h1> <p>Meses</p>
            </span>
            <span>
              {" "}
              <h1>{age.days}</h1>
              <p>Dias</p>{" "}
            </span>
            <span>
              {" "}
              <h1>{age.hours}</h1>
              <p>Horas</p>{" "}
            </span>
          </div>
        </div>
        <div className="present-box">
          <div className="present-box-info">
            <h2>Dias de brilho </h2>
            <p>{age.totalDays}</p>
          </div>
          <div className="present-box-info">
            <h2>Livros lidos </h2>
            <p>+500</p>
          </div>
          <div className="present-box-info">
            <h2> Função no mundo </h2>
            <p>Ser a BOSS </p>
          </div>
        </div>
      </div>
    </div>
  );
}
