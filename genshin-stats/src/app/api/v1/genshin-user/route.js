import { UserIdGenshinController } from "@/controllers/UserUidGenshinController";
import { redis } from "@/libs/redisConfig";
import { NextResponse } from "next/server";




export async function POST(request, response) {
  const genshinUid = await request.json();
  const cacheValue = await redis.get("user")
  const parseValue = JSON.parse(cacheValue)
 
  if (cacheValue) {
    console.log("masuk cache");
    // await redis.del("user")
    // console.log(Number(genshinUid.uid) !== parseValue.uid, "cache");
    if (Number(genshinUid.uid) !== parseValue?.uid) {
      await redis.del("user")
    } else {
      return NextResponse.json({ user: parseValue }, { status: 200 });
    }
  } 
    const user = await UserIdGenshinController.getUserGenshin(genshinUid.uid);
    const characters = await user.characters;
    const stringifyUser = JSON.stringify(user)
    await redis.set("user", stringifyUser)
    if (characters.length === 0) {
      console.log("This user has no detailed characters on the profile.");
    }

    return NextResponse.json({ user }, { status: 200 });

}
