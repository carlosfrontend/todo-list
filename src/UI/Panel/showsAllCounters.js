import viewInboxCounter from "./viewInboxCounter";
import viewTodayCounter from "./viewTodayCounter";
import viewTomorrowCounter from "./viewTomorrowCounter";
import viewNextCounter from "./viewNextCounter";
const showsAllCounters = () => {
    viewInboxCounter();
    viewTodayCounter();
    viewTomorrowCounter();
    viewNextCounter();
}

export default showsAllCounters;