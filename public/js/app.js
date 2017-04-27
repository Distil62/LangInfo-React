function app()
{
    var menu = document.getElementById("Menu");
    var bApparition = document.getElementById("bApparition");
    bApparition.addEventListener("click", Apparition);

    function Apparition()
    {
        menu.hidden = !menu.hidden;
    }
}
window.addEventListener('load', app);