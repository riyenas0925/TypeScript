# 모듈
## export
* 심벌의 의미를 다른 ts로 전달할때
* function, interface, class, type, let, const 키워드 앞에 사용 가능

### export default 키워드

### 예시
```ts
let MAX_AGE = 100

export function makeRandomNumber(max: number = MAX_AGE): number {
    return Math.ceil((Math.random() * max))
}
```

## import 
* 어떤 파일이 export 키워드로 내보낸 심벌을 받아서 사용할때

### import {} form 구문
> ``` import { 심벌 목록 } as from '파일상대경로' ```

```ts
import {makeRandomNumber} from '../utils/makeRandomNumber'

const makePerson = (
    name: string,
    age: number = makeRandomNumber()) => ({name, age})
```

### import * as 구문
> ``` import * as from '파일상대경로' ```

```ts
import * as U from '../utils/makeRandomNumber'

const makePerson = (
    name: string,
    age: number = U.makeRandomNumber()) => ({name, age})
```