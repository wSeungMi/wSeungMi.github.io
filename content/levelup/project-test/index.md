---
emoji: 🛠
title: button 태그의 default type 기억하기
date: '2023-03-02 19:02:00'
author: 씅🍀
tags: HTML
categories: 트러블슈팅
---

### 💎 문제원인

사용자가 게시글을 등록하는 폼에서 사용되는 셀렉트 박스를 구현하는 중이었다.
(styled-components로 작성해둔 코드를 HTML로 풀어본다.)

```html
<form>
  <div>
    <button></button>
    <ul>
      <li></li>
    </ul>
  </div>
</form>
```

<br />

**출력결과**

<figure style="width: 150px" class="align-left">
  <img src="error.gif" alt="셀렉트박스 문제 해결">
</figure>
 
셀렉트 박스를 클릭하면 옵션 목록이 화면에 고정되어야하는데, 렌더링이 됐다가 바로 사라지는 이슈가 발생했다. 개발자 도구에서 확인해보니 브라우저가 계속 새로고침되고 있었다.

<br />

### 💎 원인파악

잠깐 간과했던 버튼 속성 한가지가 있었는데, `button`의 default type은 `submit`이다.
이 기본 특성대로라면 당연하게도 `form` 태그 안에서 `button`의 역할은 양식 제출이기 때문에 데이터를 넘겨주면서 브라우저가 새로고침 되버리는 상황이었다.

<br />

### 💎 문제해결

`button` type에 button을 명시해준다.

```html
<button type='button></button>
```

<br />

**출력결과**

<figure style="width: 150px" class="align-left">
  <img src="solve.gif" alt="셀렉트박스 문제 해결">
</figure>

button으로 type을 명시하게되면, 이벤트가 없는 순수 **버튼**의 기능을 하게된다.  
form 내에서 버튼을 사용할 경우, `submit`을 실행하는 버튼이 아니라면 type을 명시해주는 것이 좋다.

```toc

```
