var wms_layers = [];


        var lyr_openTopoMap_0 = new ol.layer.Tile({
            'title': 'openTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

 
/* SIGAP KAWASAN HUTAN - WMS JUNI 2026 */

var sigapSource = new ol.source.TileWMS({
    url: 'https://sigap.kehutanan.go.id/sigap-forge-geoserver-2026/sigap/ows',

    params: {
        'LAYERS': 'kwshutan_ar_250k_jun2026',
        'STYLES': '',
        'FORMAT': 'image/png',
        'TRANSPARENT': true,
        'VERSION': '1.1.1'
    },

    serverType: 'geoserver',
    crossOrigin: 'anonymous'
});

var lyr_kwshutan_ar_250k_des2025_1 =
    new ol.layer.Tile({
        title: 'Kawasan Hutan SIGAP - Juni 2026',
        type: 'overlay',
        visible: true,
        opacity: 0.7,
        source: sigapSource
    });

sigapSource.on('tileloadend', function () {
    console.info('[SIGAP WMS] Tile berhasil dimuat');
});

sigapSource.on('tileloaderror', function () {
    console.error('[SIGAP WMS] Tile gagal dimuat');
});

console.info('[SIGAP WMS] Konfigurasi baru aktif');

var format_point_mprilembo_rencana_awal_2 = new ol.format.GeoJSON();
var features_point_mprilembo_rencana_awal_2 = format_point_mprilembo_rencana_awal_2.readFeatures(json_point_mprilembo_rencana_awal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_mprilembo_rencana_awal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_mprilembo_rencana_awal_2.addFeatures(features_point_mprilembo_rencana_awal_2);
var lyr_point_mprilembo_rencana_awal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_mprilembo_rencana_awal_2, 
                style: style_point_mprilembo_rencana_awal_2,
                popuplayertitle: 'point_mprilembo_rencana_awal',
                interactive: true,
                title: '<img src="styles/legend/point_mprilembo_rencana_awal_2.png" /> point_mprilembo_rencana_awal'
            });
var format_poly_mporilembo_rencana_awal_3 = new ol.format.GeoJSON();
var features_poly_mporilembo_rencana_awal_3 = format_poly_mporilembo_rencana_awal_3.readFeatures(json_poly_mporilembo_rencana_awal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poly_mporilembo_rencana_awal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poly_mporilembo_rencana_awal_3.addFeatures(features_poly_mporilembo_rencana_awal_3);
var lyr_poly_mporilembo_rencana_awal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poly_mporilembo_rencana_awal_3, 
                style: style_poly_mporilembo_rencana_awal_3,
                popuplayertitle: 'poly_mporilembo_rencana_awal',
                interactive: true,
                title: '<img src="styles/legend/poly_mporilembo_rencana_awal_3.png" /> poly_mporilembo_rencana_awal'
            });
var format_point_mporilembo_rencana_update_4 = new ol.format.GeoJSON();
var features_point_mporilembo_rencana_update_4 = format_point_mporilembo_rencana_update_4.readFeatures(json_point_mporilembo_rencana_update_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_mporilembo_rencana_update_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_mporilembo_rencana_update_4.addFeatures(features_point_mporilembo_rencana_update_4);
var lyr_point_mporilembo_rencana_update_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_mporilembo_rencana_update_4, 
                style: style_point_mporilembo_rencana_update_4,
                popuplayertitle: 'point_mporilembo_rencana_update',
                interactive: true,
                title: '<img src="styles/legend/point_mporilembo_rencana_update_4.png" /> point_mporilembo_rencana_update'
            });
var format_point_tepal_rencana_awal_5 = new ol.format.GeoJSON();
var features_point_tepal_rencana_awal_5 = format_point_tepal_rencana_awal_5.readFeatures(json_point_tepal_rencana_awal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_tepal_rencana_awal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_tepal_rencana_awal_5.addFeatures(features_point_tepal_rencana_awal_5);
var lyr_point_tepal_rencana_awal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_tepal_rencana_awal_5, 
                style: style_point_tepal_rencana_awal_5,
                popuplayertitle: 'point_tepal_rencana_awal',
                interactive: true,
                title: '<img src="styles/legend/point_tepal_rencana_awal_5.png" /> point_tepal_rencana_awal'
            });
