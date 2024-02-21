export const discord_api_url = (serverName = "motionime") =>
  `https://discord.com/api/v9/invites/${serverName}?with_counts=true&with_expiration=true`;
