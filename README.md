<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## 요구사항 분석 및 구현 과정

### 요구사항

- ORM 사용하여 구현 : ORM인 `prisma` 사용
- RDBMS 사용 (SQLite, PostgreSQL 등) : `postgres` 사용
- 코드 가독성을 위해 `prettier` 설정
- Git commit 메시지 컨벤션 : [Add], [Fix], [Docs] 사용
- 필요한 모델(회사, 사용자, 채용공고, 지원내역(선택사항)) : `noti` 모델 생성
- Unit Test

### 구현 과정

#### 0. modeling

- noti : 채용 공고 DB Model

#### 1. 채용 공고 CRUD

- POST /noti : 채용 공고 데이터 입력 받아 noti model에 저장

- Get /noti : 채용 공고의 모든 데이터를 조회

#### 2. 채용 공고 검색 기능

#### 3. 채용 공고 상세

#### 4. 지원

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
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
