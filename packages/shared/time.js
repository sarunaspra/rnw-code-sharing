import { format } from "date-fns";

function getCurrentTime() {
  return format(new Date(), "MMMM dd, yyyy hh:mm");
}

export { getCurrentTime };
