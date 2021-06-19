function calculation() {
    let sold = document.getElementById("sold").value;
    let money = document.getElementById("money").value;
    let changes = document.getElementById("changes").value;

    document.getElementById("tickets").innerHTML = sold*25;
}