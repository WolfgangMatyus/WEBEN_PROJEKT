function loadProductlist(){

    $.ajax({
        method: "GET",
        url: "/api/v1/shop/getproducts",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(json){
            //console.log(json);
            createList(json);
        },

        error: function(json){
            //console.error("an error occured");
            showError();
        }
    })

    // onClick auf Header Products wird die Productliste erneut geladen
    $("#productHeader")
        .click(loadProductlist)
}
function showError(){
    $("#output")
        .empty()
        .append(
            '<p id="error">an error occured</p>'
        )

    $("#error")
        .css({"color": "red", "font-weight":"bold", "text-align":"center"})
}

function createList(data){

    $("#output")
        .empty()
        .append(
            '<table class="table" id="productsTable">'
            +'<tbody></tbody>'
            +'</table>'
        )

    $.each(data, function(i, data){
        $("tbody")
            .append('<tr class="'
                + ((i % 2 === 0) ? "tblrow" : "tblrow greyline")+'">'
                +'<th>'
                +data.name+" for € "+data.price
                +'</th>'
                +'</tr>');
    })

    $("#output")
        .hide()
        .slideDown(250)

    $("#productsTable")
        .css({"border-style": "solid", "border-width": "1px", "border-color": "#A5ACB2"})

    // hovereffect
    document.getElementById("productsTable").setAttribute("class", "table table-hover")

    $(".tblrow")
        .on("click", function(){
            selectItem(this)
        });
}


function selectItem(selectItem){
    $("#output")
        .slideUp(250, function(){
            $("#selection")
                .empty()
                .append('<h3 id="SelectedHeader">selected:</h3>')
                .append(selectItem)
                .hide()
                .fadeIn(150);
        })
}

$(document).ready(loadProductlist)