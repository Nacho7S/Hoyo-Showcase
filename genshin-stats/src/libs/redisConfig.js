import 'dotenv/config'
import { Redis } from "ioredis"

export const redis = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  lazyConnect: true,
  keepAlive: 1000,
})
