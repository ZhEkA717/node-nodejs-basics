const parseEnv = () => {
    const prefix = 'RSS_';

    const names = Object.keys(process.env)
        .filter((name) => name.startsWith(prefix))
        .map((name) => `${name}=${process.env[name]}`)
        .join('\n');

        console.log(names);
};

parseEnv();