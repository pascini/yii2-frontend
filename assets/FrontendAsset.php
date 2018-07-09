<?php

namespace raphaelbsr\frontend\assets;

use yii\web\AssetBundle;

/**
 * Description of FrontendAsset
 *
 * @author rapha
 */
class FrontendAsset extends AssetBundle {

//    public $basePath = '@webroot';
//    public $baseUrl = '@web';
    public $sourcePath = '@vendor/raphaelbsr/yii2-frontend/assets/src';
    public $css = [
    ];
    public $js = [
        'js/alerts.js',
        'js/app.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
        'raphaelbsr\frontend\assets\SweetAlertAsset',
        'raphaelbsr\showloading\ShowLoadingAsset',
    ];

}
