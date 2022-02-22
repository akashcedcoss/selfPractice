var html = "";
var a = "";
function display(a){
    console.log(a);
    html += `<input type="checkbox" name="checkbox" id="checkbox">`+a+`<input type="button" value="Edit" id="edit" onclick="edit()"><input type="button" value="Delete" id="delete" onclick="delete()"><br>`
    console.log(html);
    document.getElementById('incomplete').innerHTML = html;

}
function addList(){
    a = document.getElementById('inp').value;
    console.log(a);
    display(a);
}
function edit(){

    document.getElementById('inp').innerText = a;


}
function del(){
    document.getElementById('delete').innerHTML = "";

}