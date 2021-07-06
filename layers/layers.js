var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_prov_1 = new ol.format.GeoJSON();
var features_prov_1 = format_prov_1.readFeatures(json_prov_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prov_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prov_1.addFeatures(features_prov_1);
var lyr_prov_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_prov_1, 
                style: style_prov_1,
                interactive: true,
    title: 'prov<br />\
    <img src="styles/legend/prov_1_0.png" /> Rendah<br />\
    <img src="styles/legend/prov_1_1.png" /> Sedang<br />\
    <img src="styles/legend/prov_1_2.png" /> Padat<br />'
        });
var format_POIN_2 = new ol.format.GeoJSON();
var features_POIN_2 = format_POIN_2.readFeatures(json_POIN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIN_2.addFeatures(features_POIN_2);
var lyr_POIN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POIN_2, 
                style: style_POIN_2,
                interactive: true,
                title: '<img src="styles/legend/POIN_2.png" /> POIN'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_prov_1.setVisible(true);lyr_POIN_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_prov_1,lyr_POIN_2];
lyr_prov_1.set('fieldAliases', {'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'KODE': 'KODE', 'laki_laki': 'laki_laki', 'perempuan': 'perempuan', 'jumlah': 'jumlah', 'ratio': 'ratio', });
lyr_POIN_2.set('fieldAliases', {'NAMA': 'NAMA', 'KATEGORI': 'KATEGORI', });
lyr_prov_1.set('fieldImages', {'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'KODE': 'Range', 'laki_laki': 'Range', 'perempuan': 'Range', 'jumlah': 'Range', 'ratio': '', });
lyr_POIN_2.set('fieldImages', {'NAMA': '', 'KATEGORI': '', });
lyr_prov_1.set('fieldLabels', {'NAME_0': 'inline label', 'NAME_1': 'inline label', 'KODE': 'inline label', 'laki_laki': 'inline label', 'perempuan': 'inline label', 'jumlah': 'inline label', 'ratio': 'inline label', });
lyr_POIN_2.set('fieldLabels', {'NAMA': 'no label', 'KATEGORI': 'no label', });
lyr_POIN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});