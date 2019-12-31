import React, {FC} from 'react';

interface HeadingProperties {
    recipient: string;
}

export const Heading: FC<HeadingProperties> = ({recipient}) => <h1>{recipient}</h1>;