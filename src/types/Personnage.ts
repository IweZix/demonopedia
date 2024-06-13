class Personnage {
  id: number;
  name: string;
  apparition_season: number;
  apparition_episode: number;
  description: string;
  image: string;
  demon: boolean;
  pillar: boolean;
  demon_slayer: boolean;
  lower_moon: boolean;
  upper_moon: boolean;

  constructor(
    id: number,
    name: string,
    apparition_season: number,
    apparition_episode: number,
    description: string,
    image: string,
    demon: boolean,
    pillar: boolean,
    demon_slayer: boolean,
    lower_moon: boolean,
    upper_moon: boolean
  ) {
    this.id = id;
    this.name = name;
    this.apparition_season = apparition_season;
    this.apparition_episode = apparition_episode;
    this.description = description;
    this.image = image;
    this.demon = demon;
    this.pillar = pillar;
    this.demon_slayer = demon_slayer;
    this.lower_moon = lower_moon;
    this.upper_moon = upper_moon;
  }

  getFullName(): string {
    return `${this.name}`;
  }

  getEpisode(): string {
    return `Saison ${this.apparition_season} - Episode ${this.apparition_episode}`;
  }
}

export default Personnage;
