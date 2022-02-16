export default function convertDigits(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const str = num.toString();
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += persianDigits[str[i]];
    }
    return result;
};