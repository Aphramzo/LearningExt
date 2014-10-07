/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LearningExt.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'LearningExt.view.main.MainController',
        'LearningExt.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'panel',
            bind: {
                title: '{name}'
            },
            region: 'west',
            html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
            width: 250,
            split: true,
            collapsible: true,
            tbar: [{
                text: 'Button',
                handler: 'onClickButton'
            }]
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            items:[
                {
                    title: 'Tab 1',
                    html: '<h2>Content appropriate for the current navigation.</h2>'
                },
                {
                    title: 'Anie',
                    //reading about classes, but guessing this isnt the place to do this
                    //where would be ideal to put anie var that could be used to generate the tab title as well?
                    html: Ext.create('LearningExt.model.Anie').translate('It crash')
                }
            ]
        },
        {
            region: 'north',
            xtype: 'component',
            padding: 10, //really dislike not having px or em here...
            height: 40,
            html: 'The Anie Translator',
            cls: 'appHeader' //assuming not class since its a reserved word? Just going to take a while to get used to and remember
        }
    ]
});
