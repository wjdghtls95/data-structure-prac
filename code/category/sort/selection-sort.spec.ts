describe('Selection Sort', () => {
  /**
   * 선택 정렬: 수열에서 최솟값을 찾아서 가장 왼쪽의 숫자와 교차하는 정렬
   */
  it('Selection Sort', () => {
    const numbers: number[] = createRandomNumbers(10);

    for (let i = 0; i < numbers.length; i++) {
      let minIdx = i; // 최솟값이라고 가정

      for (let j = i + 1; j < numbers.length; j++) {
        // 최소값이라고 가정한 i번째 인덱스 값이 j번 인덱스의 값보다 크면 minIdx -> j로 변경
        if (numbers[minIdx] > numbers[j]) {
          minIdx = j;
        }
      }

      // 만약 minIdx 의 값이 변경되면 -> minIdx 랑 j 인덱스 값 변경
      if (minIdx !== i) {
        const temp = numbers[minIdx];
        numbers[minIdx] = numbers[i];
        numbers[i] = temp;
      }

      console.log(`${i}번 회전: ${numbers}`);
    }

    expect(numbers).toBeDefined();
  });

  /**
   * 원하는 길이 만큼 숫자 랜덤 생성
   */
  const createRandomNumbers = (length: number): number[] => {
    const numbers = new Set<number>(); // 중복을 피하기 위한 Set 사용

    while (numbers.size < length) {
      const randomNum = Math.floor(Math.random() * 10);
      numbers.add(randomNum); // 중복을 허용하지 않는 Set 에 추가
    }

    return Array.from(numbers); // Set 을 배열로 변환하여 반환
  };
});
