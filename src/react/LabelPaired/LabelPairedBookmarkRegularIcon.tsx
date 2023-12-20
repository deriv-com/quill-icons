import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBookmarkRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5.5c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 1.5 4h9c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v13.813c-.042.416-.27.645-.687.687a.582.582 0 0 1-.376-.125L6 16.594l-4.937 3.281A.582.582 0 0 1 .688 20c-.417-.042-.646-.27-.688-.687zM1.5 5c-.312.02-.48.188-.5.5v13.219l4.719-3.125a.469.469 0 0 1 .562 0L11 18.719V5.5c-.02-.312-.187-.48-.5-.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkRegularIcon);
export default ForwardRef;
