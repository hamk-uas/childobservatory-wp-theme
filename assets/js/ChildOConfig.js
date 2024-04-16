oConfig = {
    ...oConfig,
    sitesGeojsonFilename: 'sites.geojson',
    blocksGeojsonFilename: 'blocks.geojson',

    /**
     * A dictionary of color maps for satellite images
     * Each property value should be a color map from getColormap()
     * @type {Object}
     * @property {Object}
     */
    colormaps: {
        //laiImage: getColormap(vegetationIndexColormap, 0, 8),
    },
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
        language: oConfig.language,
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
        language: oConfig.language,
        minZoom: 10,
        maxZoom: 17,
    },
    /**
     * Autozoom site selector map to sites?
     * @type {boolean}
     */
    siteSelectorMapAutoZoom: false,
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
}
