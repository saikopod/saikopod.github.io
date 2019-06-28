appendVkCommentsWidget();

function appendVkCommentsWidget() {
    document.write(`
    
<div class="pt-5 mt-5">

    <script type="text/javascript" src="https://vk.com/js/api/openapi.js?161"></script>

    <script type="text/javascript">
        VK.init({apiId: 7036386, onlyWidgets: true});
    </script>

    <div id="vk_comments"></div>
    <script type="text/javascript">
        VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});
    </script>


</div>
                
    `)
}

