<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## 요구사항 분석

- ORM 사용하여 구현 : ORM인 `prisma` 사용
- RDBMS 사용 (SQLite, PostgreSQL 등) : `postgres` 사용
- 코드 가독성을 위해 `prettier` 설정
- Git commit 메시지 컨벤션 : [Add], [Fix], [Docs] 사용
- 필요한 모델(회사, 사용자, 채용공고, 지원내역(선택사항)) : `Noti` 모델 생성
- Unit Test

## 구현 과정

### 0. modeling

AWS LightSail의 Database(Postgres) 사용. 아래 `.env` 공개

- Noti : 채용 공고 DB Model

- Company : 회사 DB Model

### 1. 채용 공고 CRUD

- GET /noti/all : 채용 공고의 모든 데이터를 조회

```json
[
  {
    "id": "45d675bf-2d42-4ed8-b4a9-a391a2cff21a",
    "position": "백엔드 주니어 개발자",
    "reward": 1000000,
    "tech": "Python",
    "Company": {
      "name": "원티드랩",
      "country": "한국",
      "area": "서울"
    }
  },
  {
    "id": "ef21a049-ad29-4ae4-9a3d-3172403c1ccd",
    "position": "Django 백엔드 개발자",
    "reward": 1500000,
    "tech": "Django",
    "Company": {
      "name": "네이버",
      "country": "한국",
      "area": "판교"
    }
  }
]
```

- POST /noti : 채용 공고 데이터 입력 받아 noti model에 저장

생성 요청 데이터

```json
{
  "company_id": "abb946a1-6feb-4320-94e1-66a1c0eeb2f4",
  "position": "Django 백엔드 개발자",
  "reward": 1500000,
  "description": "네이버에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
  "tech": "Django"
}
```

생성 결과 데이터

```json
{
  "id": "abc69ece-64b0-4cf3-8da6-402d4cd2a3d7",
  "position": "Django 백엔드 개발자",
  "reward": 1500000,
  "description": "네이버에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
  "tech": "Django",
  "createdAt": "2022-08-11T00:00:00.000Z",
  "updatedAt": "2022-08-11T09:24:05.124Z",
  "company_id": "abb946a1-6feb-4320-94e1-66a1c0eeb2f4"
}
```

- PATCH /noti?id='' : 해당 id의 채용 공고 수정

원본 데이터

```json
{
  "id": "abc69ece-64b0-4cf3-8da6-402d4cd2a3d7",
  "position": "Django 백엔드 개발자",
  "reward": 1500000,
  "description": "네이버에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
  "tech": "Django",
  "createdAt": "2022-08-11T00:00:00.000Z",
  "updatedAt": "2022-08-11T09:24:05.124Z",
  "company_id": "abb946a1-6feb-4320-94e1-66a1c0eeb2f4"
}
```

변경 요청 데이터

```json
{
  "position": "백엔드 주니어 개발자",
  "reward": 1500000,
  "description": "원티드랩에서 백엔드 주니어 개발자를 '적극' 채용합니다. 자격요건은..",
  "tech": "Python"
}
```

변경 결과 데이터

```json
{
  "id": "ef21a049-ad29-4ae4-9a3d-3172403c1ccd",
  "position": "백엔드 주니어 개발자",
  "reward": 1500000,
  "description": "원티드랩에서 백엔드 주니어 개발자를 '적극' 채용합니다. 자격요건은..",
  "tech": "Python",
  "createdAt": "2022-08-11T00:00:00.000Z",
  "updatedAt": "2022-08-11T09:27:34.495Z",
  "company_id": "abb946a1-6feb-4320-94e1-66a1c0eeb2f4"
}
```

- DELETE /noti?id='' : 해당 id의 채용 공고 삭제

### 1-1. 회사 등록

- POST /company : 회사 등록(채용 공고 등록을 위해 생성)

### 2. 채용 공고 검색 기능

### 3. 채용 공고 상세

- Get /noti?id='' : 채용 상세 페이지를 위한 데이터 조회

### 4. 지원

## Installation

```bash
$ npm install
```

## Running the app

실행하기 전에 `.env` 파일을 생성하고 아래 내용을 추가해야함.

.env

```
DATABASE_URL="postgresql://dbmasteruser:preonboarding@ls-e59aa34ed81177ac30924c26cfbae54822118c6f.cjg7d5nnlkqz.ap-northeast-2.rds.amazonaws.com:5432/postgres"
```

watch mode로 실행하기

```bash
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
