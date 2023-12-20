import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedXmarkRegularIcon = (
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
        d='M10.156 16.844 6 12.719l-4.125 4.125c-.25.187-.49.187-.719 0-.187-.23-.187-.459 0-.688L5.281 12 1.156 7.875c-.187-.25-.187-.49 0-.719.23-.187.469-.187.719 0L6 11.281l4.156-4.125c.23-.187.459-.187.688 0 .187.23.187.469 0 .719L6.719 12l4.125 4.156c.187.23.187.459 0 .688-.23.187-.459.187-.688 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkRegularIcon);
export default ForwardRef;
