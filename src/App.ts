export const TitleComponent = (text: string) => {
    const title = document.createElement('h1');
    title.innerHTML = text
    return title;
}