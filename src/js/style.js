function updateFeature(feature) {
    $('#featurepics img').removeClass('active').filter('.' + feature).addClass('active');
    $('#featurelist li').removeClass('active').filter('.' + feature).addClass('active');
}

$('#featurelist li').on('click', function (e) {
    var feature = $(e.target).attr('class');
   
    if (feature) {
        feature = $.trim(feature.replace('active', ''));
        updateFeature(feature);
    }
});
	
