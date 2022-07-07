import styles from './Sidebar.module.css'
import cover from '../Assets/capa.svg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img src={cover} alt="Logo do sidebar" />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/104842709?v=4" />
        <strong>Lucas Carvalho</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          < PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>  
    </aside>
  )
}