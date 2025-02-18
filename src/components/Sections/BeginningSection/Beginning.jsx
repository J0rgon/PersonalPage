import style from './Beginning.module.css';
import { beginning } from '../../../../contentStrings.js';
import Title from '../../Title/Title.jsx';
import Content from '../../Content/Content.jsx';
import face from '../../../assets/myFace.jpg';

function Beginning() {
    return (
        <section>
            <Title value={'Beginning'} />
            <Content content={
                <>
                    <h3>
                      Hi!
                    </h3>
                    <img src={face}></img>
                    <p>
                      {beginning}
                    </p>
                </>
            }/>
        </section>
    );
}

export default Beginning;