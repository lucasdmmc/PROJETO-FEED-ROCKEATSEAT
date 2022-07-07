import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}


export function Comment({content, onDeleteComment}: CommentProps){
  function handleDeleteComment(){
    onDeleteComment(content);
  }
  
  const [likeCount, setLikeCount] = useState(0);

  function handleCommentLike() {
    setLikeCount((state) => {
      return state +1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/104842709?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.authorAndTime}>
              <strong>Lucas Carvalho</strong>
              <time title='05 de julho ás 04:40' dateTime='2022-07-05'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>

          <button onClick={handleCommentLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
          
        </footer>
      </div>
    </div>
  )
}