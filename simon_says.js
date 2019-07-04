const echo = (S) => {
  return S;
}

const shout = (S) => {
  return S.toUpperCase();
}

const repeat = (S, N) => {
  return (S + ' ').repeat(N).trim();
}

const startOfWord = (S, N) => {
  return S.substring(0, N);
}

const firstWord = (S) => {
  return S.split(' ')[0];
}

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
