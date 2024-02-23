import inboxCounter from "./inboxCounter";
import nextCounter from "./nextCounter";
import todayCounter from "./todayCounter";
import tomorrowCounter from "./tomorrowCounter";
import showProjectCounter from "./showProjectsCounters";

const showCounters = () => {
  inboxCounter();
  todayCounter();
  tomorrowCounter();
  nextCounter();
  showProjectCounter();
};

export default showCounters;
