import fs from 'fs';
import { generate } from "random-words";
import { exec } from 'child_process'

let finalWord = null;

const npmInit = () => {
    return new Promise((resolve, reject) => {
        const minLength = Math.floor(Math.random() * 10) + 3;
    
        const word = generate({ exactly: 1, wordsPerString: 2, separator: '-' })
        finalWord = `0xGank-tea-${word}`
        fs.mkdirSync(finalWord);
    
        fs.copyFile('template.js', `./${finalWord}/index.js`, (err) => {
            if (err) throw err;
            console.log(`template.js was copied to ./${finalWord}/index.js)`)
          });
        exec(`npm init -y`, {  cwd: `./${finalWord}` }, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
    
            resolve("Success")
        })
    })

}

const gitInit = () => {
    return new Promise((resolve, reject) => {
        console.log('GIT INIT: ...LOADING');
        exec(`git init`, {  cwd: `./${finalWord}` }, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }


            resolve("done")
        })
    })
}

const npmInstallDependencies = () => {
    return new Promise((resolve, reject) => {
        console.log('NPM INSTALL DEPENDENCIES: ...LOADING');

        const dependencies = 'tea-helper tea-bool tea-helper-leap-year tea-kodachi-fn tea-helper-strings tea-zero-layer-2 tea-hoka-fn tea-persona-fn tea-sekiro-shadows tea-rug tea-terbaik tea-decanto tea-crow popologis sinomatatabi rf-notline not-rf-online excavato excaviar pengikut-sesat dn-hokage dn-yuri ibnusibenu ada-popo tea-guilds una-tea tea-bodoh tea-majapahit krandizkeren hasilkan-uang logika-huruf serangan-fajar tea-mengakun tea-yulvan tea-semangat tea-bacotin tea-sudut tea-rondo asbakun'
        exec(`npm i ${dependencies}`, {  cwd: `./${finalWord}` }, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
    
            console.log("NPM PUBLISH: ...LOADING");
            resolve("done")
        })
    })

}

// const npmLogin = () => {
//     exec(`npm login`, {  cwd: `./${finalWord}` }, (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         npmPublish();
//     })
// }

const npmPublish = () => {
    return new Promise((resolve, reject) => {
        exec(`npm publish`, {  cwd: `./${finalWord}` }, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
            console.log("DONE");

            resolve("done")
        })
    })
}

const mainThread = async () => {
    let i = 0
    let iteration = true
    while (iteration) {
        await npmInit()
        await gitInit()
        await npmInstallDependencies()
        await npmPublish()

        await new Promise(resolve => setTimeout(resolve, 180000));

        if (i >= 10) iteration = false
        i++

    }
}

mainThread()