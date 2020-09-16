<script type="text/javascript">
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    $("#gallery").galleria({
        width: 420,
        height: 370,
        autoplay: 5000, // will move forward every 5 seconds
        extend: function(options) {
            var gallery = this; // "this" is the gallery instance

            this.bind("loadstart", function(e) {
                var currImg = gallery.getActiveImage();
                var altText = $(currImg).attr('alt');
                console.log(altText);
            });
        }
    });


//Also getActiveImage() is not quite useful, as getData is. The following piece of code, prints in console the ALT you wanted, and the title, just in case you want.

//Try this:

$("#gallery").galleria({
        width: 420,
        height: 370,
        autoplay: 5000, // will move forward every 5 seconds
        extend: function(options) {
            var gallery = this; // "this" is the gallery instance

            this.bind(Galleria.IMAGE, function(e) {
                var current = gallery.getData(gallery.getIndex());
                var currImg = current.original;
                var altText = $(currImg).attr('alt');
                console.log(altText, current.title);
            });
        }
    });


</script>