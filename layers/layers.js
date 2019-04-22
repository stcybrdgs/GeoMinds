var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.798000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_2018_CBSA_1 = new ol.format.GeoJSON();
var features_2018_CBSA_1 = format_2018_CBSA_1.readFeatures(json_2018_CBSA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018_CBSA_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_2018_CBSA_1.addFeatures(features_2018_CBSA_1);var lyr_2018_CBSA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018_CBSA_1, 
                style: style_2018_CBSA_1,
                title: '<img src="styles/legend/2018_CBSA_1.png" /> 2018_CBSA'
            });var format_homDep_v3shphomDep_v3_2 = new ol.format.GeoJSON();
var features_homDep_v3shphomDep_v3_2 = format_homDep_v3shphomDep_v3_2.readFeatures(json_homDep_v3shphomDep_v3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_homDep_v3shphomDep_v3_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_homDep_v3shphomDep_v3_2.addFeatures(features_homDep_v3shphomDep_v3_2);var lyr_homDep_v3shphomDep_v3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_homDep_v3shphomDep_v3_2,
maxResolution:28004.466152261964,
 
                style: style_homDep_v3shphomDep_v3_2,
                title: '<img src="styles/legend/homDep_v3shphomDep_v3_2.png" /> homDep_v3.shp homDep_v3'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2018_CBSA_1.setVisible(true);lyr_homDep_v3shphomDep_v3_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2018_CBSA_1,lyr_homDep_v3shphomDep_v3_2];
lyr_2018_CBSA_1.set('fieldAliases', {'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_homDep_v3shphomDep_v3_2.set('fieldAliases', {'Branch': 'Branch', 'Address': 'Address', 'City': 'City', 'State': 'State', 'ZipCode': 'ZipCode', 'Country': 'Country', 'Phone': 'Phone', 'addrtype': 'addrtype', 'addrlocat': 'addrlocat', });
lyr_2018_CBSA_1.set('fieldImages', {'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'MEMI': 'TextEdit', 'MTFCC': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_homDep_v3shphomDep_v3_2.set('fieldImages', {'Branch': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZipCode': 'TextEdit', 'Country': 'TextEdit', 'Phone': 'TextEdit', 'addrtype': 'TextEdit', 'addrlocat': 'TextEdit', });
lyr_2018_CBSA_1.set('fieldLabels', {'CSAFP': 'no label', 'CBSAFP': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'MEMI': 'no label', 'MTFCC': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_homDep_v3shphomDep_v3_2.set('fieldLabels', {'Branch': 'header label', 'Address': 'inline label', 'City': 'inline label', 'State': 'no label', 'ZipCode': 'inline label', 'Country': 'no label', 'Phone': 'inline label', 'addrtype': 'no label', 'addrlocat': 'no label', });
lyr_homDep_v3shphomDep_v3_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});