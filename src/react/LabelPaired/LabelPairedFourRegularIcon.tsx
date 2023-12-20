import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFourRegularIcon = (
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
        d='M5.438 5.719 1.313 14H9V8.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5V14h1.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H10v3.5c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V15H.5a.507.507 0 0 1-.437-.219.531.531 0 0 1 0-.5l4.5-9c.145-.27.364-.343.656-.218.27.166.343.385.218.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourRegularIcon);
export default ForwardRef;
