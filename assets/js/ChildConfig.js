console.log("ChildConfig.js");

var childOConfig = {
    storageUrl: '', // FILL!
    sitesGeojsonFilename: 'sites.geojson',
    blocksGeojsonFilename: 'blocks.geojson',
    siteSelectorMapView : {
        fitBoundsOptions: {
            padding: 40,
        },
        minZoom: 3,
        maxZoom: 10,
    },
    siteMapView : {
        minZoom: 10,
        maxZoom: 17,
    },
    "charts": [
        {
            "id": "global",
            "title": "Every chart",
            "hidden": true,
            "sourceTypes": [
                {
                    "id": "mgmt_event",
                    "events": true
                }
            ]
        },
        {
            "id": "satelliteImages",
            "title": "Satellite images",
            "legendItemTypeList": [
            ],
            "sourceTypes": [
            ],
        }
    ],
    mapBoxAccessToken: "", // FILL!
    mapStyleURL: "" // FILL!
}
