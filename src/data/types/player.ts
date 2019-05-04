interface BasePlayer {
  id: string;
  name: string;
}

export interface FootballPlayer extends BasePlayer {
  team: FootballTeam;
  position: FootballPlayerPosition;
}

export type PlayerPosition = FootballPlayerPosition;
export type FootballPlayerPosition = 'QB' | 'RB' | 'WR' | 'TE' | 'D/ST' | 'K' | 'FLEX' | 'OP';

export type PlayerTeam = FootballTeam;
export type FootballTeam = 'NYG' | 'NYJ' | 'PIT';
