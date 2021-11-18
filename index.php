<?php 

use Kirby\Cms\App as Kirby;
use Kirby\Cms\Response;

Kirby::plugin('rasteiner/k3-reasonable-gallery-preview', [
    'api' => [
        'routes' => [
            [
                'pattern' => 'rasteiner/rgp/(:any)/(:all)',
                'auth' => false,
                'action' => function($w, $id) {
                    // user making request
                    $user = kirby()->user();
                    
                    // does the user have access to the panel?
                    if ($user && $user->hasPanelAccess()) {
                        
                        $scale = [70, 140, 280, 650, 1250];

                        foreach ($scale as $possibleWidth) {
                            if($possibleWidth > $w) {
                                $width = $possibleWidth;
                                break;
                            }
                        }
                        if(!isset($width)) {
                            $width = $scale[count($scale) - 1];
                        }

                        //get image from id
                        $img = site()->image($id);

                        // return redirect to resized image
                        if($img) {
                            $img = $img->resize($w);
                            go($img->url());
                        } else {
                            //return 404
                            return new Response('', null, 404);
                        }
                    }

                    // return 403 
                    return new Response('', null, 403);
                }
            ]
        ]
    ]
]);