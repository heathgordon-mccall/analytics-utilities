function getDataLayerObject(dataLayerEventName,dataLayerObjectarray)
{

    var dlLength = dataLayerObjectarray.length;

    for (i=0; i < dlLength; i++)
    {
        if (dataLayer[i].event == dataLayerEventName)
        {
            console.log(dataLayer[i].event + " -- :)\n");
            var pageInfoObject = dataLayer[i].page.pageInfo;
            var pageCategoryObject = dataLayer[i].page.category;
            var userProfileInfoObject =dataLayer[i].user.profileInfo;
        }
        else
        {
            console.log(dataLayer[i].event + " -- :(\n");
        }
    }

    return pageInfoObject;

}


// Usage:
// getDataLayerObject("INSERT DATALAYER EVENT NAME HERE", dataLayer);
