import { IMetadata } from "./match.dto";

export interface IMatchTimeline {
    metadata: IMetadata;
    info: Info;
}

export interface Info {
    frameInterval: number;
    frames: IFrame[];
    gameId: number;
    participants: Participant[];
}

export interface IFrame {
    events: Event[];
    participantFrames: ParticipantFrames;
    timestamp: number;
}

export interface Event {
    realTimestamp?: number;
    timestamp: number;
    type: string;
    itemId?: number;
    participantId?: number;
    levelUpType?: string;
    skillSlot?: number;
    afterId?: number;
    beforeId?: number;
    goldGain?: number;
    creatorId?: number;
    wardType?: string;
    level?: number;
    assistingParticipantIds?: number[];
    bounty?: number;
    killStreakLength?: number;
    killerId?: number;
    position?: Position;
    shutdownBounty?: number;
    victimDamageDealt?: VictimDamageDealt[];
    victimDamageReceived?: VictimDamageReceived[];
    victimId?: number;
    killType?: string;
    laneType?: string;
    teamId?: number;
    killerTeamId?: number;
    monsterType?: string;
    monsterSubType?: string;
    multiKillLength?: number;
    buildingType?: string;
    towerType?: string;
    actualStartTime?: number;
    name?: string;
    gameId?: number;
    winningTeam?: number;
}

export interface Position {
    x: number;
    y: number;
}

export interface VictimDamageDealt {
    basic: boolean;
    magicDamage: number;
    name: string;
    participantId: number;
    physicalDamage: number;
    spellName: string;
    spellSlot: number;
    trueDamage: number;
    type: string;
}

export interface VictimDamageReceived {
    basic: boolean;
    magicDamage: number;
    name: string;
    participantId: number;
    physicalDamage: number;
    spellName: string;
    spellSlot: number;
    trueDamage: number;
    type: string;
}

export interface ParticipantFrames {
    "1": ParticipantFrame;
    "2": ParticipantFrame;
    "3": ParticipantFrame;
    "4": ParticipantFrame;
    "5": ParticipantFrame;
    "6": ParticipantFrame;
    "7": ParticipantFrame;
    "8": ParticipantFrame;
    "9": ParticipantFrame;
    "10": ParticipantFrame;
}

export interface ParticipantFrame {
    championStats: ChampionStats;
    currentGold: number;
    damageStats: DamageStats;
    goldPerSecond: number;
    jungleMinionsKilled: number;
    level: number;
    minionsKilled: number;
    participantId: number;
    position: Position;
    timeEnemySpentControlled: number;
    totalGold: number;
    xp: number;
}

export interface ChampionStats {
    abilityHaste: number;
    abilityPower: number;
    armor: number;
    armorPen: number;
    armorPenPercent: number;
    attackDamage: number;
    attackSpeed: number;
    bonusArmorPenPercent: number;
    bonusMagicPenPercent: number;
    ccReduction: number;
    cooldownReduction: number;
    health: number;
    healthMax: number;
    healthRegen: number;
    lifesteal: number;
    magicPen: number;
    magicPenPercent: number;
    magicResist: number;
    movementSpeed: number;
    omnivamp: number;
    physicalVamp: number;
    power: number;
    powerMax: number;
    powerRegen: number;
    spellVamp: number;
}

export interface DamageStats {
    magicDamageDone: number;
    magicDamageDoneToChampions: number;
    magicDamageTaken: number;
    physicalDamageDone: number;
    physicalDamageDoneToChampions: number;
    physicalDamageTaken: number;
    totalDamageDone: number;
    totalDamageDoneToChampions: number;
    totalDamageTaken: number;
    trueDamageDone: number;
    trueDamageDoneToChampions: number;
    trueDamageTaken: number;
}

export interface Participant {
    participantId: number;
    puuid: string;
}
