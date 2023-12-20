import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12 10.5c0-1-.25-1.917-.75-2.75a5.418 5.418 0 0 0-2-2A5.464 5.464 0 0 0 6.5 5c-.958 0-1.875.25-2.75.75a5.418 5.418 0 0 0-2 2C1.25 8.583 1 9.5 1 10.5s.25 1.917.75 2.75c.48.833 1.146 1.5 2 2 .875.5 1.792.75 2.75.75s1.875-.25 2.75-.75a5.418 5.418 0 0 0 2-2c.5-.833.75-1.75.75-2.75m-1.281 4.938c-1.167 1-2.573 1.52-4.219 1.562-1.833-.042-3.365-.677-4.594-1.906C.677 13.864.042 12.334 0 10.5c.042-1.833.677-3.365 1.906-4.594C3.136 4.677 4.666 4.042 6.5 4c1.833.042 3.365.677 4.594 1.906 1.229 1.23 1.864 2.76 1.906 4.594-.042 1.646-.562 3.052-1.562 4.219l4.406 4.437c.208.23.208.459 0 .688-.23.208-.459.208-.688 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchRegularIcon);
export default ForwardRef;
