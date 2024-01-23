const parseArgs = () => {
    const names = process.argv
    .map((item, i, arr) => {
        if (item.startsWith('--')) {
            return `${item.substring(2)} is ${arr[i + 1]}`
        }
    })
    .join('\n');

    console.log(names);
};

parseArgs();