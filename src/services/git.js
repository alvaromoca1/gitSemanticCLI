import {exec} from 'node:child_process' 
import { promisify } from 'node:util'

const execAsync = promisify(exec);

function cleanStdout (stdout) {
    return stdout.trim().split('\n').filter(Boolean)
}
export async function getChangedFiles () {
    const { stdout } = await execAsync('git status --porcelain')
    //console.log(stdout)
    //return cleanStdout(stdout).map((line) => line.split(' ').at(-1))
    return cleanStdout(stdout).map((line) => line)
}

export async function getStagedFiles(){
    const { stdout } = await execAsync('git diff --cached --name-only')
    return cleanStdout(stdout)
}

export async function startAddChange(){
    await execAsync('git add .');
    return;
}

export async function getRamaRepositori(){
    return await execAsync('git branch --show-current');
}
export async function getStartCommit(pref,commit){
    const { stdout }  = await execAsync(`git commit -m "${pref}: ${commit}"`)
    console.log(stdout)
    return cleanStdout(stdout)
}