import axios from 'axios';
import store from '../store';
import * as actions from '../actions/collection-actions';

var data = [
    {
        id: 0,
        name: 'Kovaleva Collection vol 1.1',
        desc: 'Коллекция топов для девушек. Лето 2017. Приобладают бирюзовые и лиловые тона. Все изделия выполненны с применением легких и воздушных материалов. Коллекция велликолепна. Просто совершенство стиля. Дизайнеры молодцы. Постарались. Такого вы еще не видели. Красота да и только. О, какой покрой. Великолепный фасон. Красота и изысканность. Утонченность стиля и совершенство форм.</br>Коллекция топов для девушек. Лето 2017. Приобладают бирюзовые и лиловые тона. Все изделия выполненны с применением легких и воздушных материалов. Коллекция велликолепна. Просто совершенство стиля. Дизайнеры молодцы. Постарались. Такого вы еще не видели. Красота да и только. О, какой покрой. Великолепный фасон. Красота и изысканность. Утонченность стиля и совершенство форм. #Kovaleva #designer #siberia #luxery #rolseroyce #springlooks #spring #summerlooks #summer',
        count: 5,
        models: [
            {
                id: 0,
                name: 'Product',
                desc: 'Description of current product. It is a excellent product. Beautiful brunette. Most perfect woman that i ever see.',
                src: '/images/uploaded/models/0.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    },
                    {
                        id: 1,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/1.jpg',
                        count: 2,
                    },
                    {
                        id: 2,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/2.jpg',
                        count: 3,
                    },
                    {
                        id: 3,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/3.jpg',
                        count: 4,
                    }
                ]
            },
            {
                id: 1,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/1.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 2,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/2.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 3,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/3.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 4,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/0.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 5,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/1.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 6,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/2.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 7,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/3.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 8,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/1.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 9,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/2.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 10,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/3.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/0.jpg',
                        count: 1,
                    }
                ]
            },
        ]
    },
    {
        id: 1,
        name: 'Name col.1',
        desc: 'desc col.1',
        count: 5,
        models: [
            {
                id: 10,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/1.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/2.jpg',
                        count: 1,
                    }
                ]
            },
            {
                id: 11,
                name: 'Name ',
                desc: 'desc',
                src: '/images/uploaded/models/3.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: '/images/uploaded/prototypes/4.jpg',
                        count: 1,
                    }
                ]
            },
        ]
    }
];

export function getCollections() {
    store.dispatch(actions.getCollectionsRequest());

    setTimeout(() => {
        store.dispatch(actions.getCollectionsSuccess(data));
    }, 500);
}

export function getCollection(id) {
    store.dispatch(actions.getCollectionsRequest());

    setTimeout(() => {
        store.dispatch(actions.getCollectionSuccess(data.find((collection) => {
            return collection.id == id;
        })));
    }, 500);
}