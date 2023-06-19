const parseEnv = () => {
    process.env.RSS_name1 = 'nmae1';
    process.env.RSS_name2 = 'name2';
    process.env.RSS_name3 = 'name3';

    const prefix = 'RSS_';
    const names = Object.keys(process.env)
        .filter((name) => name.startsWith(prefix))
        .map((name) => `name=${process.env[name]}`);

        process.stdout.write(names.join('\n'));
};

parseEnv();