var form = document.forms.info;

function getPerson() {
    var arr = [];
    var p1 = {
        "realname": form.realname.value,
        "gender": form.gender.value,
        "child": form.child.checked,
        "tickets": parseInt(form.tickets.value)
    }

    var p2 = {
        "realname": form.realname_1.value,
        "gender": form.gender_1.value,
        "child": form.child_1.checked,
        "tickets": parseInt(form.tickets_1.value)
    }
    arr.push(p1);
    arr.push(p2);
    return arr;
}

function getPrice(person) {
    var price = 0;
    if (!person.child && person.gender == 0 && person.tickets >= 2) {
        price = 90;
    } else if (person.child) {
        price = 50;
    } else {
        price = 100;
    }
    return price;
}

function getTotal() {
    var e = window.event;
    e.preventDefault();
    var total = 0;
    var arr = getPerson()
    for (var person of arr) {
        var price = getPrice(person);
        total += person.tickets * price;
    }
    var text = "总票价为：" + total + "元";
    document.querySelector("#total").innerText = text;
}

var p = document.createElement('p');
p.innerText = "";
p.id = "total";
document.body.append(p)