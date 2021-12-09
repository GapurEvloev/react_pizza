const serSortBy = (name) => ({
    type: "SET_SORT_BY",
    payload: name,
});

const serCategory = (catIndex) => ({
    type: "SET_CATEGORY",
    payload: catIndex,
});