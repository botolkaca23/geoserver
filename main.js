// Inisialisasi View Map

var mapview = new ol.View({

    center: ol.proj.fromLonLat([97.047382, 5.220018]),

    zoom: 15,

});



// Inisialisasi Peta

var map = new ol.Map({

    target: 'map',

    view: mapview,

});



// Layer Dasar

var osmLayer = new ol.layer.Tile({

    title: 'Open Street Map',

    source: new ol.source.OSM(),

    visible: true,

});



var googleSatLayer = new ol.layer.Tile({

    title: 'Google Satellite',

    visible: false,

    source: new ol.source.XYZ({

        url: 'http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',

        maxZoom: 20,

    }),

});



// Group Layer Dasar

var baseGroup = new ol.layer.Group({

    title: 'Base Maps',

    layers: [osmLayer, googleSatLayer],

});



map.addLayer(baseGroup);



// LayerSwitcher

var layerSwitcher = new ol.control.LayerSwitcher({

    activationMode: 'click',

    startActive: false,

    groupSelectStyle: 'children',

});

map.addControl(layerSwitcher);



// Popup

var container = document.getElementById('popup');

var content = document.getElementById('popup-content');

var closer = document.getElementById('popup-closer');



var popup = new ol.Overlay({

    element: container,

    autoPan: true,

    autoPanAnimation: { duration: 250 },

});



map.addOverlay(popup);



closer.onclick = function () {

    popup.setPosition(undefined);

    closer.blur();

    return false;

};



// Layer Polygon dari GeoServer untuk Keramba

