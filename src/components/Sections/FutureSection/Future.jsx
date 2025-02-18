import style from './Future.module.css';
import Title from '../../Title/Title.jsx';
import Content from '../../Content/Content.jsx';
import amy from '../../../assets/amy.jpeg';
import { future } from '../../../../contentStrings.js';

function Future(){
    return (
        <section>
            <Title value={'What do I think could happen next?'} />
            <Content content={
                <>
                    <img src={amy} alt="Cool amy rose image because I felt like it"/>
                    <p>
                        {future}
                    </p>
                </>
            } />
        </section>
    );
};

export default Future;