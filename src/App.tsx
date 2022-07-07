import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasdmmc.png',
      name: 'Lucas Carvalho',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'lucas.carvalho/doctorcare'},
    ],
    publishedAt: new Date('2022-07-05 12:29'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/170197724_526046462407312_7148114037794216546_n.jpg?ccb=11-4&oh=01_AVyZShcDUc1KQSg1iRqQNcv-3d6NQohBn1LhfhpzQzZPpA&oe=62D3DFC0',
      name: 'Evelyn Rocha',
      role: 'Psychologist',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'evelyn.rocha/psychologist'},
    ],
    publishedAt: new Date('2022-07-01 12:29'),
  },
];


export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}> 
        <Sidebar />
        <main>
          {posts.map(post => {
            return (          
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

