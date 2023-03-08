import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { Trash, ThumbsUp } from 'phosphor-react' 
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        console.log('deletar')

        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar 
            hasBorder={false} 
            src="https://media.licdn.com/dms/image/C4E03AQH8OwwyGEW-dg/profile-displayphoto-shrink_400_400/0/1641483478326?e=1677715200&v=beta&t=mKFDW5kuPiyRh4X2FS79t0XJ31uHIYdQATI3NX54f3I" 
            alt="" 
            
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Vargas</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                    
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}