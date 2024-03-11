import asyncio
import genshin

async def main():
    cookies = {
        "ltuid_v2": 24298162,
        "ltmid_v2": "1bor5seuer_hy",
        "ltoken_v2": "v2_CAISDGM5b3FhcTNzM2d1OBokMzQyNDMyMGMtODI5Ny00OWMwLThhY2QtNjExZjA1MjU0Yzk1IIrGi68GKK2i0-QEMLKFywtCC2Jic19vdmVyc2Vh"
}
    client = genshin.Client(cookies)
    # print(client)
    honkai = await client.get_honkai_user(19347437)
    print(honkai)
asyncio.run(main())