console.log("ChildConfig.js");

var childOConfig = {
    storageUrl: '', // FILL!
    sitesGeojsonFilename: 'sites.geojson',
    blocksGeojsonFilename: 'blocks.geojson',
    chartsJson: {
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
        ]
    },
    mapBoxAccessToken: "", // FILL!
    mapStyleURL: "" // FILL!
}