var AirMancurLayer = new ol.layer.Tile({

    title: 'Airmancur',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:air_mancur_arun', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(AirMancurLayer);



// Layer Polygon dari GeoServer untuk Balai Pengajian

var asramaLayer = new ol.layer.Tile({

    title: 'asrama',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:asrama', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(asramaLayer);



// Layer Polygon dari GeoServer untuk bengkel

var bengkelLayer = new ol.layer.Tile({

    title: 'bengkel',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:bengkel', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(bengkelLayer);



// Layer Polygon dari GeoServer untuk Bengkel

var rumahLayer = new ol.layer.Tile({

    title: 'rumah',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:rumah', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(rumahLayer);



// Layer Polygon dari GeoServer untuk Doorsmeer

var danauLayer = new ol.layer.Tile({

    title: 'danau',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:danau', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(danauLayer);



// Layer Polygon dari GeoServer untuk Galon air

var dayahLayer = new ol.layer.Tile({

    title: 'dayah',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:dayah', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(dayahLayer);



// Layer Polygon dari GeoServer untuk Gudang

var gedungLayer = new ol.layer.Tile({

    title: 'gedung',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:gedung', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(gedungLayer);



// Layer Polygon dari GeoServer untuk Hotel

var jalanLayer = new ol.layer.Tile({

    title: 'jalan',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:jalan', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(jalanLayer);



// Layer Polygon dari GeoServer untuk Kantor

var kantorLayer = new ol.layer.Tile({

    title: 'Kantor',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:kantor', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(kantorLayer);



// Layer Polygon dari GeoServer untuk Kedai

var kedaiLayer = new ol.layer.Tile({

    title: 'Kedai',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:kedai', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(kedaiLayer);



// Layer Polygon dari GeoServer untuk Kedai Kopi

var kolamLayer = new ol.layer.Tile({

    title: 'kolam',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:kolam', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(kolamLayer);



// Layer Polygon dari GeoServer untuk Kolam

var kolamLayer = new ol.layer.Tile({

    title: 'Kolam',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:kolam', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(kolamLayer);



// Layer Polygon dari GeoServer untuk Kuburan

var lapanganLayer = new ol.layer.Tile({

    title: 'lapangan',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:lapangan', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(lapanganLayer);



// Layer Polygon dari GeoServer untuk Masjid

var lorongLayer = new ol.layer.Tile({

    title: 'lorong',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:lorong', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(lorongLayer);



// Layer Polygon dari GeoServer untuk Ruko

var masjidLayer = new ol.layer.Tile({

    title: 'masjid',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:masjid', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(masjidLayer);


var p_air_mancur = new ol.layer.Tile({

    title: 'p_air_mancur',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:p_air_mancur', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(p_air_mancur);


var p_asrama = new ol.layer.Tile({

    title: 'p_asrama',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:p_asrama', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(p_asrama);


//pembatasan
var p_danau = new ol.layer.Tile({

    title: 'p_danau',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:p_danau', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(p_danau);


//pembatasan
var penangkaran_rusa = new ol.layer.Tile({

    title: 'penangkaran_rusa',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:penangkaran_rusa', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(penangkaran_rusa);

//pembatasan
var rumah_sakit = new ol.layer.Tile({

    title: 'rumah_sakit',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:rumah_sakit', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(rumah_sakit);


//pembatasan
var sekolah = new ol.layer.Tile({

    title: 'sekolah',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:sekolah', 'TILED': true },

        serverType: 'geoserver',

    }),

});



map.addLayer(sekolah);


//pembatasan
var stadion = new ol.layer.Tile({

    title: 'stadion',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:stadion', 'TILED': true },

        serverType: 'geoserver',

    }),

});

map.addLayer(stadion);


//pembatasan
var studio_radio = new ol.layer.Tile({

    title: 'studio_radio',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:studio_radio', 'TILED': true },

        serverType: 'geoserver',

    }),

});

map.addLayer(studio_radio);


//pembatasan
var supermarket = new ol.layer.Tile({

    title: 'supermarket',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:supermarket', 'TILED': true },

        serverType: 'geoserver',

    }),

});

map.addLayer(supermarket);



//pembatasan
var taman = new ol.layer.Tile({

    title: 'taman',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:taman', 'TILED': true },

        serverType: 'geoserver',

    }),

});

map.addLayer(taman);



//pembatasan
var tambak = new ol.layer.Tile({

    title: 'tambak',

    source: new ol.source.TileWMS({

        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',

        params: { 'LAYERS': 'gisbatuphatbarat:tambak', 'TILED': true },

        serverType: 'geoserver',

    }),

});

map.addLayer(tambak);




// Handle Klik Popup untuk Data

map.on('singleclick', function (evt) {

    content.innerHTML = '';

    var resolution = map.getView().getResolution();

    var kerambaUrl = kerambaLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var balaiUrl = balaiPengajianLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var rumahUrl = rumahLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var bengkelUrl = bengkelLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var doorsmeerUrl = doorsmeerLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var galonairUrl = galonairLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var gudangUrl = gudangLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var hotelUrl = hotelLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var kantorUrl = kantorLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var kedaiUrl = kedaiLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var kedaikopiUrl = kedaikopiLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var kolamUrl = kolamLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var kuburanUrl = kuburanLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var masjidUrl = masjidLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );

    var rukoUrl = rukoLayer.getSource().getFeatureInfoUrl(

        evt.coordinate,

        resolution,

        'EPSG:3857',

        { INFO_FORMAT: 'application/json' }

    );



    if (kerambaUrl) {

        $.getJSON(kerambaUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Jenis Ikan: ${props.jenis_ikn || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas: ${props.luas || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (balaiUrl) {

        $.getJSON(balaiUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlpn || 'N/A'}</p>

                    <p>Status: ${props.status || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (rumahUrl) {

        $.getJSON(rumahUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Informasi Rumah</h3>

                    <p>No Rumah: ${props.no_rmh || 'N/A'}</p>

                    <p>Status Kepala Keluarga: ${props.status_kep || 'N/A'}</p>

                    <p>Jenis Bangunan: ${props.jenis_bgn || 'N/A'}</p>

                    <p>Jenis Lantai: ${props.jenis_lnt || 'N/A'}</p>

                    <p>Pendidikan Tertinggi: ${props.pend_ter || 'N/A'}</p>

                    <p>Pekerjaan: ${props.pekerjaan || 'N/A'}</p>

                    <p>No Telp: ${props.no_telp || 'N/A'}</p>

                    <p>No KTP: ${props.no_ktp || 'N/A'}</p>

                    <p>Jumlah Laki-laki: ${props.jml_laki || 'N/A'}</p>

                    <p>Jumlah Perempuan: ${props.jml_peri || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                    <p>Nama Kepala Keluarga: ${props.nama_kk || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }

    

    if (bengkelUrl) {

        $.getJSON(bengkelUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlpn || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (doorsmeerUrl) {

        $.getJSON(doorsmeerUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (galonairUrl) {

        $.getJSON(galonairUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (gudangUrl) {

        $.getJSON(gudangUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (hotelUrl) {

        $.getJSON(hotelUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (kantorUrl) {

        $.getJSON(kantorUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (kedaiUrl) {

        $.getJSON(kedaiUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (kedaikopiUrl) {

        $.getJSON(kedaikopiUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (kolamUrl) {

        $.getJSON(kolamUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (kuburanUrl) {

        $.getJSON(kuburanUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (masjidUrl) {

        $.getJSON(masjidUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }



    if (rukoUrl) {

        $.getJSON(rukoUrl, function (data) {

            if (data.features.length > 0) {

                var props = data.features[0].properties;

                var popupContent = `

                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>

                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>

                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>

                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>

                `;

                content.innerHTML = popupContent;

                popup.setPosition(evt.coordinate);

            }

        });

    }

});

// Inisialisasi View Map
var mapview = new ol.View({
    center: ol.proj.fromLonLat([97.136457, 5.178044]),
    zoom: 15,
});

// Inisialisasi Peta
var map = new ol.Map({
    target: 'map',
    view: mapview,
});

// Layer Dasar
var osmLayer = new ol.layer.Tile({
    title: 'Open Street Map',
    source: new ol.source.OSM(),
    visible: true,
});

var googleSatLayer = new ol.layer.Tile({
    title: 'Google Satellite',
    visible: false,
    source: new ol.source.XYZ({
        url: 'http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        maxZoom: 20,
    }),
});

// Group Layer Dasar
var baseGroup = new ol.layer.Group({
    title: 'Base Maps',
    layers: [osmLayer, googleSatLayer],
});

map.addLayer(baseGroup);

// LayerSwitcher
var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children',
});
map.addControl(layerSwitcher);

// Popup
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: { duration: 250 },
});

map.addOverlay(popup);

closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

// Layer Polygon dari GeoServer untuk Keramba
var kerambaLayer = new ol.layer.Tile({
    title: 'Keramba',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:keramba', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(kerambaLayer);

// Layer Polygon dari GeoServer untuk Balai Pengajian
var balaiPengajianLayer = new ol.layer.Tile({
    title: 'Balai Pengajian',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:balai_pengajian', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(balaiPengajianLayer);

// Layer Polygon dari GeoServer untuk Rumah
var rumahLayer = new ol.layer.Tile({
    title: 'Rumah',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:rumah', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(rumahLayer);

// Layer Polygon dari GeoServer untuk Bengkel
var bengkelLayer = new ol.layer.Tile({
    title: 'Bengkel',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:bengkel', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(bengkelLayer);

// Layer Polygon dari GeoServer untuk Doorsmeer
var doorsmeerLayer = new ol.layer.Tile({
    title: 'Doorsmeer',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:doorsmeer', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(doorsmeerLayer);

// Layer Polygon dari GeoServer untuk Galon air
var galonairLayer = new ol.layer.Tile({
    title: 'Galon Air',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:galon air', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(galonairLayer);

// Layer Polygon dari GeoServer untuk Gudang
var gudangLayer = new ol.layer.Tile({
    title: 'Gudang',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:gudang', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(gudangLayer);

// Layer Polygon dari GeoServer untuk Hotel
var hotelLayer = new ol.layer.Tile({
    title: 'Hotel',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:hotel', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(hotelLayer);

// Layer Polygon dari GeoServer untuk Kantor
var kantorLayer = new ol.layer.Tile({
    title: 'Kantor',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:kantor', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(kantorLayer);

// Layer Polygon dari GeoServer untuk Kedai
var kedaiLayer = new ol.layer.Tile({
    title: 'Kedai',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:kedai', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(kedaiLayer);

// Layer Polygon dari GeoServer untuk Kedai Kopi
var kedaikopiLayer = new ol.layer.Tile({
    title: 'Kedai Kopi',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:kedai_kopi', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(kedaikopiLayer);

// Layer Polygon dari GeoServer untuk Kolam
var kolamLayer = new ol.layer.Tile({
    title: 'Kolam',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:kolam', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(kolamLayer);

// Layer Polygon dari GeoServer untuk Kuburan
var kuburanLayer = new ol.layer.Tile({
    title: 'Kuburan',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:kuburan', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(kuburanLayer);

// Layer Polygon dari GeoServer untuk Masjid
var masjidLayer = new ol.layer.Tile({
    title: 'Masjid',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:masjid', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(masjidLayer);

// Layer Polygon dari GeoServer untuk Ruko
var rukoLayer = new ol.layer.Tile({
    title: 'Ruko',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:ruko', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(rukoLayer);

// Layer Polygon dari GeoServer untuk Sekolah
var sekolahLayer = new ol.layer.Tile({
    title: 'Sekolah',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:sekolah', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(sekolahLayer);

// Layer Polygon dari GeoServer untuk Rawa
var rawaLayer = new ol.layer.Tile({
    title: 'Rawa',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:rawa', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(rawaLayer);

// Layer Polygon dari GeoServer untuk Tambak
var tambakLayer = new ol.layer.Tile({
    title: 'Tambak',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:tambak', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(tambakLayer);

// Layer Polygon dari GeoServer untuk Tanah Kosong
var tanahkosongLayer = new ol.layer.Tile({
    title: 'Tanah Kosong',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:tanah_kosong', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(tanahkosongLayer);

// Layer Polygon dari GeoServer untuk Terminal
var terminalLayer = new ol.layer.Tile({
    title: 'Terminal',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:terninal', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(terminalLayer);

// Layer Polygon dari GeoServer untuk Stadion
var stadionLayer = new ol.layer.Tile({
    title: 'Stadion',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:stadion', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(stadionLayer);

// Layer Polygon dari GeoServer untuk Tower Sinyal
var towersinyalLayer = new ol.layer.Tile({
    title: 'Tower Sinyal',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gisbatuphatbarat/wms',
        params: { 'LAYERS': 'gisbatuphatbarat:tower sinyal', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(towersinyalLayer);

// Handle Klik Popup untuk Data
map.on('singleclick', function (evt) {
    content.innerHTML = '';
    var resolution = map.getView().getResolution();
    var kerambaUrl = kerambaLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var balaiUrl = balaiPengajianLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var rumahUrl = rumahLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var bengkelUrl = bengkelLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var doorsmeerUrl = doorsmeerLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var galonairUrl = galonairLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var gudangUrl = gudangLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var hotelUrl = hotelLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var kantorUrl = kantorLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var kedaiUrl = kedaiLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var kedaikopiUrl = kedaikopiLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var kolamUrl = kolamLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var kuburanUrl = kuburanLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var masjidUrl = masjidLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var rukoUrl = rukoLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var sekolahUrl = sekolahLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var rawaUrl = rawaLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var tambakUrl = tambakLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var tanahkosongUrl = tanahkosongLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var terminalUrl = terminalLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var stadionUrl = stadionLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );
    var towersinyalUrl = towerinyalLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );

    if (kerambaUrl) {
        $.getJSON(kerambaUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Jenis Ikan: ${props.jenis_ikn || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas: ${props.luas || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (balaiUrl) {
        $.getJSON(balaiUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlpn || 'N/A'}</p>
                    <p>Status: ${props.status || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (rumahUrl) {
        $.getJSON(rumahUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Informasi Rumah</h3>
                    <p>No Rumah: ${props.no_rumah || 'N/A'}</p>
                    <p>Status Kepala Keluarga: ${props.status_kep || 'N/A'}</p>
                    <p>Jenis Bangunan: ${props.jenis_bang || 'N/A'}</p>
                    <p>Jenis Lantai: ${props.jenis_lant || 'N/A'}</p>
                    <p>Pendidikan Tertinggi: ${props.nama_pengh || 'N/A'}</p>
                    <p>Pekerjaan: ${props.pendidikan || 'N/A'}</p>
                    <p>No Telp: ${props.pekerjaan || 'N/A'}</p>
                    <p>No KTP: ${props.jumlah_lak || 'N/A'}</p>
                    <p>Jumlah Laki-laki: ${props.jumlah_per || 'N/A'}</p>
                    <p>Jumlah Perempuan: ${props.total_huni || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bangu || 'N/A'}</p>
                    <p>Nama Kepala Keluarga: ${props.no_ktp || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }
    
    if (bengkelUrl) {
        $.getJSON(bengkelUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlpn || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (doorsmeerUrl) {
        $.getJSON(doorsmeerUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (galonairUrl) {
        $.getJSON(galonairUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (gudangUrl) {
        $.getJSON(gudangUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (hotelUrl) {
        $.getJSON(hotelUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (kantorUrl) {
        $.getJSON(kantorUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (kedaiUrl) {
        $.getJSON(kedaiUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (kedaikopiUrl) {
        $.getJSON(kedaikopiUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (kolamUrl) {
        $.getJSON(kolamUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (kuburanUrl) {
        $.getJSON(kuburanUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (masjidUrl) {
        $.getJSON(masjidUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (rukoUrl) {
        $.getJSON(rukoUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (sekolahUrl) {
        $.getJSON(sekolahUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (rawaUrl) {
        $.getJSON(rawaUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (tambakUrl) {
        $.getJSON(tambakUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (tanahkosongUrl) {
        $.getJSON(tanahkosongUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (terminalUrl) {
        $.getJSON(terminalUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (stadionUrl) {
        $.getJSON(stadionUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }

    if (towersinyalUrl) {
        $.getJSON(towersinyalUrl, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    }
});