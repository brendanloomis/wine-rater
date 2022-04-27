export const findWine = (wines, wineId) => 
    wines.find(wine => wine.wine_id === parseInt(wineId));