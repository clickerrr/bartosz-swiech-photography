export default GET = async (req: Request) => {
    res.statusCode = 200;
    return new Response(JSON.stringify({ name: 'John Doe' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
};
