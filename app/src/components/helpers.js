/**
 * Precision rounding helper
 *
 * This is quite a solution. Basically it uses the engineering notation
 * to move the decimal separator right (remember e2 means "*10^2").
 * The integer is then rounded to get rid of unnecessary precision and
 * the result is converted back to float by moving the decimal separator
 * back left.
 *
 * We can't just use the built-in toFixed here since for example float
 * 1.345 gets rounded to 1.34 in certain browsers (e.g. older Chromium).
 *
 * The basic idea for this kind of precision limiting is, if we want to
 * have 2 decimals precision, is to multiply the input by 100, round it to
 * get rid of unnecessary decimals, and then divide that result with 100.
 */
export const roundToPrecision = (value, targetPrecision) => {
    let decimalsRemoved = Math.round(parseFloat(value + 'e' + targetPrecision));
    return Number(decimalsRemoved + 'e-' + targetPrecision);
}
