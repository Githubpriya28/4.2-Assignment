// player.model.ts
export interface Player {
  name: string;
  position: string;
  rushingYards?: number;
  touchdownsThrown?: number;
  sacks?: number;
  fieldGoalsMade?: number;
  fieldGoalsMissed?: number;
  catchesMade?: number;
}