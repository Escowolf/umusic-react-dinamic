import one from '../img/albuns/1.jpg';
import two from '../img/albuns/2.jpg';
import three from '../img/albuns/3.jpg';
import four from '../img/albuns/4.jpeg';
import five from '../img/albuns/5.jpeg';
import six from '../img/albuns/6.jpeg';
import seven from '../img/albuns/7.jpeg';
import eight from '../img/albuns/8.jpeg';

const playlistsMock = [
    {
        id: 1,
        nome: 'A alguns quilômetros de lugar nenhum',
        capa: one,
        musicas:[
            {
                id: 1,
                nome:'Lost In The City',
                cantor: 'HoliznaCC0',
                arquivo: '/music/HoliznaCC0-HowCanThingsBe.mp3' 
            },
            {
                id: 2,
                nome:'Sensual Folk',
                cantor:'Scott Holmes Music',
                arquivo: '/music/HoliznaCC0 - Lost In The City.mp3'
            },
            {
                id: 3,
                nome:'January-June-and-December',
                cantor:'Ketsa',
                arquivo: '/music/Ketsa - January-June-and-December.mp3'
            },
            {
                id: 4,
                nome:'How Can Things Be',
                cantor:'HoliznaCC0',
                arquivo: '/music/Scott Holmes Music - Sensual Folk.mp3'
            }
        ]
    },
    {
        id: 2,
        nome: 'Bom dia, flor do dia',
        capa: two,
        musicas:[
            {
                id: 1,
                nome:'Morning Coffee',
                cantor:'HoliznaCC0',
                arquivo: '/music/BomDiaFlorDoDia/HoliznaCC0 - Morning Coffee.mp3'
            },
            {
                id: 2,
                nome:'No-Clouds',
                cantor:'Ketsa',
                arquivo: '/music/BomDiaFlorDoDia/Ketsa - No-Clouds.mp3'
            },
            {
                id: 3,
                nome:'7AM',
                cantor:'Ketsa',
                arquivo: '/music/BomDiaFlorDoDia/Ketsa - 7AM.mp3'
            },
            {
                id: 4,
                nome:'On That Day',
                cantor:'Ketsa',
                arquivo: '/music/BomDiaFlorDoDia/Ketsa - On That Day.mp3'
            }
        ]
    },
    {
        id: 3,
        nome: "That's a rap!",
        capa: three,
        musicas:[
            {
                id: 1,
                nome:'Ye',
                cantor:'Double-F The King',
                arquivo: '/music/ThatsARap/Double-F the King - Ye.mp3'
            },
            {
                id: 2,
                nome:'WitchCraft',
                cantor:'HoliznaCC0',
                arquivo: '/music/ThatsARap/HoliznaCC0 - WitchCraft.mp3'
            },
            {
                id: 3,
                nome:'darbar larfves',
                cantor:'Yellow Omm',
                arquivo: '/music/ThatsARap/HoliznaRAPS - PTSD.mp3'
            },
            {
                id: 4,
                nome:'PTSD',
                cantor:'HoliznaRAPS',
                arquivo: '/music/ThatsARap/Yellow Omm - darbar larfves.mp3'
            }
        ]
    },
    {	
        id: 4,
        nome: 'Festinha de quintal',
        capa: four,
        musicas:[
            {
                id: 1,
                nome:'Good Life ft. Macflowz',
                cantor:'Double-F The King',
                arquivo: '/music/FESTINHA DE QUINTAL/Double-F the King - Good Life Ft. Macflowz.mp3'
            },
            {
                id: 2,
                nome:'Beautiful',
                cantor:'Ketsa',
                arquivo: '/music/FESTINHA DE QUINTAL/Ketsa - Beautiful.mp3'
            },
            {
                id: 3,
                nome:'420',
                cantor:'Ketsa',
                arquivo: '/music/FESTINHA DE QUINTAL/Ketsa - 420.mp3'
            },
            {
                id: 4,
                nome:'Endless Sunny Afternoon',
                cantor:'Lobo Loco',
                arquivo: '/music/FESTINHA DE QUINTAL/Lobo Loco - Endless Sunny Afternoon (ID 1684) (1).mp3'
            }
        ]
    },
    {
        id: 5,
        nome: 'Chilling',
        capa: five,
        musicas:[
            {		
                id: 1,
                nome:'Music Got Me High',
                cantor:'Double-F The King',
                arquivo: '/music/CHILLING/Double-F the King - Music Got Me High.mp3'
            },
            {
                id: 2,
                nome:'Good Kids',
                cantor:'HoliznaRAPS',
                arquivo: '/music/CHILLING/HoliznaRAPS - Good Kids.mp3'
            },
            {
                id: 3,
                nome:'Counting Sheep',
                cantor:'Baners',
                arquivo: '/music/CHILLING/Baners - Counting Sheep.mp3'
            },
            {
                id: 4,
                nome:'April Showers',
                cantor:'HoliznaCC0',
                arquivo: '/music/CHILLING/HoliznaCC0 - April Showers.mp3'
            }
        ]
    },
    {
        id: 6,
        nome: 'Para ouvir com The Mozão',
        capa: six,
        musicas:[
            { 	
                id: 1,
                nome:'Bonnie and Clyde',
                cantor:'Double-F The King',
                arquivo: '/music/PARA OUVIR COM THE MOZAO/Double-F the King - Bonnie and Clyde.mp3'
            },
            {
                id: 2,
                nome:'Step By Step',
                cantor:'Baners',
                arquivo: '/music/PARA OUVIR COM THE MOZAO/Baners - Step By Step.mp3'
            },
            {
                id: 3,
                nome:'Guesses',
                cantor:'Ketsa',
                arquivo: '/music/PARA OUVIR COM THE MOZAO/Ketsa - Guesses.mp3'
            },
            {
                id: 4,
                nome:'Desire',
                cantor:'Ketsa',
                arquivo: '/music/PARA OUVIR COM THE MOZAO/Ketsa - Desire.mp3'
            }
        ]
    },
    {
        id: 7,
        nome: 'Sunny',
        capa: seven,
        musicas:[
            {
                id: 1,
                nome:'From-Pillar-To-Post',
                cantor:'Ketsa',
                arquivo: '/music/SUNNY/Ketsa - From-Pillar-To-Post.mp3'
            },
            {
                id: 2,
                nome:'Stealing Glimpses Of Your Face',
                cantor:'HoliznaCC0',
                arquivo: '/music/SUNNY/HoliznaCC0 - Stealing Glimpses Of Your Face.mp3'
            },
            {
                id: 3,
                nome:'Overstand',
                cantor:'Ketsa',
                arquivo: '/music/SUNNY/Ketsa - Overstand.mp3'
            },
            {
                id: 4,
                nome:'We Are One',
                cantor:'Scott Holmes Music',
                arquivo: '/music/SUNNY/Scott Holmes Music - We Are One.mp3'
            }
        ]
    },
    {
        id: 8,
        nome: 'Boss Beat',
        capa: eight,
        musicas:[
            {	               	
                id: 1,
                nome:'Lala',
                cantor:'Ketsa',
                arquivo: '/music/BOSS BEAT/Ketsa - Lala.mp3'
            },
            {
                id: 2,
                nome:'After You',
                cantor:'Ketsa',
                arquivo: '/music/BOSS BEAT/Ketsa - After You.mp3'
            },
            {
                id: 3,
                nome:'Stylish Groove',
                cantor:'Scott Holmes Music',
                arquivo: '/music/BOSS BEAT/Scott Holmes Music - Stylish Groove.mp3'
            },
            {
                id: 4,
                nome:'The New Me',
                cantor:'Leisure-B',
                arquivo: '/music/BOSS BEAT/Leisure-B - The New Me.mp3'
            }
        ]
    }
]

export default playlistsMock;