/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author Oluwabunmi Olabode <https://github.com/Victoriabunmi72>
 * @returns {String}
 */
export default function cleanSet(set, word = '') {
  if (set instanceof Set && word !== '') {
    return Array.from(set).filter((w) => w.startsWith(word) && (w.slice(word.length) !== ''))
      .map((w) => w.substring(word.length))
      .join('-');
  }
  return '';
}
