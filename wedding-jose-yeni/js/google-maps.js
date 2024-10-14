// Initialize and add the map
let mapCatedral;

async function initMapCatedral() {
    // The location
    const position = { lat: 4.15019, lng: -74.88513 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered
    mapCatedral = new Map(document.getElementById("mapCatedral"), {
        zoom: 15,
        center: position,
        mapId: "MAP_CATEDRAL_ID",
    });

    // The marker, positioned
    const marker = new AdvancedMarkerElement({
        map: mapCatedral,
        position: position,
        title: "Catedral",
    });
}

initMapCatedral();

// Initialize and add the map
let mapCasaBlanca;

async function initMapCasaBlanca() {
    // The location
    const position = { lat: 4.18379, lng: -74.94657 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered
    mapCasaBlanca = new Map(document.getElementById("mapCasaBlanca"), {
        zoom: 15,
        center: position,
        mapId: "MAP_CASA_BLANCA_ID",
    });

    // The marker, positioned
    const marker = new AdvancedMarkerElement({
        map: mapCasaBlanca,
        position: position,
        title: "CasaBlanca",
    });
}

initMapCasaBlanca();