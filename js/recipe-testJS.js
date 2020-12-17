"use strict";
// $(document).ready(function() {
//     console.log("test hello");

    var app = new Vue({
        el: '#app',
        mounted() {
        },
        data: function () {
            return {
                spoonacularApiKey: 'spoonacularKey',
                servings: 2,
                measure: 'metric',
                viewStyle: 'grid',
                ingredients: '1 apple\n2 cups of coffee\n1.4 liters almond milk\n2 1/2 salmon fillets\nkale',
            };
        },
        methods: {
            previewIngredientWidget() {
                var postContent = this.ingredients;

                let self = this;
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        self.previewIngredientWidgetCallback(xmlHttp.responseText);
                    }
                }
                xmlHttp.open("POST", 'https://api.spoonacular.com/recipes/visualizeIngredients?apiKey=' + this.spoonacularApiKey, true);
                xmlHttp.send('defaultCss=true&servings=' + this.servings + '&view=' + this.viewStyle + '&measure=' + this.measure + '&ingredientList=' + postContent);
            },

            previewIngredientWidgetCallback(response) {
                var iframeDocument = document.getElementById('previewWidget').contentDocument;
                iframeDocument.open();
                iframeDocument.write(response);
                iframeDocument.close();

                var el = document.createElement("script");
                el.setAttribute("type", "text/javascript");
                el.setAttribute("src", "https://code.jquery.com/jquery-1.9.1.min.js");
                document.getElementById('previewWidget').contentDocument.head.appendChild(el);

                // wait until jquery is loaded
                setTimeout(function () {
                    var el = document.createElement("script");
                    el.setAttribute("type", "text/javascript");
                    el.setAttribute("src", "https://spoonacular.com/application/frontend/js/ingredientWidget.min.js?c=1");
                    document.getElementById('previewWidget').contentDocument.body.appendChild(el);
                }, 1000);
            },
        },
    });


















// });
