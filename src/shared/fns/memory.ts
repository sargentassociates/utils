import prettyBytes from 'pretty-bytes';

export const getMemoryUsage = () => {
    const used = process.memoryUsage();
    console.log({
        rss: prettyBytes(used.rss),
        heapTotal: prettyBytes(used.heapTotal),
        heapUsed: prettyBytes(used.heapUsed)
    })
}
