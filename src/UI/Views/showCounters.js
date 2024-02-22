import inboxCounter from "./inboxCounter";
import nextCounter from "./nextCounter";
import todayCounter from "./todayCounter";
import tomorrowCounter from "./tomorrowCounter";

const showCounters = () => {
 inboxCounter();
 todayCounter();
 tomorrowCounter();
 nextCounter();
}

export default showCounters;