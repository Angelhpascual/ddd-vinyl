import type { VinylArtistName } from "./Value-Objects/VinylArtistName"
import type { VinylCover } from "./Value-Objects/VinylCover"
import type { VinylGenre } from "./Value-Objects/VinylGenre"
import type { VinylId } from "./Value-Objects/VinylId"
import type { VinylPreviewURL } from "./Value-Objects/VinylPreviewURL"
import type { VinylReleaseYear } from "./Value-Objects/VinylReleaseYear"
import type { VinylRPM } from "./Value-Objects/VinylRPM"
import type { VinylTitle } from "./Value-Objects/VinylTitile"
import type { VinylTrackDuration } from "./Value-Objects/VinylTrackDuration"

export class Vinyl {
  readonly id: VinylId
  readonly title: VinylTitle
  readonly artist: VinylArtistName
  readonly releaseYear: VinylReleaseYear
  readonly cover: VinylCover
  readonly rpm: VinylRPM
  readonly duration: VinylTrackDuration
  readonly genre: VinylGenre
  readonly preview?: VinylPreviewURL

  constructor(
    id: VinylId,
    title: VinylTitle,
    artist: VinylArtistName,
    releaseYear: VinylReleaseYear,
    cover: VinylCover,
    rpm: VinylRPM,
    duration: VinylTrackDuration,
    genre: VinylGenre
  ) {
    this.id = id
    this.title = title
    this.artist = artist
    this.releaseYear = releaseYear
    this.cover = cover
    this.rpm = rpm
    this.duration = duration
    this.genre = genre
  }
}
