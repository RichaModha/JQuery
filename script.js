$(document).ready(function()
{
    var theme_colors=['Red','Blue','Green','Yellow','White','Black','Orange','Purple','Pink','Grey','Silver','Aqua','Beige','Brown','Chocolate','Coral','Gold','Limegreen','Magenta','Teal'];
    for(var x=0;x<theme_colors.length;x++)
    {
        $('#theme_color').append('<option value='+theme_colors[x]+'>'+theme_colors[x]+'</option>');
    }

    $('#add_theme_colour').click(function()
    {
        var colour=$('#theme_color').val().toLowerCase();
        $('.circles').append('<div class="circle bg-'+colour+'"></div>');
        $('.bg-'+colour).css("background-color", colour);
    })

    $('.circles').on('click', '.circle', function ()
    {
        var classes=$(this).attr('class');
        var class_names=classes.split(' ');
    
        for(var x=0; x<class_names.length;x++)
        {
            alert(class_names[x]);
            if(class_names[x].includes('bg-'))
            {
                $('body').removeClass();
                $('body').addClass(class_names[x]);
            }
        }
    })
});