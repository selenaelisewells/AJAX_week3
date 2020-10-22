async function fetchData(dataresource) {
    let resource = await fetch(dataresource).then(response => {
        //bang operator - means "does not equal" (or a falsy value)
        if (response.status !== 200) {
            throw new Error(`DANGER WE WALKERS OUTSIDE! Error ${response.status}`);
        }

        return response;
    })

    //if we get success, then we can return back our resource
    let dataset = await resource.json();

    return dataset;

}

export { fetchData };