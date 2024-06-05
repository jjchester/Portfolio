import React from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
    width: string,
    height: string,
    color: string
}
const GitIcon = ({ width = "92px", height = "92px", color }: Props) => {
    return (
        <Box
            as="svg"
            width={width}
            height={height}
            viewBox="0 0 92 92"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
        >
            <defs>
                <clipPath id="a">
                    <path d="M0 .113h91.887V92H0Zm0 0" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)">
                <path
                    style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: color,
                        fillOpacity: 1,
                    }}
                    d="M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371"
                />
            </g>
        </Box>
    );
};

export default GitIcon;