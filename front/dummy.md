## // firebase clans schema --->

{
clanname: "Bharat Warriors",
email: "bharat_warriors@clashclan.in",
profile_picture: "https://example.com/bharat_clan_logo.png",
clan_level: 12,
clan_points: 41000,
required_trophies: 1800,
clan_type: "open", // "invite-only", "closed", or "open"
war_wins: 300,
war_losses: 60,
war_ties: 15,
total_members: 50,
clan_location: "India",
clan_description:
"We are a powerful Indian clan, united to dominate in wars and grow stronger together!",
leader: {
name: "MahaRaja",
role: "Leader",
town_hall_level: 14,
trophies: 5000,
},
members: [
{
name: "MiniRajput",
role: "Co-Leader",
town_hall_level: 13,
trophies: 4800,
donations: 600,
received: 400,
},
{
name: "GurjarKnight",
role: "Elder",
town_hall_level: 11,
trophies: 3600,
donations: 450,
received: 550,
},
{
name: "RajputKing",
role: "Member",
town_hall_level: 10,
trophies: 2700,
donations: 150,
received: 200,
},
],
}
//---------------------------------------------------------
// user db--->
{
username: "string", // Unique username chosen by the player
email: "string", // Player's email address (optional)
profilePicture: "string", // URL of the player's profile picture (optional)
clanId: "string", // Reference to the player's clan (if any)
}
// ----------------------------------------------------
// war-log db--->
{
"warId": "war12345",
"clan1": {
"clanId": "clanA1",
"clanName": "Warriors of Light",
"totalStars": 45,
"destructionPercentage": 95.6,
"participants": [
{
"userId": "user123",
"username": "DragonSlayer"
},
{
"userId": "user124",
"username": "KnightFury"
}
]
},
"clan2": {
"clanId": "clanB1",
"clanName": "Shadow Raiders",
"totalStars": 40,
"destructionPercentage": 89.3,
"participants": [
{
"userId": "user223",
"username": "ShadowHunter"
},
{
"userId": "user224",
"username": "DarkMage"
}
]
},
"warStartTime": "2024-10-31T14:00:00Z",
"warEndTime": "2024-11-01T14:00:00Z",
"result": "win",
"winningClanId": "clanA1",
"duration": 24
}

//------------------------------------------------------------------------------
//league-challenges --->>>>
{
leagueId: "string", // Unique identifier for the league challenge
startDate: "timestamp", // Start date of the league challenge
endDate: "timestamp", // End date of the league challenge
participatingClans: [
// List of clans participating in the league
{
clanId: "string", // Unique ID of the clan
clanName: "string", // Name of the clan
totalWarsWon: "number", // Number of wars won by this clan in the league
},
],
leaderboard: [
// Leaderboard for the league challenge
{
clanId: "string", // Unique ID of the clan
rank: "number", // Current rank of the clan
totalWarsWon: "number", // Number of wars won by this clan
},
],
championClanId: "string", // The ID of the winning clan (after the league ends)
}
