import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>

            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />

            <div className={styles.profile}>
                <Avatar src="https://media.licdn.com/dms/image/C4E03AQH8OwwyGEW-dg/profile-displayphoto-shrink_400_400/0/1641483478326?e=1677715200&v=beta&t=mKFDW5kuPiyRh4X2FS79t0XJ31uHIYdQATI3NX54f3I" 
                />

                <strong>Bruno Vargas</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}