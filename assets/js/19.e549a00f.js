(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{368:function(t,v,_){"use strict";_.r(v);var s=_(25),r=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"보안취약점-xss-공격"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#보안취약점-xss-공격"}},[t._v("#")]),t._v(" (보안취약점) XSS 공격")]),t._v(" "),_("div",{staticStyle:{"font-size":"15px","text-align":"right"}},[_("span",{staticStyle:{"font-weight":"bold"}},[t._v("작성자 : 린주임👻")])]),t._v(" "),_("h2",{attrs:{id:"xss란"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xss란"}},[t._v("#")]),t._v(" XSS란")]),t._v(" "),_("p",[t._v('"게시판, 웹 메일 등에 삽입된 악의적인 스크립트에 의해 페이지가 깨지거나 다른 사용자의 사용을 방해하거나 쿠키 및 기타 개인 정보를 특정 사이트로 전송시키는 공격." (출처 네이버 지식백과)')]),t._v(" "),_("blockquote",[_("p",[t._v("XSS 공격은 웹사이트 관리자가 아닌 이가 웹페이지에 악성 스크립트를 삽입할 수 있는 취약점이다.\n이 취약점은 웹 응용프로그램이 "),_("strong",[t._v("사용자로부터 입력 받은 값을")]),t._v(" 제대로 검사하지 않고 사용할 경우 나타나며, 사용자의 정보인 '쿠키',  '세션' 등을 탈취하거나, 자동으로 비정상적인 기능을 수행하게 할 수 있다.\n다른 웹사이트와 정보를 교환하는 식으로 작동하므로 "),_("strong",[t._v("사이트 간 스크립팅")]),t._v("이라고도 한다.\n주로 "),_("strong",[t._v("사용자의 입력을 받아 동적으로 HTML을 조작하는 웹 어플리케이션이 주요 공격 대상")]),t._v("이 된다.\n예를 들어 악성 코드가 포함된 글을 읽는 순간 악성 프로그램이 설치되거나 쿠키 혹은 세션 정보가 공격자에게 전송되어 이를 악용하게 된다.")])]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"공격"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#공격"}},[t._v("#")]),t._v(" 공격")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("저장 XSS 공격")]),t._v(" (Stored XSS 취약점)")])]),t._v(" "),_("p",[t._v("저장 XSS 공격은 웹 애플리케이션 취약점이 있는 웹 서버에 악성 스크립트를 영구적으로 저장해 놓는 방법이다. 이 때 웹 사이트의 게시판, 사용자 프로필 및 코멘트 필드 등에 악성 스크립트를 삽입해 놓으면, 사용자가 사이트를 방문하여 저장되어 있는 페이지에 정보를 요청할 때, 서버는 악성 스크립트를 사용자에게 전달하여 사용자 브라우저에서 스크립트가 실행되면서 공격한다.")]),t._v(" "),_("p",[t._v(": 사용자 입력값이 DB에 저장되고 다시 출력되는 것")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://1.bp.blogspot.com/-iiiAwUQ2-sA/WXf-2emi8XI/AAAAAAAABx8/uSKbBXbfYho2dwyom9eB9v36StbaFcOzQCLcBGAs/s1600/stored.JPG",alt:""}})]),t._v(" "),_("br"),t._v(" "),_("br"),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("strong",[t._v("반사 XSS 공격")])])]),t._v(" "),_("p",[t._v("반사식 XSS 공격은 웹 애플리케이션의 지정된 변수를 이용할 때 발생하는 취약점을 이용하는 것으로, "),_("strong",[t._v("검색 결과, 에러 메시지 등 서버가 외부에서 입력받은 값을 받아 브라우저에게 응답할 때 전송하는 과정에서")]),t._v(" 입력되는 변수의 위험한 문자를 사용자에게 그대로 돌려주면서 발생한다.")]),t._v(" "),_("p",[t._v("일반적으로 서버에 검색 내용을 입력하면, 검색 결과가 있는 경우에는 결과 값을 사용자에게\n전달하지만, [예시1]과 같이 서버에서 정확한 결과가 없는 경우 서버는 브라우저에 입력한 값을\n[예시 2]과 같이 그대로 HTML 문서에 포함하여 응답한다.")]),t._v(" "),_("p",[t._v("이 경우 HTML 페이지에 포함된 악성\n스크립트가 브라우저에서 실행이 된다.")]),t._v(" "),_("p",[t._v(": 사용자 입력 값이 웹 화면에 바로 출력 되는 것")]),t._v(" "),_("blockquote",[_("p",[t._v("예시1")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('http://www.testXSS/search_result.do?srSearchVal=<script>alert("XSS");<\/script>\n')])])]),_("blockquote",[_("p",[t._v("예시2")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<html>\n\t<body>\n\t\t<div id="pageTitleTxt">\n\t\t<input type="text" id="search_val" name="srSearchVal" \n\t\tvalue="<script>alert("XSS");<\/script>" placeholder="검색어를 입력해 주세요" />\n\t</body>\n</html>\n')])])]),_("p",[_("img",{attrs:{src:"https://1.bp.blogspot.com/-FrvvJGR8JEo/WXf-myPRdbI/AAAAAAAABx4/cnFulUUI7KAW-Q3Q2NNONs6s22I6rowCgCLcBGAs/s1600/reflext.JPG",alt:""}})]),t._v(" "),_("br"),t._v(" "),_("br"),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("strong",[t._v("DOM 기반 XSS 공격")])])]),t._v(" "),_("p",[t._v("DOM 기반 XSS 공격은 DOM 객체를 포함하는 자바스크립트 등을 이용하여 DOM(Document Object Model) 데이터 접근 시 검증되지 않은 입력 값이 자바 스크립트를 통해 삽입되어 발생한다.")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://3.bp.blogspot.com/-CqkXuOTZ-as/WXf-fQyfqbI/AAAAAAAABx0/betiJVFVXFMj5nrJ2bEwdsCgY2u32JpTQCLcBGAs/s1600/dom2.JPG",alt:""}})]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"피해"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#피해"}},[t._v("#")]),t._v(" 피해")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("쿠키 / 세션 ID 정보 탈취")])])]),t._v(" "),_("p",[t._v("쿠키란 사용자가 웹 사이트를 이용하는 동안 사용자 브라우저에 저장되는 것으로, 세션 쿠키는 사용자가 웹사이트를 읽거나 방문하는 동안에만 임시로 메모리에 존재하는 쿠키이다. 보통 브라우저에서는 사용자가 브라우저를 종료하면 세션 쿠키를 삭제한다.")]),t._v(" "),_("p",[t._v("웹 애플리케이션이 사용자의 세션 ID를 쿠키에 포함하는 경우 XSS 공격을 통해, 합법적인 세션 ID를 획득하여 불법적으로 정상 사용자로 가장할 수 있다.")]),t._v(" "),_("br"),t._v(" "),_("ul",[_("li",[_("strong",[t._v("시스템 관리자 권한 탈취")])])]),t._v(" "),_("p",[t._v("XSS 취약점을 이용하여 사용자 브라우저 취약점을 공격하여 PC를 완전히 통제할 수도 있다. 공격자는 XSS 취약점 있는 웹 서버에 다양한 악성 데이터를 포함시켜 놓은 후, 사용자의 브라우저가 악성 데이터를 실행하는 경우 공격자의 브라우저의 취약점을 공격하는 공격 코드가 실행되면서 사용자 시스템을 완전히 통제할 수 있다. 회사 등 조직의 개인의 PC가 해킹되는 경우, 조직의 내부 시스템으로 이동하여 내부의 중요 정보를 탈취하는 공격으로 이어질 수 있다.")]),t._v(" "),_("br"),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"공격예시"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#공격예시"}},[t._v("#")]),t._v(" 공격예시")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FccgEwU%2FbtqTlGgr3Hp%2Fy6TTy8KRLJEXw9Ky2mVMq1%2Fimg.png",alt:""}}),t._v("\n위와 같은 검색 폼에 사용자 입력값을 담아 서버로 보내고, 이 값으로 검색된 결과 페이지를 구성한다.")]),t._v(" "),_("p",[t._v("위 예제는 크로스 사이트 스크립팅(XSS)에 대비가 되어 있지 않은 웹 어플리케이션이다.\n저 검색 단어 입력칸에 아래와 같은 스크립트를 넣어본다면,")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<script>alert("XSS");<\/script>\n')])])]),_("p",[t._v('XSS공격에 대한 대응이 되어 있는 사이트라면  위 스크립트를 넣더라도 그냥 문자열일 뿐이기 때문에 검색어를 입력받을 때와 마찬가지로 화면에 "< script>alert("XSS");< /script>" 그대로가 출력 될 것이다.')]),t._v(" "),_("br"),t._v("\n하지만 아무런 대응이 되어있지 않다면 아래와 같은 결과를 볼 수 있다.\n"),_("p",[_("img",{attrs:{src:"https://blog.kakaocdn.net/dn/cbF9el/btqTjCMtRr5/eK7rqPvtKfqHZITbu9Rn8k/img.png",alt:""}})]),t._v(" "),_("p",[t._v("팝업 메시지를 띄우는 것은 개발자가 전혀 의도한 기능이 아니지만, 사용자가 임의로 웹 페이지를 조작할 수 있게된다. 위 예시는 단순히 공격자가 만든 스크립트를 실행시키는데 그쳤지만, 응용하면 더 위험한 상황에 다른 사용자들을 노출시킬 수 있다.")]),t._v(" "),_("p",[t._v("예를 들어 XSS대응이 되어있지 않은 사이트의 게시판에 공격자가 만들어둔 악성 해킹 사이트로 이동하게끔 하는 스크립트를 삽입하고 사용자를 혹하게 하는 제목의 게시물로 등록한다.")]),t._v(" "),_("p",[t._v("일반 사용자는 그 게시물을 클릭하게 되고, 공격자가 삽입한 스크립트가 동작해 악의적인 페이지로 이동하게 된다.")]),t._v(" "),_("br"),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"해결방안"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#해결방안"}},[t._v("#")]),t._v(" 해결방안")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("문자 치환")])])]),t._v(" "),_("p",[t._v("XSS 는 HTML 태그 문자 '<'와 '>'가 입력되어 실행되는 것이 취약점의 주요한 원인이므로 해당 문자열을 다른 문자열로 치환하여 스크립트가 실행되지 않도록 수정해야 한다.")]),t._v(" "),_("p",[t._v('예를 들어, "<" 는 동일한 의미의 HTML "& lt;" 로 변경한다.')]),t._v(" "),_("p",[t._v("사용자는 < script> 가 < script> 로 보이지만 HTML 문서에는 & lt;script& gt;로 나타나서\n브라우저에서 일반 문자로 인식하고 스크립트로서 실행되지 않는다.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("표현문자  ")]),t._v(" "),_("th",[t._v("실제표현  ")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("&lt;")]),t._v(" "),_("td",[t._v("<")]),t._v(" "),_("td",[t._v("보다 작은, HTML 코드에서 모든 태그의 시작 기호.")])]),t._v(" "),_("tr",[_("td",[t._v("&gt;")]),t._v(" "),_("td",[t._v(">")]),t._v(" "),_("td",[t._v("보다 큰, HTML 코드에서 모든 태그의 끝 기호.")])]),t._v(" "),_("tr",[_("td",[t._v("&nbsp;")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("' ' (공백 문자 한칸, Space 한칸)")])]),t._v(" "),_("tr",[_("td",[t._v("&amp;")]),t._v(" "),_("td",[t._v("&")]),t._v(" "),_("td",[t._v("& 문자를 뜻함. AND라는 의미를 포함하여 javascript, java 등에서"),_("br"),t._v(" AND연산기호로 사용됨.")])]),t._v(" "),_("tr",[_("td",[t._v("&quot;")]),t._v(" "),_("td",[t._v('"')]),t._v(" "),_("td",[t._v("큰따옴표 하나.")])]),t._v(" "),_("tr",[_("td",[t._v("&#39;")]),t._v(" "),_("td",[t._v("'")]),t._v(" "),_("td",[t._v("작은따옴표 하나.")])])])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("strong",[t._v("JSTL 라이브러리 이용")])])]),t._v(" "),_("p",[t._v("검색창으로 예를 들어 사용자가 검색 입력값을 담아 서버로 보내고, 이 값으로 검색된 결과 페이지가 JSP페이지로 구성될때, JSTL라이브러리를 통해 방지 할 수 있다.")]),t._v(" "),_("p",[t._v("이때 "),_("strong",[t._v("입력받은 값을 EL표기법으로 결과 페이지에 노출하게 된다면")]),t._v(" 스크립트가 실행되는 의도적인 입력값일 경우 스트립트가 발생된다.")]),t._v(" "),_("p",[t._v("하지만 "),_("strong",[t._v("JSTL표기법으로 입력받은 값을 결과 페이지에 노출하게 되면")]),t._v(" 스크립트가 실행되는 의도적인 입력값일 경우라도 "),_("strong",[t._v("스크립트가 실행되지 않는다.")])]),t._v(" "),_("blockquote",[_("p",[t._v("그렇기 때문에 입력 받은 값을 "),_("strong",[t._v("< c:out value=/>")]),t._v(" 로 감싸주게 되면 의도적인 스크립트가 실행되는 것을 방지할 수 있다.")])])])}),[],!1,null,null,null);v.default=r.exports}}]);