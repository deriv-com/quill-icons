import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileChartColumnXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M15 28.5c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V15h-5.25a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 9 12.75V7.5H3c-.437 0-.797.14-1.078.422C1.64 8.203 1.5 8.562 1.5 9v18c0 .438.14.797.422 1.078.281.281.64.422 1.078.422zm-3.75-15h5.25a1.25 1.25 0 0 0-.234-.328l-5.438-5.438a.695.695 0 0 0-.328-.187v5.203c.031.469.281.719.75.75M3 6h7.313a2.17 2.17 0 0 1 1.593.656l5.438 5.438c.437.437.656.969.656 1.594V27c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V9c.031-.844.328-1.547.89-2.11C1.454 6.329 2.157 6.032 3 6m6.75 11.25v9c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-9c.031-.469.281-.719.75-.75.469.031.719.281.75.75m4.5 3v6c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-6c.031-.469.281-.719.75-.75.469.031.719.281.75.75m-9 3v3c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-3c.031-.469.281-.719.75-.75.469.031.719.281.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnXlRegularIcon);
export default ForwardRef;
