import { Calendar, Hourglass } from 'lucide-react'
import { useState, useEffect } from 'react';

export type AgeState = {
  years: number;
  months: number;
  days: number;
  hours: number;
  totalDays: number;
};


export default function Header() {
  const targetDate = new Date("2026-07-07T00:00:00");

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();

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
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <div className="header-logo-name">
                        <h1>A</h1>
                    </div>
                    <div className="header-logo-box">
                        <h2>Para o seu aniverário</h2>
                        <p>Hoje e para sempre</p>
                    </div>
                </div>
                <div className="header-timer">
                    <div className="header-timer-box">
                        <div className="timer">
                            <Hourglass size={28} className='icon'/>
                        </div>
                        <div className="timer">
                            <p><Calendar className='icon' size={18} /> Tempo restante </p>
                            <span>{" "}{countdown.days}d :{countdown.hours}h :{countdown.minutes}m : {countdown.seconds}s{" "}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}