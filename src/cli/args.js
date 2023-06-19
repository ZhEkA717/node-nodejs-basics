const parseArgs = () => {
    const names = process.argv
    .filter((name) => name.startsWith('--'))
    .map((item) => {
        const name = item.substring(2).split('=');
        return `${name[0]} is ${name[1]}`
    });

    process.stdout.write(names.join('\n'));
};

parseArgs();