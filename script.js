(function(){
    var script = {
 "shadow": false,
 "downloadEnabled": false,
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.IconButton_9C14CADC_8CCB_3DC9_41BC_461741C75384",
  "this.Image_F612EB75_F917_2C69_41C1_5ED9D14E5845",
  "this.Image_E675884A_F931_EBBA_41E1_DC89E2A970FB"
 ],
 "width": "100%",
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "idleSequence": "this.sequence_F4FC2E63_FF2C_194C_41EA_C3DBC1EC007B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F4FC1E63_FF2C_194C_41D2_E7068C5C7C61",
 "initialSequence": "this.sequence_F4FC2E63_FF2C_194C_41EA_C3DBC1EC007B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F3372EA1_FF2C_19CC_41E7_11403C54419B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3371EA1_FF2C_19CC_41C4_441AA49359E7",
 "initialSequence": "this.sequence_F3372EA1_FF2C_19CC_41E7_11403C54419B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "media": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746_camera"
  },
  {
   "media": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_camera"
  },
  {
   "media": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_camera"
  },
  {
   "media": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_camera"
  },
  {
   "media": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_camera"
  },
  {
   "media": "this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_camera"
  },
  {
   "media": "this.panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_camera"
  },
  {
   "media": "this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "idleSequence": "this.sequence_F3D47F5F_FF2C_1773_41B5_255CCA4955D5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3D44F5F_FF2C_1773_41D7_0A88FE832E1D",
 "initialSequence": "this.sequence_F3D47F5F_FF2C_1773_41B5_255CCA4955D5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F4D2CE82_FF2C_19CC_4198_BDE994FE4163",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F4D2BE82_FF2C_19CC_41DB_58F6F5E598F0",
 "initialSequence": "this.sequence_F4D2CE82_FF2C_19CC_4198_BDE994FE4163",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 107,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_9C14CADC_8CCB_3DC9_41BC_461741C75384",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true
},
{
 "idleSequence": "this.sequence_F36B9EBE_FF2C_1935_41EA_00D36EF9A0F6",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F36B7EBE_FF2C_1935_41E3_5EE1AE05DCA6",
 "initialSequence": "this.sequence_F36B9EBE_FF2C_1935_41EA_00D36EF9A0F6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F4EB0E53_FF2C_194C_41E7_4BFEA9931261",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F4E8FE53_FF2C_194C_41E3_168440DF2201",
 "initialSequence": "this.sequence_F4EB0E53_FF2C_194C_41E7_4BFEA9931261",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.08,
  "hfov": 98,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 118,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F35C8EDD_FF2C_1974_41CB_A2411D652692",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F35C6EDD_FF2C_1974_41E8_2375B7552303",
 "initialSequence": "this.sequence_F35C8EDD_FF2C_1974_41CB_A2411D652692",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.47,
  "hfov": 118,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F3ADDEE7_FF2C_1954_41EB_848C8A918053",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3ADBEE7_FF2C_1954_41EA_FD09D477E3CE",
 "initialSequence": "this.sequence_F3ADDEE7_FF2C_1954_41EB_848C8A918053",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F3E7CF2E_FF2C_18D5_41D7_02E9744F5670",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3E78F2E_FF2C_18D5_41E4_38A6D8DF6224",
 "initialSequence": "this.sequence_F3E7CF2E_FF2C_18D5_41D7_02E9744F5670",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 107,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F34EBED3_FF2C_194C_41EC_18D1C0F2F784",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F34E9ED3_FF2C_194C_41E6_7333A7BC9406",
 "initialSequence": "this.sequence_F34EBED3_FF2C_194C_41EC_18D1C0F2F784",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "04. Agnishtika 360 06",
 "hfovMin": "135%",
 "id": "panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1",
 "overlays": [
  "this.overlay_6DB5B4D8_74E8_B1B6_41C0_315223EBD235",
  "this.overlay_6DEED622_74E8_B09A_41D9_815FAD97AE23",
  "this.overlay_6E4B3546_74E8_509D_41B6_3DF8BFBD1F29",
  "this.overlay_6B07EC10_7539_B0B5_41C9_37CD1BB57087"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_t.jpg",
 "hfovMax": 142
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F3F60F41_FF2C_174C_41E3_86E6B63A2ADC",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3F7FF41_FF2C_174C_41EC_0EE5C9C11B52",
 "initialSequence": "this.sequence_F3F60F41_FF2C_174C_41E3_86E6B63A2ADC",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 11.76
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F30ABEAA_FF2C_19DC_41E3_9D784B8FED70",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F30AAEAA_FF2C_19DC_41E1_46908001A91E",
 "initialSequence": "this.sequence_F30ABEAA_FF2C_19DC_41E3_9D784B8FED70",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -41.88,
  "hfov": 121,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F4CBEE72_FF2C_194D_41E0_3ADB79A7703E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F4CBDE72_FF2C_194D_41ED_52327BBA7D1F",
 "initialSequence": "this.sequence_F4CBEE72_FF2C_194D_41E0_3ADB79A7703E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F31A6EB4_FF2C_1934_41DC_84FCC1DCFF8C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F31A5EB4_FF2C_1934_41E9_D3457E9AE06C",
 "initialSequence": "this.sequence_F31A6EB4_FF2C_1934_41DC_84FCC1DCFF8C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F3811F10_FF2C_18CC_41C4_ABFB866C353E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F386FF10_FF2C_18CC_41D1_424240DB2A7F",
 "initialSequence": "this.sequence_F3811F10_FF2C_18CC_41C4_ABFB866C353E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.47,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "class": "PanoramaCamera"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "children": [
  {
   "label": "04. Agnishtika 360 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "04. Agnishtika 360 06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "04. Agnishtika 360 07",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "04. Agnishtika 360 02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "04. Agnishtika 360 03",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "04. Agnishtika 360 04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "4. Agnishtika 360 08 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "04. Agnishtika 360 05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "label": "Media",
 "id": "Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_6A4998F2_7318_F17A_41BD_382D20E30746_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 107,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "04. Agnishtika 360 01",
 "hfovMin": "135%",
 "id": "panorama_6A4998F2_7318_F17A_41BD_382D20E30746",
 "overlays": [
  "this.overlay_6CDDDE1A_74E9_B0AA_41CA_99DD9F2CA50D",
  "this.overlay_6D48D197_74F8_B3BB_41A1_B76C1002FFAF",
  "this.overlay_6DA4637A_74F8_D775_41DA_C8EE899CD558"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_t.jpg",
 "hfovMax": 141
},
{
 "idleSequence": "this.sequence_F4917E43_FF2C_1953_41D5_6F5918723468",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F4916E43_FF2C_1953_41BF_339FBF63AA54",
 "initialSequence": "this.sequence_F4917E43_FF2C_1953_41D5_6F5918723468",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F3268E91_FF2C_19CF_41EB_4AAB94504F04",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3266E91_FF2C_19CF_41E9_5953899A4915",
 "initialSequence": "this.sequence_F3268E91_FF2C_19CF_41EB_4AAB94504F04",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 118,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "4. Agnishtika 360 08 01",
 "id": "panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293",
 "overlays": [
  "this.overlay_C9EAD45E_C433_0ADC_41D3_A3F27F179958"
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_t.jpg",
 "hfovMax": 133
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "04. Agnishtika 360 02",
 "hfovMin": "135%",
 "id": "panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A",
 "overlays": [
  "this.overlay_6F8FD10A_7518_D0AA_41DC_73A4C8097C7B",
  "this.overlay_6EF5E289_7518_7196_41D1_E56F330A143E",
  "this.overlay_6F6B49C9_7519_B396_41A5_7A456C274275",
  "this.overlay_6F1807E2_7518_DF9A_41DD_068D691F6665"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_t.jpg",
 "hfovMax": 137
},
{
 "idleSequence": "this.sequence_F4DF8E82_FF2C_19CC_41EA_053CA89BA5C0",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F4DF7E82_FF2C_19CC_41E7_5F45C2BD6E39",
 "initialSequence": "this.sequence_F4DF8E82_FF2C_19CC_41EA_053CA89BA5C0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "04. Agnishtika 360 07",
 "hfovMin": "135%",
 "id": "panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C",
 "overlays": [
  "this.overlay_6EEABABA_74E8_71F5_41B0_9C634FEE0ABD",
  "this.overlay_6EABFE61_7518_D096_41AD_1C90F63C4503",
  "this.overlay_6858F1A3_7518_739A_41D5_EA2775D6338F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_t.jpg",
 "hfovMax": 141
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "04. Agnishtika 360 03",
 "hfovMin": "135%",
 "id": "panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230",
 "overlays": [
  "this.overlay_6851F41E_7518_B0AD_4186_2AD87F0195E4",
  "this.overlay_68DE85E0_7518_7396_41C6_C2DBA8088455",
  "this.overlay_6880C417_7528_50BA_41DB_9D8B4254225C",
  "this.overlay_6F87997A_7528_B36A_41B1_B3F6D834D854",
  "this.overlay_695D461C_7528_50AE_41AB_AF61A52D5A50",
  "this.overlay_69EDF489_752F_D196_41D5_A4011483F6E3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_t.jpg",
 "hfovMax": 122
},
{
 "idleSequence": "this.sequence_F3795EC8_FF2C_195D_41D5_43FA22F59D2C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3794EC8_FF2C_195D_41BB_3E63BFD31E57",
 "initialSequence": "this.sequence_F3795EC8_FF2C_195D_41D5_43FA22F59D2C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F3A3AEEF_FF2C_1954_41EF_9CCB40A1125C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3A39EEF_FF2C_1954_41D4_A3F5872E44F5",
 "initialSequence": "this.sequence_F3A3AEEF_FF2C_1954_41EF_9CCB40A1125C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 107,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F3912F22_FF2C_18CD_41EB_477961BBD67E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F396FF22_FF2C_18CD_41E0_EEE751210148",
 "initialSequence": "this.sequence_F3912F22_FF2C_18CD_41EB_477961BBD67E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.35,
  "hfov": 98,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F4F62E63_FF2C_194C_41CF_3ED64C58649F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F4F60E63_FF2C_194C_41EE_415D2CD70EC5",
 "initialSequence": "this.sequence_F4F62E63_FF2C_194C_41CF_3ED64C58649F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "04. Agnishtika 360 05",
 "hfovMin": "135%",
 "id": "panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134",
 "overlays": [
  "this.overlay_6A89F9B7_7528_73FA_41D0_064AB33AA0A9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_t.jpg",
 "hfovMax": 120
},
{
 "idleSequence": "this.sequence_F3B31F04_FF2C_18D4_41C4_FB409C293FC1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3B30F04_FF2C_18D4_41EE_BE29E3534DBC",
 "initialSequence": "this.sequence_F3B31F04_FF2C_18D4_41C4_FB409C293FC1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.2,
  "hfov": 111,
  "class": "PanoramaCameraPosition",
  "pitch": 8.08
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 121,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "04. Agnishtika 360 04",
 "hfovMin": "135%",
 "id": "panorama_6BF205AA_7318_B3EA_41B9_094276BD3878",
 "overlays": [
  "this.overlay_6A2AB26F_7528_F16A_41DB_08DCA6B838A2",
  "this.overlay_6B2D34C7_7528_519A_41BD_410C2F3DFA3D",
  "this.overlay_CA5531CD_C435_0A3C_41D2_2F3D6B1C3DD4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_F4853E2D_FF2C_18D7_41E4_4A410B952031",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_t.jpg",
 "hfovMax": 140
},
{
 "idleSequence": "this.sequence_F3C44F4D_FF2C_1754_41EF_76E54AA62B11",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F3C43F4D_FF2C_1754_41E4_313201C5B1D5",
 "initialSequence": "this.sequence_F3C44F4D_FF2C_1754_41EF_76E54AA62B11",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.82,
  "hfov": 98,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_9C14CADC_8CCB_3DC9_41BC_461741C75384",
 "width": 47.8,
 "right": "1.5%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "1.26%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 55.02,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_9C14CADC_8CCB_3DC9_41BC_461741C75384.png",
 "data": {
  "name": "IconButton12329"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 512,
 "maxWidth": 768,
 "id": "Image_F612EB75_F917_2C69_41C1_5ED9D14E5845",
 "left": "3.49%",
 "width": "7.586%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_F612EB75_F917_2C69_41C1_5ED9D14E5845.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "2.45%",
 "propagateClick": true,
 "minWidth": 1,
 "height": "9.299%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4223"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 947,
 "maxWidth": 947,
 "id": "Image_E675884A_F931_EBBA_41E1_DC89E2A970FB",
 "width": "8.948%",
 "right": "0%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_E675884A_F931_EBBA_41E1_DC89E2A970FB.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "1.57%",
 "propagateClick": true,
 "minWidth": 1,
 "height": "11.273%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image8844"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F4FC2E63_FF2C_194C_41EA_C3DBC1EC007B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3372EA1_FF2C_19CC_41E7_11403C54419B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3D47F5F_FF2C_1773_41B5_255CCA4955D5",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F4D2CE82_FF2C_19CC_4198_BDE994FE4163",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F36B9EBE_FF2C_1935_41EA_00D36EF9A0F6",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F4EB0E53_FF2C_194C_41E7_4BFEA9931261",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F35C8EDD_FF2C_1974_41CB_A2411D652692",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3ADDEE7_FF2C_1954_41EB_848C8A918053",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3E7CF2E_FF2C_18D5_41D7_02E9744F5670",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F34EBED3_FF2C_194C_41EC_18D1C0F2F784",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.32,
   "yaw": -15.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.03
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C, this.camera_F3B30F04_FF2C_18D4_41EE_BE29E3534DBC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519ACC75_7538_717E_41DB_81752A00D8FD",
   "pitch": -39.03,
   "hfov": 9.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -15.7
  }
 ],
 "id": "overlay_6DB5B4D8_74E8_B1B6_41C0_315223EBD235",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.75,
   "yaw": -19.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.52
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230, this.camera_F396FF22_FF2C_18CD_41E0_EEE751210148); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519B3C76_7538_717A_41D4_348E57383C12",
   "pitch": -10.52,
   "hfov": 7.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -19.39
  }
 ],
 "id": "overlay_6DEED622_74E8_B09A_41D9_815FAD97AE23",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.03,
   "yaw": -16.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.6
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A, this.camera_F386FF10_FF2C_18CC_41D1_424240DB2A7F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519B9C76_7538_717A_41C9_EC9D2CA0E129",
   "pitch": -1.6,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.53
  }
 ],
 "id": "overlay_6E4B3546_74E8_509D_41B6_3DF8BFBD1F29",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.54,
   "yaw": 158.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.94
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746, this.camera_F3E78F2E_FF2C_18D5_41E4_38A6D8DF6224); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6AE0AE03_7538_F09A_41A4_AB6A8D39AEE7",
   "pitch": -42.94,
   "hfov": 17.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.41
  }
 ],
 "id": "overlay_6B07EC10_7539_B0B5_41C9_37CD1BB57087",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3F60F41_FF2C_174C_41E3_86E6B63A2ADC",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F30ABEAA_FF2C_19DC_41E3_9D784B8FED70",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F4CBEE72_FF2C_194D_41E0_3ADB79A7703E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F31A6EB4_FF2C_1934_41DC_84FCC1DCFF8C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3811F10_FF2C_18CC_41C4_ABFB866C353E",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.79,
   "yaw": -11.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.4
  }
 ],
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1, this.camera_F3D44F5F_FF2C_1773_41D7_0A88FE832E1D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_682F2910_74FF_D0B6_41D7_858EA6283981",
   "pitch": -8.4,
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -11.2
  }
 ],
 "id": "overlay_6CDDDE1A_74E9_B0AA_41CA_99DD9F2CA50D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.56,
   "yaw": 3.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.38
  }
 ],
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C, this.camera_F3F7FF41_FF2C_174C_41EC_0EE5C9C11B52); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_682E4910_74FF_D0B6_41CE_49A402673856",
   "pitch": -0.38,
   "hfov": 6.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.52
  }
 ],
 "id": "overlay_6D48D197_74F8_B3BB_41A1_B76C1002FFAF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.31,
   "yaw": -8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.43
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230, this.camera_F3C43F4D_FF2C_1754_41E4_313201C5B1D5); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_2_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ]
   },
   "pitch": 7.43,
   "yaw": -8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DA4637A_74F8_D775_41DA_C8EE899CD558",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F4917E43_FF2C_1953_41D5_6F5918723468",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3268E91_FF2C_19CF_41EB_4AAB94504F04",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": -41.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.6
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_CAF9BF90_C437_1625_41E2_04D3446C7A02",
   "pitch": -23.6,
   "hfov": 13.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -41.24
  }
 ],
 "id": "overlay_C9EAD45E_C433_0ADC_41D3_A3F27F179958",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.36,
   "yaw": 30.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.17
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C, this.camera_F4F60E63_FF2C_194C_41EE_415D2CD70EC5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519CAC76_7538_717A_41DC_191F050B3B97",
   "pitch": -25.17,
   "hfov": 8.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.89
  }
 ],
 "id": "overlay_6F8FD10A_7518_D0AA_41DC_73A4C8097C7B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.29,
   "yaw": 42.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.22
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1, this.camera_F4DF7E82_FF2C_19CC_41E7_5F45C2BD6E39); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519D1C77_7538_717A_41B9_597FB3765430",
   "pitch": -26.22,
   "hfov": 8.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 42.48
  }
 ],
 "id": "overlay_6EF5E289_7518_7196_41D1_E56F330A143E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.05,
   "yaw": 42.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.48
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746, this.camera_F4D2BE82_FF2C_19CC_41DB_58F6F5E598F0); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519D2C77_7538_717A_41B6_80B910D42239",
   "pitch": -11.48,
   "hfov": 9.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 42.79
  }
 ],
 "id": "overlay_6F6B49C9_7519_B396_41A5_7A456C274275",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.7,
   "yaw": 41.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.51
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230, this.camera_F4CBDE72_FF2C_194D_41ED_52327BBA7D1F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519DBC77_7538_717A_4173_ADD02DF75354",
   "pitch": -33.51,
   "hfov": 7.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 41.4
  }
 ],
 "id": "overlay_6F1807E2_7518_DF9A_41DD_068D691F6665",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F4DF8E82_FF2C_19CC_41EA_053CA89BA5C0",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.44,
   "yaw": -96.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.31
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1, this.camera_F4FC1E63_FF2C_194C_41D2_E7068C5C7C61); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519BDC76_7538_717A_41D4_509F84F906DB",
   "pitch": -45.31,
   "hfov": 8.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -96.51
  }
 ],
 "id": "overlay_6EEABABA_74E8_71F5_41B0_9C634FEE0ABD",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.34,
   "yaw": -18.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.21
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230, this.camera_F4E8FE53_FF2C_194C_41E3_168440DF2201); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_519C1C76_7538_717A_41D4_85BF2028CE95",
   "pitch": 7.21,
   "hfov": 12.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -18.35
  }
 ],
 "id": "overlay_6EABFE61_7518_D096_41AD_1C90F63C4503",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.35,
   "yaw": -17.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.99
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A, this.camera_F4916E43_FF2C_1953_41BF_339FBF63AA54); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_519C7C76_7538_717A_41DC_67BF5A082DB0",
   "pitch": 14.99,
   "hfov": 7.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.37
  }
 ],
 "id": "overlay_6858F1A3_7518_739A_41D5_EA2775D6338F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.09,
   "yaw": -51.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.32
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A, this.camera_F3794EC8_FF2C_195D_41BB_3E63BFD31E57); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519DFC77_7538_717A_41CC_466DAE5819AA",
   "pitch": -9.32,
   "hfov": 23.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.82
  }
 ],
 "id": "overlay_6851F41E_7518_B0AD_4186_2AD87F0195E4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.29,
   "yaw": 105.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.82
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C, this.camera_F36B7EBE_FF2C_1935_41E3_5EE1AE05DCA6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519E2C77_7538_717A_41B9_FDD3BE5AC664",
   "pitch": -33.82,
   "hfov": 13.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 105.08
  }
 ],
 "id": "overlay_68DE85E0_7518_7396_41C6_C2DBA8088455",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.32,
   "yaw": 130,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.91
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1, this.camera_F3ADBEE7_FF2C_1954_41EA_FD09D477E3CE); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519E9C77_7538_717A_41DA_2062029D0A1B",
   "pitch": -35.91,
   "hfov": 8.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 130
  }
 ],
 "id": "overlay_6880C417_7528_50BA_41DB_9D8B4254225C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.23,
   "yaw": 133.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.83
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746, this.camera_F3A39EEF_FF2C_1954_41D4_A3F5872E44F5); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519ECC77_7538_717A_41C8_6362A7C83F3F",
   "pitch": -10.83,
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 133.26
  }
 ],
 "id": "overlay_6F87997A_7528_B36A_41B1_B3F6D834D854",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.62,
   "yaw": 13.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.6
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878, this.camera_F34E9ED3_FF2C_194C_41E6_7333A7BC9406); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519F3C77_7538_717A_41D5_26765922A1B5",
   "pitch": -3.6,
   "hfov": 7.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 13.48
  }
 ],
 "id": "overlay_695D461C_7528_50AE_41AB_AF61A52D5A50",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.74,
   "yaw": 2.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.7
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134, this.camera_F35C6EDD_FF2C_1974_41E8_2375B7552303); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519F6C78_7538_7176_41DB_D8695E082D8E",
   "pitch": 4.7,
   "hfov": 5.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.53
  }
 ],
 "id": "overlay_69EDF489_752F_D196_41D5_A4011483F6E3",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3795EC8_FF2C_195D_41D5_43FA22F59D2C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3A3AEEF_FF2C_1954_41EF_9CCB40A1125C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3912F22_FF2C_18CD_41EB_477961BBD67E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F4F62E63_FF2C_194C_41CF_3ED64C58649F",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": -12.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.51
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878, this.camera_F31A5EB4_FF2C_1934_41E9_D3457E9AE06C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_51906C78_7538_7176_40C6_7FBCF3A65000",
   "pitch": -22.51,
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -12.87
  }
 ],
 "id": "overlay_6A89F9B7_7528_73FA_41D0_064AB33AA0A9",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3B31F04_FF2C_18D4_41C4_FB409C293FC1",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.15,
   "yaw": 49.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.21
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A, this.camera_F3371EA1_FF2C_19CC_41C4_441AA49359E7); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_519FFC78_7538_7176_41A7_A14B2C17396C",
   "pitch": -8.21,
   "hfov": 7.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 49.4
  }
 ],
 "id": "overlay_6A2AB26F_7528_F16A_41DB_08DCA6B838A2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.64,
   "yaw": 157.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.08
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134, this.camera_F3266E91_FF2C_19CF_41E9_5953899A4915); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_51903C78_7538_7176_4190_167031AA80D8",
   "pitch": 8.08,
   "hfov": 12.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.55
  }
 ],
 "id": "overlay_6B2D34C7_7528_519A_41BD_410C2F3DFA3D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.05,
   "yaw": 0.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.93
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293, this.camera_F30AAEAA_FF2C_19DC_41E1_46908001A91E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_CAF9FF90_C437_1625_41DB_751C2C401B39",
   "pitch": -26.93,
   "hfov": 10.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.91
  }
 ],
 "id": "overlay_CA5531CD_C435_0A3C_41D2_2F3D6B1C3DD4",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_F3C44F4D_FF2C_1754_41EF_76E54AA62B11",
 "restartMovementOnUserInteraction": false
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_519ACC75_7538_717E_41DB_81752A00D8FD",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519B3C76_7538_717A_41D4_348E57383C12",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519B9C76_7538_717A_41C9_EC9D2CA0E129",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6AE0AE03_7538_F09A_41A4_AB6A8D39AEE7",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_682F2910_74FF_D0B6_41D7_858EA6283981",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_682E4910_74FF_D0B6_41CE_49A402673856",
 "rowCount": 5,
 "frameCount": 20
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CF7DC4D2_C42F_0A25_41E1_D0CA71282293_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_CAF9BF90_C437_1625_41E2_04D3446C7A02",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519CAC76_7538_717A_41DC_191F050B3B97",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519D1C77_7538_717A_41B9_597FB3765430",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519D2C77_7538_717A_41B6_80B910D42239",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519DBC77_7538_717A_4173_ADD02DF75354",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_519BDC76_7538_717A_41D4_509F84F906DB",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_519C1C76_7538_717A_41D4_85BF2028CE95",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_519C7C76_7538_717A_41DC_67BF5A082DB0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519DFC77_7538_717A_41CC_466DAE5819AA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519E2C77_7538_717A_41B9_FDD3BE5AC664",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519E9C77_7538_717A_41DA_2062029D0A1B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519ECC77_7538_717A_41C8_6362A7C83F3F",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519F3C77_7538_717A_41D5_26765922A1B5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519F6C78_7538_7176_41DB_D8695E082D8E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51906C78_7538_7176_40C6_7FBCF3A65000",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519FFC78_7538_7176_41A7_A14B2C17396C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51903C78_7538_7176_4190_167031AA80D8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_CAF9FF90_C437_1625_41DB_751C2C401B39",
 "rowCount": 6,
 "frameCount": 22
}],
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "class": "Player",
 "contentOpaque": false,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "data": {
  "name": "Player29038"
 },
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