var format_poly_tapal_rencana_awal_6 = new ol.format.GeoJSON();
var features_poly_tapal_rencana_awal_6 = format_poly_tapal_rencana_awal_6.readFeatures(json_poly_tapal_rencana_awal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poly_tapal_rencana_awal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poly_tapal_rencana_awal_6.addFeatures(features_poly_tapal_rencana_awal_6);
var lyr_poly_tapal_rencana_awal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poly_tapal_rencana_awal_6, 
                style: style_poly_tapal_rencana_awal_6,
                popuplayertitle: 'poly_tapal_rencana_awal',
                interactive: true,
                title: '<img src="styles/legend/poly_tapal_rencana_awal_6.png" /> poly_tapal_rencana_awal'
            });
var format_point_tepal_rencana_update_7 = new ol.format.GeoJSON();
var features_point_tepal_rencana_update_7 = format_point_tepal_rencana_update_7.readFeatures(json_point_tepal_rencana_update_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_tepal_rencana_update_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_tepal_rencana_update_7.addFeatures(features_point_tepal_rencana_update_7);
var lyr_point_tepal_rencana_update_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_tepal_rencana_update_7, 
                style: style_point_tepal_rencana_update_7,
                popuplayertitle: 'point_tepal_rencana_update',
                interactive: true,
                title: '<img src="styles/legend/point_tepal_rencana_update_7.png" /> point_tepal_rencana_update'
            });

