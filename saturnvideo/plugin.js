CKEDITOR.plugins.add( 'saturnvideo', {
    icons: 'saturnvideoicon',
    init: function(editor) {
        editor.addCommand('saturnvideo', new CKEDITOR.dialogCommand('saturnvideodialog'));
        editor.ui.addButton('saturnvideoicon',
        {
            label: 'Upload Video',
            icon: 'saturnvideoicon',
            command: 'saturnvideo'
        });

        CKEDITOR.dialog.add('saturnvideodialog', function( editor ) {
            return {
                title: 'Upload Video',
                minWidth: 400,
                minHeight: 200,
                contents: [
                    {
                        id: 'tab-basic',
                        label: '',
                        elements: [{
                            id: 'upload_video_button',
                            label: 'Browse Video',
                            type: "html",
                            html: "<h1 style=color:red;>Search Video from Library<br/><br/><br/></h1>"
                            
                        }, {
                            type: "button",
                            id: "browse",
                            filebrowser: {
                                action: "Browse",
                                url: "/#/videolibrary"
                            },
                            hidden: !0,
                            label: "Browse Server"
                        }]
                    }
                ]
            };
        });
    }
});