import { Redis } from "ioredis"

export const redis = new Redis({
  port: '18315',
  host: 'redis-18315.c252.ap-southeast-1-1.ec2.cloud.redislabs.com',
  password: 'RhajRP3KI5TPb5DfHnAFegvZmvb7IkU3',
  lazyConnect: true,
  keepAlive: 1000,
})
