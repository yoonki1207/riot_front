export interface ICurrentGameInfo {
    gameId: number; //The ID of the game
    gameType: string; //The game type
    gameStartTime: number; //The game start time represented in epoch milliseconds
    mapId: number; //The ID of the map
    gameLength: number; //The amount of time in seconds that has passed since the game started
    platformId: string; //	The ID of the platform on which the game is being played
    gameMode: string; //The game mode
    bannedChampions: IBannedChampion[]; //Banned champion information
    gameQueueConfigId: number; //The queue type (queue types are documented on the Game Constants page)
    observers: IObserver; //The observer information
    participants: ICurrentGameParticipant[]; //The participant information
}

interface IBannedChampion {
    pickTurn: number; //The turn during which the champion was banned
    championId: number; //	The ID of the banned champion
    teamId: number; //The ID of the team that banned the champion
}

interface IObserver {
    encryptionKey: string; //Key used to decrypt the spectator grid game data for playback
}

interface ICurrentGameParticipant {
    championId: number; //The ID of the champion played by this participant
    perks: IPerks; //Perks/Runes Reforged Information
    profileIconId: number; //The ID of the profile icon used by this participant
    bot: boolean; //Flag indicating whether or not this participant is a bot
    teamId: number; //The team ID of this participant, indicating the participant's team
    summonerName: string; //The summoner name of this participant
    summonerId: string; //The encrypted summoner ID of this participant
    spell1Id: number; //The ID of the first summoner spell used by this participant
    spell2Id: number; //The ID of the second summoner spell used by this participant
    gameCustomizationObjects: IGameCustomizationObject[]; //List of Game Customizations
}

interface IPerks {
    perkIds: number[]; //IDs of the perks/runes assigned.
    perkStyle: number; //Primary runes path
    perkSubStyle: number; //Secondary runes path
}

interface IGameCustomizationObject {
    category: string; //Category identifier for Game Customization
    content: string; //Game Customization content
}