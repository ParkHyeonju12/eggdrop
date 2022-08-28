$("input[class=name]").on("change", function () {
  const nameReg = /^[가-힣]{2,7}$/;
  const name = $(".name");
  const nameValue = name.val();
  if (nameReg.test(nameValue)) {
  } else {
    alert("이름은 2 - 7자 한글로 입력해주세요");
  }
});
$("input[class=phone]").on("change", function () {
  const phoneReg = /^\d{3}-\d{3,4}-\d{4}$/;
  const phone = $(".phone");
  const phoneValue = phone.val();
  if (phoneReg.test(phoneValue)) {
  } else {
    alert("전화번호는 010-1234-1234 또는 010-123-1234 형식으로 입력해주세요.");
  }
});
$("input[class=email]").on("change", function () {
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const email = $(".email");
  const emailValue = email.val();
  if (emailReg.test(emailValue)) {
  } else {
    alert("올바른 이메일 형식을 입력해주세요.");
  }
});
$("input[class=job]").on("change", function () {
  const job = $(".job");
  const jobValue = job.val();
  if (job.val() == "") {
    alert("직업을 입력해주세요.");
  }
});
$("input[class=area]").on("change", function () {
  const area = $(".area");
  const areaValue = area.val();
  if (area.val() == "") {
    alert("희망지역을 입력해주세요.");
  }
});
$("textarea[class=content]").on("change", function () {
  const content = $("textarea[class=content]");
  const contentValue = content.val();
  if (content.val() == "") {
    alert("문의내용을 입력해주세요.");
  }
});

$("button[type=submit]").on("click", function () {
  if (!$("input[type=checkbox]").is(":checked")) {
    alert("개인정보 수집 및 이용에 동의해주세요.");
    return false;
  }
  return true;
});
