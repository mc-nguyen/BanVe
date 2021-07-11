let total, rest, money, changes;
new Vue({
    el: '#churches',
    data: {
        churches: ["Trung Tâm Công Giáo",
            "Thánh Linh",
            "La Vang",
            "Westminster",
            "St. Cecilia",
            "Columban",
            "St. Barbara"
        ]
    }
});
let result = new Vue({
    el: '.result',
    data: {
        sold: 0,
        tickets: 0,
        profit: 0,
        donation: 0,
    }
});

function calculation() {
    total = document.getElementById("total").value;
    rest = document.getElementById("rest").value;
    money = document.getElementById("money").value;
    changes = document.getElementById("changes").value;

    result.data = {
        sold: total - rest,
        tickets: 25 * (total - rest),
        profit: money - changes,
        donation: money - changes - 25 * (total - rest)
    };
}
