import { NavLink, useParams } from "react-router-dom"
import { projects } from "../../store/constants"
import classNames from 'classnames'
import styles from './Header.module.css'
import night from '../../img/night.svg'
import sms from '../../img/sms.svg'
import notice from '../../img/notice.svg'
import avatar from '../../img/avatar.svg'

export const Header = () => {

    const selectorURL = useParams()
    const targetProject = projects.filter(el => el.id === Number(selectorURL.id))[0]

    if (!targetProject) {
        return console.error('Нет такого проекта')
    }


    return (
        <div className={styles.container}>

            <div className={styles.containerMenu}>
                <div className={styles.project}>
                    <h3 className='h1'>{targetProject.name}</h3>
                    <div className={styles.status}>
                        {targetProject.status === 'В работе' ? <p className={classNames('circle', 'circleStatus')} />
                            : <p className={classNames('circle', 'circleDone', 'circleStatus', styles.circleStatus)} />}
                        {targetProject.status}
                    </div>
                </div>

                <div className={styles.navigate}>
                    <NavLink to={`description`}
                        className={({ isActive }) => {
                            const linkClasses = [styles.link, 'textMenu']
                            if (isActive) linkClasses.push(styles.linkActive)

                            return linkClasses.join(" ")
                        }}
                    >Описание</NavLink>

                    <NavLink to={`list`} className={({ isActive }) => {
                        const linkClasses = [styles.link, 'textMenu']
                        if (isActive) linkClasses.push(styles.linkActive)

                        return linkClasses.join(" ")
                    }}>Список</NavLink>

                    <NavLink to={`kanban`} className={({ isActive }) => {
                        const linkClasses = [styles.link, 'textMenu']
                        if (isActive) linkClasses.push(styles.linkActive)

                        return linkClasses.join(" ")
                    }}>Канбан</NavLink>

                    <NavLink to={`plan`} className={({ isActive }) => {
                        const linkClasses = [styles.link, 'textMenu']
                        if (isActive) linkClasses.push(styles.linkActive)

                        return linkClasses.join(" ")
                    }}>Планирование</NavLink>

                    <NavLink to={`dashboard`} className={({ isActive }) => {
                        const linkClasses = [styles.link, 'textMenu']
                        if (isActive) linkClasses.push(styles.linkActive)

                        return linkClasses.join(" ")
                    }}>Дашборд</NavLink>

                    <NavLink to={`comand`} className={({ isActive }) => {
                        const linkClasses = [styles.link, 'textMenu']
                        if (isActive) linkClasses.push(styles.linkActive)

                        return linkClasses.join(" ")
                    }}>Команда</NavLink>

                </div>
            </div>

            <div className={styles.icons}>
                <img src={night} alt='Ночной режим' />
                <img src={sms} alt='Сообщения' />
                <img src={notice} alt='Уведомления' />
                <img className={classNames(styles.avatar)} src={avatar} alt='Аватар' />
            </div>
        </div>
    )
}