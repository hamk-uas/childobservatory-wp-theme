console.log("ChildConfig.js");

var childOConfig = {
    storageUrl: '', // FILL!
    sitesGeojsonFilename: 'sites.geojson',
    blocksGeojsonFilename: 'blocks.geojson',
    /**
     * Configuration object for the site selector map view.
     * Documentarion for the options Object passed to Map constructor applies: https://docs.mapbox.com/mapbox-gl-js/api/map/
     * @type {Object}
     * @property {Object} fitBoundsOptions - Options for fitting the map bounds.
     * @property {number} fitBoundsOptions.padding - Padding value for fitting the map bounds.
     * @property {number} minZoom - Minimum zoom level for the map.
     * @property {number} maxZoom - Maximum zoom level for the map.
     */
    siteSelectorMapView : {
        fitBoundsOptions: {
            padding: 40,
        },
        minZoom: 3,
        maxZoom: 10,
    },
    /**
     * The site map view configuration.
     * Documentarion for the options Object passed to Map constructor applies: https://docs.mapbox.com/mapbox-gl-js/api/map/
     * @type {SiteMapView}
     */
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
