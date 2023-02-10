import { serverPusher } from "../../../pusher";
import redis from "../../../redis";
export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).json({ name: 'Method Not Allowed' });
        return;
    }
    const message = req.body;

    const newMessage = {
        ...message,
        created_at: Date.now(),
    };

    await redis.hset("message", message.id, JSON.stringify(newMessage));
    serverPusher.trigger("message", "new-message", newMessage);
    res.status(200).json({ message: newMessage });
}
