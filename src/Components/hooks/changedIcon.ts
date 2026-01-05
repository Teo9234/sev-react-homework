//get the name of the favicon file in the public folder
const changedIcon = () => {
    // get all link elements
    const linkElements = document.getElementsByTagName("link");
    let isPlusFavicon = false;
    const plusFaviconName = "plus.png";

    // loop through all link elements to find the favicon
    for (let i = 0; i < linkElements.length; i++) {
        const linkElement = linkElements[i];
        // check if the link element is a favicon
        if (linkElement.getAttribute("rel") === "icon" || linkElement.getAttribute("rel") === "shortcut icon") {
            const href = linkElement.getAttribute("href");
            // check if the href contains the plus favicon name
            if (href && href.includes(plusFaviconName)) {
                return {isPlusFavicon : true};
            }
        }
    }
    return {isPlusFavicon};
}

export default changedIcon;