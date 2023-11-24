function changeBtnName1(btn_id)  {
    const btnElement = document.getElementById(btn_id);
    if (btnElement.innerText == '주문하기') {
        btnElement.innerText = '주문완료';
    } else {
        btnElement.innerText = '주문하기';
    }
}

function changeBtnName2(btn_id)  {
    const btnElement = document.getElementById(btn_id);
    if (btnElement.innerText == '예약하기') {
        btnElement.innerText = '예약완료';
    } else {
        btnElement.innerText = '예약하기';
    }
}
