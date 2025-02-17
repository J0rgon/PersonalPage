import style from './Content.module.css';

function Content({content}){
    return (
        <div className={style.contentDiv}>
            {content}
        </div>
    );
}

export default Content;