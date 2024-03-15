import { UserIdGenshinController } from "@/controllers/UserUidGenshinController";
import { redis } from "@/libs/redisConfig";
import { NextResponse } from "next/server";




export async function POST(request, response) {
  const genshinUid = await request.json();
  let cachedUsers = await redis.get("user");
  cachedUsers = cachedUsers ? JSON.parse(cachedUsers) : [];


  const cachedUser = cachedUsers.find(user => user.uid === Number(genshinUid.uid));
  if (cachedUser) {
    console.log("User found in cache:", cachedUser);
    return NextResponse.json({ user: cachedUser }, { status: 200 });
  }

 
  const user = await UserIdGenshinController.getUserGenshin(genshinUid.uid);
  console.log(user, "user non cache status");
  if (!user) {
    return NextResponse.json({message: "user not found"}, {status: 404})
  }

  cachedUsers.unshift(user);
  if (cachedUsers.length > 5) {
    cachedUsers.pop(); 
  }
  await redis.set("user", JSON.stringify(cachedUsers));

  return NextResponse.json({ user }, { status: 200 });
}


//make request for refresh uid
