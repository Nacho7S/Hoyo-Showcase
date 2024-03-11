import { EnkaClient } from "enka-network-api"
import { ConvertObjectToJson } from "@/helper/ConvertObjectToJson";
import { NextResponse } from "next/server";
import { UserFactory } from "@/models/user";

const enka = new EnkaClient();

export class UserIdGenshinController {

  static async getUserGenshin(id) {
    let user;
    return await run();

    async function run() {

      try {
        // await enka.cachedAssetsManager.fetchAllContents();
        user = await enka.fetchUser(id)
        // console.log(user, "user cuy");
        const userJson = ConvertObjectToJson(user)
        const userSimplify = UserFactory.createUser(
          userJson.uid,
          userJson.level,
          userJson.worldLevel,
          userJson.achievements,
          userJson.spiralAbyss,
          userJson.nickname,
          userJson.signature,
          userJson.profilePicture.icon,
          userJson.profileCard,
          userJson.nameCards,
          userJson.characters,
          userJson.showCharacterDetails
        )
        // console.log(userSimplify, " <<<< simplified");
        return userSimplify

      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        enka.close();
      }
    }

  }

}
