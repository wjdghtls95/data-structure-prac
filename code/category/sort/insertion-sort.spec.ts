describe('Insertion Sort', () => {
  it('Insertion Sort', () => {
    const numbers = createRandomNumbers(10);

    console.log(`first numbers: ${numbers}`);

    for (let i = 1; i < numbers.length; i++) {
      const el = numbers[i];
      let j = i - 1; //

      while (j >= 0 && numbers[j] > el) {
        numbers[j + 1] = numbers[j];
        j = j - 1;
      }

      numbers[j + 1] = el;

      console.log(`${i}번: ${numbers}`);
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
