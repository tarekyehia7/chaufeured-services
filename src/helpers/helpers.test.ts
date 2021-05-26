import { 
    generatePrice,
    isValidDuration,
    addMoneySeparator,
} from './helpers';

test('should generate correct price, if minimum amount is empty', () => {
    const amount = 1550;
    const minAmount = null;
    const price = generatePrice(amount, minAmount);
    expect(price).toBe('15,50');
});

test('should generate correct price, if minimum amount presents', () => {
    const amount = 1550;
    const minAmount = 1330;
    const price = generatePrice(amount, minAmount);
    expect(price).toBe('13,30 - 15,50');
});

test('should return empty string, if amount is  empty', () => {
    const amount = null;
    const minAmount = 1330;
    const price = generatePrice(amount, minAmount);
    expect(price).toBe('');
});

test('should add comma separator before the last two digits', () => {
    const amount = '155320';
    const price = addMoneySeparator(amount);
    expect(price).toBe('1553,20');
});

test('should return true, if duration between 1 and 1440', () => {
    const duration = 1200;
    const isValid = isValidDuration(duration);
    expect(isValid).toBe(true);
});

test('should return false, if duration is less than 1', () => {
    const duration = -1;
    const isValid = isValidDuration(duration);
    expect(isValid).toBe(false);
});

test('should return false, if duration is greater than 1440', () => {
    const duration = 1445;
    const isValid = isValidDuration(duration);
    expect(isValid).toBe(false);
});
