import axios from "axios";
import { discord_api_url } from "./constants";
import { formatNumber } from "@/utils/number";

export async function getTotalMemberDiscord() {
  const res = await (await axios.get(discord_api_url())).data;

  // approximate_member_count is a variable that stores the total members from the discord api.
  const total = res?.approximate_member_count;

  return {
    results: {
      ...formatNumber(total),
    },
    message: "get total member motionime",
  };
}
