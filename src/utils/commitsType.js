export const CommitsTypes = {
    feat:{
        emoji: '✨',
        icon: ':sparkles:',
        description: 'Introduce una nueva característica en el código base',
        release: true
    },
    fix:{
        emoji: '⚡️',
        icon:':zap:',
        description: 'Corrige un error en su base de código.',
        release: true
    },
    perf:{
        emoji: '📈',
        icon: ':chart_with_upwards_trend:',
        description: 'Un cambio de código que mejora el rendimiento ',
        release: true
    },
    refactor:{
        emoji: '🔨',
        icon: ':hammer:',
        description: 'Un cambio de código que no corrige un error ni agrega una característica',
        release: true
    },
    docs:{
        emoji: '📝',
        icon: ':memo:',
        description: 'Documentación solo cambios.',
        release: false
    },
    test:{
        emoji: '🧪',
        icon:':test_tube:',
        description: 'Adición de pruebas faltantes o corrección de pruebas existentes.',
        release: false
    },
    build:{
        emoji: '📦️',
        icon: ':package:',
        description: 'Cambios que afectan el sistema de compilación',
        release: true
    }

}