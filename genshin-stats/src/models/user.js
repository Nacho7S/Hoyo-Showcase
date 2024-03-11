class User {
  constructor(uid, level, worldLevel, achievements, spiralAbyss, nickname, signature, profilePicture, bannerProfilePicture, bannerPictures,characters, showCharacterDetails) {
    this.uid = uid,
      this.level = level,
      this.worldLevel = worldLevel,
      this.achievements = achievements,
      this.spiralAbyss = spiralAbyss,
      this.nickname = nickname,
      this.signature = signature,
      this.profilePicture = profilePicture,
      this.bannerProfilePicture = bannerProfilePicture,
      this.bannerPictures = bannerPictures
      this.characters = characters,
      this.showCharacterDetails = showCharacterDetails
  }
}

export class UserFactory {
  static createUser(uid, level, worldLevel, achievements, spiralAbyss, nickname, signature, profilePicture, bannerProfilePicture, bannerPictures,characters, showCharacterDetails) {
    return new User(uid, level, worldLevel, achievements, spiralAbyss, nickname, signature, profilePicture, bannerProfilePicture, bannerPictures,characters, showCharacterDetails)
  }
}
