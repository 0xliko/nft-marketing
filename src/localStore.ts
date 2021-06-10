export const loadState = () => {
    const jsonString = localStorage.getItem('state');
    if (jsonString === null) {
        return undefined;
    }
    const json = JSON.parse(jsonString);
    return {
        selectedSubCategories:json.selectedSubCategories
    };
};

export const saveState = (state:any) => {

    try {
        const toStore = {
            selectedSubCategories:state.selectedSubCategories
        };

        const serial = JSON.stringify(toStore);
        localStorage.setItem('state', serial);

    } catch (err) {
        console.log(err);
    }
};
