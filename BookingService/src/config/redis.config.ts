import IORedies, { Redis } from 'ioredis';
const {default: Redlock} = require("redlock");
import { serverConfig } from '.';

// export const redisClient = new IORedies(serverConfig.REDIS_SERVER_URL);

function connectToRedis() {
    try {

        let connection: Redis;
        
        return() => {
            if (!connection) {
                connection = new IORedies(serverConfig.REDIS_SERVER_URL);
                return connection;
            }

            return connection;
        }

    } catch(error) {
        console.error('Error connecting to Redis:', error);
        throw error;
    }
}

export const getRedisCommObject = connectToRedis();

export const redlock = new Redlock([getRedisCommObject], {
    driftFactor: 0.01,  // time in ms
    retryCount: 10,
    retryDelay: 200,    // time in ms
    retryJitter: 200    // time in ms
})