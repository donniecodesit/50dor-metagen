const formatLine = (line) => {
    return `${'   '}${line}\n`;
}

export const generateSocialMetaTags = (metaData) => {
    const { title, description, url, imageUrl } = metaData;
    let socialMetaData = formatLine("");
    socialMetaData += formatLine("<!-- Essential Social Meta Tags -->");
    socialMetaData += formatLine(`<meta property="og:title" content="${title}"/>`);
    socialMetaData += formatLine(`<meta property="og:description" content="${description}"/>`);
    socialMetaData += formatLine(`<meta property="og:image" content="${imageUrl}"/>`);
    socialMetaData += formatLine(`<meta property="og:url" content="${url}"/>`);
    socialMetaData += formatLine(`<meta property="twitter:card" content="${imageUrl}"/>`);
    socialMetaData += formatLine(`<meta property="og:site_name" content="${title}"/>`);
    socialMetaData += formatLine(`<meta property="twitter:image:alt" content="${title}"/>`);
    return socialMetaData;
}


export const generateMetaTags = (metaData) => {
    const { title, description, keywords, author, url } = metaData;
    let resultTags = `<head>\n`;
    resultTags += formatLine(`<title>${title}</title>`);
    resultTags += formatLine(`<meta name="description" content="${description}"/>`);
    resultTags += formatLine(`<meta name="keywords" content="${keywords}"/>`);
    resultTags += formatLine(`<meta name="author" content="${author}"/>`);
    resultTags += formatLine(`<link rel="canonical" href="${url}"/>`);
    resultTags += formatLine(`<meta name="robots" content="index, follow"/>`);
    resultTags += generateSocialMetaTags(metaData, resultTags);
    resultTags += "</head>";
    return resultTags;
}