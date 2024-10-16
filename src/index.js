import {
    intro,
    outro,
    text,
    select
} from '@clack/prompts';
import colors from 'picocolors' 
import { getChangedFiles, getStagedFiles, startAddChange,getStartCommit, getBranch } from './services/git.js';
import { CommitsTypes } from './utils/commitsType.js';

try {
    await startAddChange();
    const  changeFaile = await getChangedFiles()
    const  stagedFiles = await getStagedFiles()

    intro(colors.inverse(`Te ayudare con la semantica en tu commit`));
    
    if(stagedFiles.length == 0 && changeFaile.length == 0){
        outro(colors.red(`ERROR: no hay archivos para commitear`));
        process.exit(1)
    }
    const commitOption = await select({
        message: 'Selecciona el Tipo de Commit:',
        options: Object.entries(CommitsTypes).map(([key,value])=>({
            value: `${key}`,
            label: `${value.emoji} ${key} -> ${value.description}`
        }))
    })
    const branch = await getBranch();
    let ticket = ""
    if (branch[0].startsWith("feature/")){
        ticket = `[${branch[0].split("/")[1]}] `;
    }
    
    const commitTag = await text({
        message: 'Introduce tu nuevo commit:',
        placeholder: 'tu commit ...',
        initialValue: `${ticket}${commitOption}:`,
        validate(value) {
            if (value.length === 0) return `Value is required!`;
        },
    })
    await getStartCommit(commitOption,commitTag);
    outro('gran commit, sigue codenando...');

} catch (error) {
    outro(colors.red('Error: Comprueba que este es un repositorio con git o rrealiza el <<git init>>'));
    console.log(error)
    process.exit(1)
}