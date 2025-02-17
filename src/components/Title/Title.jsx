
import style from './Title.module.css';

function Title({value}){
    return (
        <div className={style.titleContainer} id='beginning'>
            <h2 className={style.title}>{value}</h2>
        </div>
    );
}

export default Title;