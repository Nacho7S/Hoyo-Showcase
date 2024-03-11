import enka
import asyncio

async def main() -> None:
    async with enka.EnkaAPI() as api:
      response = await api.fetch_showcase(806985156)
      print(response.player.nickname)
      # print(response.characters[0].name)
      for character in response.characters:
         print(character.name)

asyncio.run(main())