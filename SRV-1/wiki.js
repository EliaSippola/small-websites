const wikisearch = async (src, cbFn) => {

    const url = "https://fi.wikipedia.org/w/api.php?action=query&titles=" +
        encodeURIComponent(src) +
        "&format=json&formatversion=2&prop=extracts&exintro&explaintext&exsentences=4";
    
    const res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        }
    })
        .catch((e) => {
            cbFn("Fetch failed: " + e, undefined);
        });

    const data = await res.json();

    cbFn(undefined, data);
    
}

module.exports = {
    wikisearch
}