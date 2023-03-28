exports.inlineVideo = (width, height, url, type) => `
<video controls width="${width}" height="${height}">
    <source src="/${url}.${type}" type="video/${type}">
    Download de <a href="${url}.${type}">${type}</a> video.
</video>
`;
