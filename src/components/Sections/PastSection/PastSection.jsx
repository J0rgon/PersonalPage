import Content from '../../Content/Content';
import Title from '../../Title/Title';
import style from './PastSection.module.css';

function Past() {
    return (
        <section>
        <Title value={'What has happened so far?'} />
        <Content content={
            <>
                <p>
                    Here you can select every year of my life so far, and I tell you what I know/remember about it.
                </p>
            </>
        }/>
        </section>
    );
}

export default Past;