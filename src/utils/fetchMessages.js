const fetcher = async () => {
    const response = await fetch("/api/getMessages");
    const messages = await response.json();
    return messages;
};
export default fetcher;