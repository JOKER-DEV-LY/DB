function toggleNameInput(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name-input");
    if (nameInput.style.display === "none") {
        nameInput.style.display = "block";
    } else {
        nameInput.style.display = "none";
    }
}
function sendCarInfo(carName, carImage) {
    var name = document.getElementById("name").value;
    var message = "اسم المستخدم: " + name + "\n" +
        "اسم السيارة: " + carName;
    var image = window.location.href + carImage;
    var phoneNumber = "+218 91-6691888"; 
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURI(message) + "%0A" + encodeURI(image);
    window.open(whatsappLink);
    document.getElementById("name-input").style.display = "none";
}
function sendToWhatsApp() {
    var name = document.getElementById("name").value;
    var balanceCode = document.getElementById("balance-code").value;
    var Discordname = document.getElementById("Discord-name").value;
    var carSelect = document.getElementById("car-select");
    var jok = document.getElementById("car-jok");
    var carSelect = carSelect.options[carSelect.selectedIndex].text;
    var jok = jok.options[jok.selectedIndex].text;

    var phoneNumber = "+218 91-6691888"; 


if (name.trim() === "") {
        alert("الرجاء إدخال اسم صحيح");
        return;
    }
if (balanceCode.trim() === "") {
        alert("أدخل رمز الرصيد");
        return;
    }
if (Discordname.trim() === "") {
        alert("ادخل اسم الحساب الديسكورد");
        return;
    }
    if (carSelect.trim() === "") {
        alert("ادخل نوع السياره الذي تريدها");
        return;
    }
    var message = "اسم المستخدم: " + name + "!\n"

    + "رمز الرصيد: "  + balanceCode + "!\n"

    + "سلاح ذهبي: " + jok + "!\n"

    + "اسم السيارة المختارة: " + carSelect + "!\n"
    
    + "اسم الحساب الديسكورد: " + Discordname;
    
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURI(message);
    window.open(whatsappLink);

    document.getElementById("name").value = "";
    document.getElementById("balance-code").value = "";
    document.getElementById("Discord-name").value = "";
    document.getElementById("name-input").style.display = "none";
    
}
