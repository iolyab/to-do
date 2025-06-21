import React, { useEffect, useState } from "react";
import classes from "./Footer.module.scss";

const quotes = [
  "Small steps every day lead to big achievements.",
  "Don’t wait for motivation. Create discipline.",
  "You don’t have to be great to start, but you have to start to be great.",
  "The secret to getting ahead is getting started.",
  "Done is better than perfect.",
  "Focus on being productive instead of busy.",
  "The way to get started is to quit talking and begin doing.",
  "Progress over perfection.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Your future is created by what you do today, not tomorrow.",
  "Big journeys begin with small steps.",
  "One task at a time. One step at a time.",
  "Discipline is choosing between what you want now and what you want most.",
  "Push yourself, because no one else is going to do it for you.",
  "Every accomplishment starts with the decision to try.",
  "Productivity is never an accident. It is always the result of a commitment to excellence.",
  "Action is the foundational key to all success.",
  "Start now. Not later. Not tomorrow. Just now.",
  "Stay focused and never give up on your goals.",
  "You are more capable than you think.",
];

const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};

const Footer = () => {
  const [quote, setQuote] = useState(getRandomQuote());
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 600000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.footer}>
      <q className={classes.quote}>{quote}</q>
    </div>
  );
};
export default Footer;
