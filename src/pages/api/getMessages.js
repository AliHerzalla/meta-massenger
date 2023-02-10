import redis from "../../../redis";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(404).json({ name: 'Method Not Allowed' });
        return;
    }

    const messagesResponse = await redis.hvals("message");
    const messages = messagesResponse.map(message => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at);

    res.status(200).json(messages);
}
