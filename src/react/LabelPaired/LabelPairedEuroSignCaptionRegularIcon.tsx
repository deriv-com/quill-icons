import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.047 8.75H.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h.586a5.246 5.246 0 0 1 1.875-2.695c.906-.688 1.96-1.04 3.164-1.055h1.148c.235.016.36.14.375.375-.015.234-.14.36-.375.375H6.25c-1 .016-1.875.297-2.625.844A4.555 4.555 0 0 0 2.008 8h4.617c.234.016.36.14.375.375-.016.234-.14.36-.375.375H1.82a4.062 4.062 0 0 0 0 1.5h4.805c.234.016.36.14.375.375-.016.234-.14.36-.375.375H2.008c.328.89.867 1.61 1.617 2.156.75.547 1.625.828 2.625.844h1.148c.235.016.36.14.375.375-.015.234-.14.36-.375.375H6.25c-1.203-.016-2.258-.367-3.164-1.055A5.245 5.245 0 0 1 1.21 11H.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h.422a6.04 6.04 0 0 1 0-1.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignCaptionRegularIcon);
export default ForwardRef;
