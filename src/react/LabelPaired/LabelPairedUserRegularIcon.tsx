import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUserRegularIcon = (
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
        d='M10 8c0-.542-.135-1.042-.406-1.5A3.007 3.007 0 0 0 7 5a3.007 3.007 0 0 0-2.594 1.5C4.136 6.958 4 7.458 4 8s.135 1.042.406 1.5A3.007 3.007 0 0 0 7 11a3.007 3.007 0 0 0 2.594-1.5c.27-.458.406-.958.406-1.5M3 8c0-.73.177-1.396.531-2A4.134 4.134 0 0 1 5 4.531 3.993 3.993 0 0 1 7 4c.708 0 1.375.177 2 .531A4.134 4.134 0 0 1 10.469 6c.354.604.531 1.27.531 2s-.177 1.396-.531 2A4.134 4.134 0 0 1 9 11.469 3.994 3.994 0 0 1 7 12a3.994 3.994 0 0 1-2-.531A4.133 4.133 0 0 1 3.531 10 3.882 3.882 0 0 1 3 8M1 19h12c-.042-1.27-.5-2.333-1.375-3.187-.854-.834-1.917-1.271-3.187-1.313H5.562c-1.27.042-2.333.48-3.187 1.313C1.5 16.667 1.042 17.729 1 19m-1 .063c.042-1.563.583-2.875 1.625-3.938C2.688 14.083 4 13.542 5.563 13.5h2.875c1.562.042 2.874.583 3.937 1.625 1.042 1.063 1.583 2.375 1.625 3.938 0 .27-.094.49-.281.656a.836.836 0 0 1-.656.281H.938a.836.836 0 0 1-.657-.281.836.836 0 0 1-.281-.657'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserRegularIcon);
export default ForwardRef;
