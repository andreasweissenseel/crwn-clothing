import React from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import SECTION_DATA from './sections.data';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            section: SECTION_DATA
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.section.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;