


export const projects = [
    {
        id: 1,
        name: 'Электротовары',
        projectListsId: 1,
        status: 'inWork'
    },
    {
        id: 2,
        name: 'Лесхозснаб',
        projectListsId: 2,
        status: 'inWork'
    },
    {
        id: 3,
        name: 'Посуда-сити',
        projectListsId: 3,
        status: 'inWork'
    },
    {
        id: 4,
        name: 'Автошкола "Автолицей"',
        projectListsId: 4,
        status: 'done'
    }
]

export const projectLists = [{
    id: 1,
    tasklist: [
        {
            id: 1,
            name: 'Нужно сделать',
            task: [
                {
                    id: 1,
                    name: 'Разработать новый чекаут для юр.лиц.',
                    subtask: [
                        {
                            id: 1,
                            name: 'Перенести пользователей в новую БД',
                            checking: false
                        },
                        {
                            id: 2,
                            name: 'Сверстать новый интерфейс чекаута',
                            checking: false
                        },
                        {
                            id: 3,
                            name: 'Спроектировать новый чекаут',
                            checking: false
                        },
                    ],
                    checking: false
                },
                {
                    id: 2,
                    name: 'Проверить корзину',
                    subtask: [],
                    checking: false
                },
                {
                    id: 3,
                    name: 'Исправить ошибку',
                    subtask: [],
                    checking: false
                },
                {
                    id: 4,
                    name: 'Правка',
                    subtask: [],
                    checking: true
                },

            ]
        },
        {
            id: 2,
            name: 'В работе',
            task: [
                {
                    id: 1,
                    name: 'Разработать личный кабинет для юр.лиц',
                    subtask: [
                        {
                            id: 1,
                            name: 'Разработать прототип',
                            checking: true
                        },
                        {
                            id: 2,
                            name: 'Разработать бекенд',
                            checking: true
                        },
                    ],
                    checking: false
                },
                {
                    id: 2,
                    name: 'Исправить ошибку',
                    subtask: [],
                    checking: false
                },

            ]
        }
    ],
},
{
    id: 2,
    tasklist: [
        {
            id: 1,
            name: 'Нужно сделать',
            task: [
                {
                    id: 1,
                    name: 'Разработать приложение для ФИЗ.лиц.',
                    subtask: [
                        {
                            id: 1,
                            name: 'Сверстать корзину',
                            checking: false
                        },
                        {
                            id: 2,
                            name: 'Проверить интеграцию с БД',
                            checking: false
                        },
                    ],
                    checking: false
                },
                {
                    id: 3,
                    name: 'Исправить ошибку на главной странице',
                    subtask: [],
                    checking: false
                },
                {
                    id: 4,
                    name: 'Правка чего-то важного',
                    subtask: [],
                    checking: true
                },

            ]
        },
        {
            id: 2,
            name: 'В работе',
            task: [
                {
                    id: 1,
                    name: 'Разработать личный кабинет для физ.лиц',
                    subtask: [
                        {
                            id: 1,
                            name: 'Разработать прототип',
                            checking: true
                        },
                        {
                            id: 2,
                            name: 'Разработать бекенд',
                            checking: true
                        },
                    ],
                    checking: false
                },
                {
                    id: 2,
                    name: 'Исправить ошибку',
                    subtask: [],
                    checking: false
                },

            ]
        }
    ]
}]