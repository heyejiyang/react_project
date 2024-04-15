# 설정

## .prettierrc 설정

```json
{
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "trailingComma": "all"
}
```

## 의존성 설치

- 필요 라이브러리

  - react-router-dom: 라우터
  - sass, styled-components, classnames: 스타일링 목적
  - immer: 불변성 관리
  - react-icons: 리액트에서 제공하는 아이콘 라이브러리
  - @loadable/component: 지연로딩
  - react-helmet-async: head 태그 내의 특정 태그의 내용을 변경할 때 사용

```js
yarn add react-router-dom sass styled-components classnames immer react-icons @loadable/component

yarn add react-helmet-async
```

## react-helmet-async 설정

- src/index.js

```jsx
import { HelmetProvider } from 'react-helmet-async';
...

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

...

```

- 사용법

```jsx
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>사이트 제목 변경 테스트</title>
      </Helmet>
    </>
  );
};

export default App;
```

## 메시지, 다국어 처리

- 의존성: i18next, react-i18next
- 의존성 설치

```js
yarn add i18next react-i18next
```

- 언어 파일 생성

  - src/langs/ko, src/langs/en 폴더 생성
  - 각 폴더별로 공통 문구: commons.js, 검증 문구: validations.js, 에러문구: errors.js

- 언어 파일 통합: 예) src/langs/ko/index.js

```javascript
import commons from './commons';
import validations from './validations';
import errors from './errors';

const ko = { ...commons, ...validations, ...errors };

export default ko;
```

- 설정 파일 구성: src/i18n.js

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko'; // ko/index.js
import en from './langs/en';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources, //설정명과 객체명 동일하게 만들어주면 resources:resources라고 해줄 필요없이 하나로 가능
  lng: 'ko',
});
```

- 설정 반영: src/index.js

```javascript
...
import './i18n';
...

```

- 적용하기: useTranslation 훅을 통해서 사용 가능/ react-i18next
  - t: 메시지 조회 함수
  - i18n: 편의 기능 객체(changeLanguage(..): 언어 변경 함수 - 제일 많이 씀)

```jsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>사이트 제목 변경 테스트</title>
      </Helmet>
      <div>{t('아이디')}</div>
      <div>{t('약관에_동의')}</div>
      <div>{t('없는_문구')}</div>
      <button type="button" onClick={() => i18n.changeLanguage('ko')}>
        한국어
      </button>
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </>
  );
};

export default App;
```

# 레이아웃 구성

- src/layouts/MainLayout.js
- src/outlines/Header.js
- src/outlines/Footer.js

# 라우팅 구성

## 설정

- src/index.js: BrowserRouter 컴포넌트로 감싸기

```jsx
...
import { BrowserRouter } from 'react-router-dom';
...
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);

```
## 메인 페이지
- /: 메인 페이지 경로


## 회원

- /member/join: 회원가입 페이지
- /member/login: 로그인 페이지

## 없는 페이지

- /-: 없는 페이지(commons/pages/NotFound.js)

## 에러 페이지

> class형 컴포넌트: componentDidCatch 사용

- commons/pages/Error.js
- commons/components/ErrorDisplay.js

# 스타일링

## 공통 스타일: src/index.css

- 공통 폰트
- 기본 스타일 초기화
- 기준 폰트 사이즈: src/styles/FontSize.js/ 기준 설정 -> small, normal, medium, big, extraBig
- 기준 색상: Primary, Secondary, Success, Danger, Warning, Info, Light, Dark

