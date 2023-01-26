import styles from './ProjectHeader.module.css'
import classNames from 'classnames'



export const ProjectHeader = () => {

    return (
        <>
            <div className={styles.container}>
                <p className={styles.text}>Последняя задача выполнена 10 марта</p>
                <div className={styles.paramsContainer}>
                    <p className={classNames(styles.params, styles.filterImg)}>Фильтрация</p>
                    <p className={classNames(styles.params, styles.sortImg)}>Сортировка</p>
                </div>
            </div>

        </>
    )
}