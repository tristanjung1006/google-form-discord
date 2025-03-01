function onFormSubmit(e) {
  // e.values는 폼의 모든 응답을 배열 형태로 가져옴
  var responses = e.values;
  var message = "[새로운 응답]\n";

  // 이름과 전화번호, 성별만 가져오기
  var name = responses[4];  // E열 (이름)
  var sex = responses[5]; // F열 (성별)
  var birth = responses[7]; // H열 (생년월일)
  var studentNum = responses[8]; // I열 (학번)
  var major = responses[9]; // J열 (학과)
  var grade = responses[11]; // L열 (학년)
  var part = responses[16]; // Q열 (희망하는 파트)
  var part2 = responses[54]; // BB열 (2순위 희망 파트)
  var partReason = responses[17]; // R열 (파트를 선택한 이유)
  var applyReason = responses[18]; // S열 (지원동기)
  var troubleShooting = responses[19]; // T열 (트러블슈팅)
  var studyLeader = responses[51]; // AZ열 (스터디 리더 희망 여부)

  // 원하는 메시지 형식 구성
  message = "\n이름: " + name + "\n성별: " + sex + "\n생년월일: " + birth + "\n학번: " + studentNum + "\n학과: " + major + "\n학년: " + grade + "\n희망하는 파트: " + part + "\n2순위 희망하는 파트: " + part2 + "\스터디 리더 희망 여부: " + studyLeader + "\n파트를 선택한 이유: " + partReason + "\n지원동기: " + applyReason + "\n트러블슈팅: " + troubleShooting;

  var discordWebhookUrl = "여기에 디스코드 웹훅 URL 입력하세요";  // 디스코드 웹훅 URL 입력

  var payload = JSON.stringify({
    content: message
  });

  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: payload
  };

  UrlFetchApp.fetch(discordWebhookUrl, options);  // 디스코드에 메시지 전송
}
