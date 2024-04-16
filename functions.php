<?php 
function childobservatory_data_viewer_register_styles_and_scripts() {
    // Enqueue stylesheets
    wp_enqueue_style('childobservatory-ChildODataViewer-css',get_theme_file_uri("/assets/css/ChildODataViewer.css"),array(),wp_get_theme()->version,'all');

    // Register Child Observatory configuration script
    wp_register_script('childobservatory-ChildOConfig-js',get_theme_file_uri("/assets/js/ChildOConfig.js"),array('observatory-OConfig-js'),wp_get_theme()->version,true);

    // Get ready to launch data viewer for certain pages, requiring page-specific configuration js files
    if ( is_page(array('data')) ) {
        wp_enqueue_script('childobservatory-ChildOConfig-js');
    }
}

add_action('wp_enqueue_scripts','childobservatory_data_viewer_register_styles_and_scripts');