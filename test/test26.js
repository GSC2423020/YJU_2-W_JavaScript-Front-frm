new Promise((resolve, reject) => {
    resolve("Executor: S");
    // reject("Executor: F");
}).then(
    (result) => {
        console.log(`then-S: ${result}`);
    },
    (error) => {
        console.log(`then-F: ${error}`);
    },
)
    .catch((error) => console.log(`catch: ${error}`))
    .finally((result) => console.log(`finally: ${result}`));