lyr_openTopoMap_0.setVisible(true);lyr_kwshutan_ar_250k_des2025_1.setVisible(true);lyr_point_mprilembo_rencana_awal_2.setVisible(true);lyr_poly_mporilembo_rencana_awal_3.setVisible(true);lyr_point_mporilembo_rencana_update_4.setVisible(true);lyr_point_tepal_rencana_awal_5.setVisible(true);lyr_poly_tapal_rencana_awal_6.setVisible(true);lyr_point_tepal_rencana_update_7.setVisible(true);
var layersList = [lyr_openTopoMap_0,lyr_kwshutan_ar_250k_des2025_1,lyr_point_mprilembo_rencana_awal_2,lyr_poly_mporilembo_rencana_awal_3,lyr_point_mporilembo_rencana_update_4,lyr_point_tepal_rencana_awal_5,lyr_poly_tapal_rencana_awal_6,lyr_point_tepal_rencana_update_7];
lyr_point_mprilembo_rencana_awal_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'FolderPath': 'FolderPath', 'F_2021': 'F_2021', 'N_KH': 'N_KH', 'POSISI': 'POSISI', 'Kode_Prov': 'Kode_Prov', 'ID_PPKH': 'ID_PPKH', 'Nama_PPKH': 'Nama_PPKH', 'No_PPKH': 'No_PPKH', 'Tgl_PPKH': 'Tgl_PPKH', 'Luas_PPKH': 'Luas_PPKH', 'Kode_Guna': 'Kode_Guna', 'Jenis_PPKH': 'Jenis_PPKH', 'Status': 'Status', 'Keterangan': 'Keterangan', 'Tgl_Berakh': 'Tgl_Berakh', 'Kabupaten': 'Kabupaten', 'X': 'X', 'Y': 'Y', });
lyr_poly_mporilembo_rencana_awal_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'POSISI': 'POSISI', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'LUAS': 'LUAS', });
lyr_point_mporilembo_rencana_update_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_point_tepal_rencana_awal_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'F_2021': 'F_2021', 'N_KH': 'N_KH', 'POSISI': 'POSISI', 'Kode_Prov': 'Kode_Prov', 'ID_PPKH': 'ID_PPKH', 'Nama_PPKH': 'Nama_PPKH', 'No_PPKH': 'No_PPKH', 'Tgl_PPKH': 'Tgl_PPKH', 'Luas_PPKH': 'Luas_PPKH', 'Kode_Guna': 'Kode_Guna', 'Jenis_PPKH': 'Jenis_PPKH', 'Status': 'Status', 'Keterangan': 'Keterangan', 'Tgl_Berakh': 'Tgl_Berakh', 'Kabupaten': 'Kabupaten', });
lyr_poly_tapal_rencana_awal_6.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'LLLL': 'LLLL', 'l': 'l', 'p': 'p', });
lyr_point_tepal_rencana_update_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'nomor_urut': 'nomor_urut', 'layer': 'layer', 'path': 'path', });
lyr_point_mprilembo_rencana_awal_2.set('fieldImages', {'fid': '', 'Name': '', 'FolderPath': '', 'F_2021': '', 'N_KH': '', 'POSISI': '', 'Kode_Prov': '', 'ID_PPKH': '', 'Nama_PPKH': '', 'No_PPKH': '', 'Tgl_PPKH': '', 'Luas_PPKH': '', 'Kode_Guna': '', 'Jenis_PPKH': '', 'Status': '', 'Keterangan': '', 'Tgl_Berakh': '', 'Kabupaten': '', 'X': '', 'Y': '', });
lyr_poly_mporilembo_rencana_awal_3.set('fieldImages', {'fid': '', 'Id': '', 'POSISI': '', 'BUFF_DIST': '', 'ORIG_FID': '', 'LUAS': '', });
lyr_point_mporilembo_rencana_update_4.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_point_tepal_rencana_awal_5.set('fieldImages', {'Name': '', 'FolderPath': '', 'F_2021': '', 'N_KH': '', 'POSISI': '', 'Kode_Prov': '', 'ID_PPKH': '', 'Nama_PPKH': '', 'No_PPKH': '', 'Tgl_PPKH': '', 'Luas_PPKH': '', 'Kode_Guna': '', 'Jenis_PPKH': '', 'Status': '', 'Keterangan': '', 'Tgl_Berakh': '', 'Kabupaten': '', });
lyr_poly_tapal_rencana_awal_6.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', 'LLLL': 'Range', 'l': 'TextEdit', 'p': 'TextEdit', });
lyr_point_tepal_rencana_update_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'nomor_urut': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_point_mprilembo_rencana_awal_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'F_2021': 'no label', 'N_KH': 'no label', 'POSISI': 'no label', 'Kode_Prov': 'no label', 'ID_PPKH': 'no label', 'Nama_PPKH': 'no label', 'No_PPKH': 'no label', 'Tgl_PPKH': 'no label', 'Luas_PPKH': 'no label', 'Kode_Guna': 'no label', 'Jenis_PPKH': 'no label', 'Status': 'no label', 'Keterangan': 'no label', 'Tgl_Berakh': 'no label', 'Kabupaten': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_poly_mporilembo_rencana_awal_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'POSISI': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'LUAS': 'no label', });
lyr_point_mporilembo_rencana_update_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_point_tepal_rencana_awal_5.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'F_2021': 'no label', 'N_KH': 'no label', 'POSISI': 'no label', 'Kode_Prov': 'no label', 'ID_PPKH': 'no label', 'Nama_PPKH': 'no label', 'No_PPKH': 'no label', 'Tgl_PPKH': 'no label', 'Luas_PPKH': 'no label', 'Kode_Guna': 'no label', 'Jenis_PPKH': 'no label', 'Status': 'no label', 'Keterangan': 'no label', 'Tgl_Berakh': 'no label', 'Kabupaten': 'no label', });
lyr_poly_tapal_rencana_awal_6.set('fieldLabels', {'Id': 'no label', 'LUAS': 'no label', 'LLLL': 'no label', 'l': 'no label', 'p': 'no label', });
lyr_point_tepal_rencana_update_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'nomor_urut': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_point_tepal_rencana_update_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
