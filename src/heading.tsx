import React, {FC} from 'react';

interface HeadingProperties {
    title: string;
}

export const Heading: FC<HeadingProperties> = ({title}) => <h1>{title}</h1>;