const numRows = 5;
for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('* ');
    }
    console.log();
}
