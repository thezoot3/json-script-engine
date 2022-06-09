# json-script-engine
### 리액트 프로젝트를 위한 스크립트 라이브러리입니다.
### Script library for React project

## 스크립트 문법
### Script Grammar
`Example.json`
```json5
{
  "lang": ["ko", "en", "jp"],
  "defaultLang": "ko",
  "defaultPlaceholder": "placeholderPreset1",
  "script": {
    "ko": {
      "hello": {
        "placeholder": {
          "characters": {
            "startWith": "${",
            "endWith": "}"
          },
          "allowsReactChild": true
        },
        "content": "안녕하세요 ${userName}님!"
      },
    },
    "us": {
      "hello": {
        "inherited": true,
        "content": "Hello User ${userName}!"
      },
    }
  }
}
```
