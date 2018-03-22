function formatWords(words){
  if (words === null || words.length === 0) return '';
  const wordsFilter = words.filter(x => x);
  return (wordsFilter.length > 1 ) ? (wordsFilter.join(', ').replace(/,(?=[^,]*$)/, ' and')) : wordsFilter.join('');
}