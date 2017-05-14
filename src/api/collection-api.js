import axios from 'axios';
import store from '../store';
import * as actions from '../actions/collection-actions';

var collections = [
    {
        id: 0,
        name: 'Kovaleva Collection vol 1.1',
        desc: 'Коллекция топов для девушек. Лето 2017. Приобладают бирюзовые и лиловые тона. Все изделия выполненны с применением легких и воздушных материалов. Коллекция велликолепна. Просто совершенство стиля. Дизайнеры молодцы. Постарались. Такого вы еще не видели. Красота да и только. О, какой покрой. Великолепный фасон. Красота и изысканность. Утонченность стиля и совершенство форм.</br>Коллекция топов для девушек. Лето 2017. Приобладают бирюзовые и лиловые тона. Все изделия выполненны с применением легких и воздушных материалов. Коллекция велликолепна. Просто совершенство стиля. Дизайнеры молодцы. Постарались. Такого вы еще не видели. Красота да и только. О, какой покрой. Великолепный фасон. Красота и изысканность. Утонченность стиля и совершенство форм. #Kovaleva #designer #siberia #luxery #rolseroyce #springlooks #spring #summerlooks #summer',
        products: [
            {
                id: 0,
                name: 'Product',
                desc: 'Description of current product. It is a excellent product. Beautiful brunette. Most perfect woman that i ever see.',
                src: 'images/uploaded/products/0.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    },
                    {
                        id: 1,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/1.jpg',
                    },
                    {
                        id: 2,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/2.jpg',
                    },
                    {
                        id: 3,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/3.jpg',
                    }
                ]
            },
            {
                id: 1,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/1.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 2,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/2.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 3,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/3.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 4,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/1.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 5,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/1.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 6,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/2.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 7,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/3.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 8,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/1.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 9,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/2.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
            {
                id: 10,
                name: 'Name ',
                desc: 'desc',
                src: 'images/uploaded/products/3.jpg',
                prototypes: [
                    {
                        id: 0,
                        name: 'Name',
                        desc: 'desc',
                        src: 'images/uploaded/prototypes/0.jpg',
                    }
                ]
            },
        ]
    },
    // {
    //     id: 1,
    //     name: 'Name col.1',
    //     desc: 'desc col.1',
    //     src: '',
    //     products: [
    //         {
    //             id: 1,
    //             name: 'Name prod.1',
    //             desc: 'desc prod.1',
    //             src: 'images/uploaded/products/0.jpg',
    //             prototypes: [
    //                 {
    //                     id: 1,
    //                     name: 'Name prot.1',
    //                     desc: 'desc prot.1',
    //                     src: 'images/uploaded/prototypes/0.jpg',
    //                 }
    //             ]
    //         }
    //     ]
    // }
];

export function getAllCollections() {
    store.dispatch(actions.getAllCollectionsRequest());

    setTimeout(() => {
        store.dispatch(actions.getAllCollectionsSuccess(collections));
    }, 1000);
}