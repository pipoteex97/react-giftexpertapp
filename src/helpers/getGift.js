
export const getGift = async( categoria ) => {
    console.log("En el gitgift esta"+categoria);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7vlo43mE9BRM3A6BCcg4yCTi07cr0tCZ&q=${categoria}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const cosas = data.map(valor => {
        return {
            id: valor.id,
            titulo : valor.title,
            imagen: valor.images.downsized_medium.url
        }
    });
    console.log(cosas);
    return cosas;
}

