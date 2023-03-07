export const CommitsTypes = {
    feat:{
        emoji: '✨',
        description: 'Introduce una nueva característica en el código base',
        release: true
    },
    fix:{
        emoji: '⚡️',
        description: 'Corrige un error en su base de código.',
        release: true
    },
    perf:{
        emoji: '📈',
        description: 'Un cambio de código que mejora el rendimiento ',
        release: true
    },
    refactor:{
        emoji: '🔨',
        description: 'Un cambio de código que no corrige un error ni agrega una característica',
        release: true
    },
    docs:{
        emoji: '📝',
        description: 'Documentación solo cambios.',
        release: false
    },
    test:{
        emoji: '🧪',
        description: 'Adición de pruebas faltantes o corrección de pruebas existentes.',
        release: false
    },
    build:{
        emoji: '📦️',
        description: 'Cambios que afectan el sistema de compilación',
        release: true
    }

}