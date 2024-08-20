process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const buff = process.stdin.read();

  if (buff) {
    process.stdout.write(`Your name is: ${buff}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
