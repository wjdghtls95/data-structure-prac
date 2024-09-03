import { Logger } from '@nestjs/common';

describe('bubble sort', () => {
  /**
   * 인접한 두 숫자를 비교하여 교체하는 정렬
   */
  it('bubble sort', () => {
    const numbers = createRandomNumbers(10);

    const n = numbers.length;

    Logger.log('변경 전:', numbers);

    // 배열의 모든 요소를 순차적으로 검토하면서 정렬을 수행
    for (let i = 0; i < n; i++) {
      // 이 루프는 배열의 인접한 요소를 비교하고, 필요에 따라 위치를 교환하는 역할
      // j < n - i - 1 조건은 이미 정렬된 부분(배열의 끝부분)을 제외하고, 나머지 요소만 비교하기 위해 설정
      for (let j = 0; j < n - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
          // 배열의 j번째 요소가 j+1번째 요소보다 크다면, 두 요소의 위치를 교환
          // [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }

    Logger.log('변경 후:', numbers);

    expect(numbers).toBeDefined();
  });

  /**
   * 원하는 길이 만큼 숫자 랜덤 생성
   */
  const createRandomNumbers = (length: number): number[] => {
    return Array.from({ length }, () => Math.floor(Math.random() * 10));
  };
});
