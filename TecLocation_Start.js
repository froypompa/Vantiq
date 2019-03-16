var http = new Http();
http.setVantiqUrlForResource("Tecnicos");
http.setVantiqHeaders();
var query = {
    //where: {userType:"human"}
};
http.select(query,function(response)
{
    var usersarray = [];
    usersarray.push({value:0, label:"-elige-"});
    response.forEach(create_array);

    function create_array(item){
        usersarray.push({value:item.uuid, label:item.name});
    }

    var lista = client.getWidget("lista");
lista.enumeratedList = usersarray;
},
function(errors)
{
    client.showHttpErrors(errors,"Doing a select on 'Tecnicos'");
});

var http2 = new Http();
http2.setVantiqUrlForResource("Clientes");
http2.setVantiqHeaders();

http2.select(query,function(response)
{
    var usersarray = [];
    usersarray.push({value:0, label:"-elige-"});
    response.forEach(create_array);
    function create_array(item){
        usersarray.push({value:item.id.toString(), label:item.name});
    }

    var lista = client.getWidget("listacliente");
lista.enumeratedList = usersarray;
},
function(errors)
{
    client.showHttpErrors(errors,"Doing a select on 'Clientes'");
});
