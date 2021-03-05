import { DragList } from '../DragList';
import { OptionsSection } from '../OptionsSection';
import { FooterList } from '../FooterList';
import { useState } from 'react';
import { GPSection } from '../GPSection';
import { getGP } from '../../services/gps';

const Standing = ({ type, elements }) => {
    const [GP, setGP] = useState();

    const onChange = (e) => {
        setGP(getGP(e.target.value));
    };

    return (
        <div>
            <h2>Standing of {type}</h2>
            <OptionsSection onChange={onChange}/>
            <div id="standing">
                {GP && <GPSection GP={GP}/>}
                <DragList
                    elements={elements}
                    type={type} />
                    <FooterList/>
            </div>
        </div>
    );
};

export { Standing };