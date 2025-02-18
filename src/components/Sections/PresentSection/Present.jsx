import style from './Present.module.css';
import Title from '../../Title/Title.jsx';
import { present } from '../../../../contentStrings.js';
import Content from '../../Content/Content.jsx';
import currentFace from '../../../assets/present.jpg';

function Present(){
    return(
        <section>
            <Title value={"What about now?"}/>
            <Content content={
                <>
                    <img src={currentFace} alt="My face as I wrote this"/>
                    <p>
                        {present}
                    </p>
                </>
            }/>
        </section>
    );
}

export default Present;
