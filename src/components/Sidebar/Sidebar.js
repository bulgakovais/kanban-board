import { useNavigate } from "react-router-dom"
import { projects } from "../../store/constants"
import styles from './Sidebar.module.css'
import classNames from 'classnames'
import menu from '../../img/menu.svg'


export const Sidebar = () => {

    const navigate = useNavigate()

    const checkToProject = (event, id) => {
        event.preventDefault()
        navigate(`/projects/${id}`)
    }

    return (
        <div className={classNames(styles.container, styles.textMenu)}>

            <div className={styles.headering}>
                <div>
                    <p className={styles.blackCircle} />
                    <h2 className={classNames(styles.headeringText)}>
                        Captain
                    </h2>
                </div>
                <img src={menu} alt='menu' />
            </div>

            <div className={styles.groupMenu}>
                <div className='padding'><p className={classNames(styles.menuImageDsb, styles.menuItemMain)}>Дашборд</p></div>
                <div className='padding'><p className={classNames(styles.menuImageTask, styles.menuItemMain)}>Мои задачи</p></div>
                <div className='padding'><p className={classNames(styles.menuImageProj, styles.menuItemMain)}>Проекты</p></div>
            </div>

            <ul className={styles.groupMenu}>
                <li key='favorite' className={styles.subHeadering}>Избранное</li>
                {projects.map((el) => (

                    <div className='padding'><li
                        key={el.id}
                        className={classNames(styles.menuItem, styles.favoriteItem)}
                        onClick={e => checkToProject(e, el.id)}
                    >
                        {el.status === 'В работе' ? <p className={'circle'} />
                            : <p className={classNames('circle', 'circleDone')} />}
                        {el.name}
                    </li></div>
                ))}

                <p className={classNames(styles.subHeadering, styles.horizontalArrow, styles.containerOpen)}>
                    Раскрыть весь список
                </p>
            </ul>

            <ul className={styles.groupMenu}>
                <li key='comand' className={styles.subHeadering}>Команды</li>
                <div className='padding'>
                    <li key='prog' className={classNames(styles.verticalArrow, styles.menuItem)}>Программисты</li>
                </div>
                <div className='padding'>
                    <li key='market' className={classNames(styles.verticalArrow, styles.menuItem)}>Маркетологи</li>
                </div>
                <div className='padding'>
                    <li key='desig' className={classNames(styles.verticalArrow, styles.menuItem)}>Дизайнеры</li>
                </div>
            </ul>
        </div>
    )
}