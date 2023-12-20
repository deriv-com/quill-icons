import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUserBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.5 8c-.02-.937-.437-1.656-1.25-2.156-.833-.459-1.667-.459-2.5 0-.812.5-1.23 1.218-1.25 2.156.02.938.438 1.656 1.25 2.156.833.459 1.667.459 2.5 0C9.063 9.656 9.48 8.937 9.5 8M3 8c0-.73.177-1.396.531-2A4.134 4.134 0 0 1 5 4.531 3.993 3.993 0 0 1 7 4c.708 0 1.375.177 2 .531A4.134 4.134 0 0 1 10.469 6c.354.604.531 1.27.531 2s-.177 1.396-.531 2A4.134 4.134 0 0 1 9 11.469 3.994 3.994 0 0 1 7 12a3.994 3.994 0 0 1-2-.531A4.133 4.133 0 0 1 3.531 10 3.882 3.882 0 0 1 3 8M1.531 18.5H12.47c-.167-1.02-.615-1.854-1.344-2.5-.75-.646-1.646-.98-2.687-1H5.562c-1.041.02-1.927.354-2.656 1-.75.646-1.208 1.48-1.375 2.5M0 19.063c.042-1.563.583-2.875 1.625-3.938C2.688 14.083 4 13.542 5.563 13.5h2.875c1.562.042 2.874.583 3.937 1.625 1.042 1.063 1.583 2.375 1.625 3.938 0 .27-.094.49-.281.656a.836.836 0 0 1-.656.281H.938a.836.836 0 0 1-.657-.281.836.836 0 0 1-.281-.657'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserBoldIcon);
export default ForwardRef;
