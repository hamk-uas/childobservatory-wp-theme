<?php 
function childobservatory_register_styles() {
    wp_enqueue_style('childobservatory-ChildDataViewer',get_theme_file_uri("/assets/css/ChildDataViewer.css"),array(),wp_get_theme()->version,'all');
}

add_action('wp_enqueue_scripts','childobservatory_register_styles', 11);

wp_enqueue_script('observatory-markdown-it-js','https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.1/markdown-it.min.js',array(),wp_get_theme()->version,true);
wp_enqueue_script('observatory-proj4','https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.7.5/proj4.min.js',array(),wp_get_theme()->version,true);
wp_enqueue_script('observatory-ODataViewerCoreJs-js',get_parent_theme_file_uri("/assets/js/ODataViewerCore.js"),array(),wp_get_theme()->version,true);
wp_enqueue_script('childobservatory-ChildConfigJS',get_theme_file_uri("/assets/js/ChildConfig.js"),array(),wp_get_theme()->version,true);