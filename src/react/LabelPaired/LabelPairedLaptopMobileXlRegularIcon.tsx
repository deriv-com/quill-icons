import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopMobileXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6 7.5c-.437 0-.797.14-1.078.422C4.64 8.203 4.5 8.562 4.5 9v10.5h12V21H1.594c.312.938.984 1.438 2.015 1.5H16.5V24H3.61c-1.032-.031-1.876-.375-2.532-1.031C.391 22.28.031 21.422 0 20.39c.063-.532.36-.828.89-.891H3V9c.031-.844.328-1.547.89-2.11C4.454 6.329 5.157 6.032 6 6h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v1.5h-1.5V9c0-.437-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422zm13.5 6.75v13.5c.031.469.281.719.75.75h7.5c.469-.031.719-.281.75-.75v-13.5c-.031-.469-.281-.719-.75-.75h-7.5c-.469.031-.719.281-.75.75m-1.5 0c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 20.25 12h7.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v13.5a2.446 2.446 0 0 1-.656 1.594A2.446 2.446 0 0 1 27.75 30h-7.5a2.446 2.446 0 0 1-1.594-.656A2.446 2.446 0 0 1 18 27.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileXlRegularIcon);
export default ForwardRef;
