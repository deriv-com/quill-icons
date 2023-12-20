import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m12.488 11.05-4.812 4.813c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601l4.047-4.075H.813c-.274-.018-.42-.164-.438-.437.018-.273.164-.42.438-.437H11.12L7.074 6.238c-.182-.2-.182-.4 0-.601.2-.183.401-.183.602 0l4.812 4.812c.183.2.183.401 0 .602'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightSmRegularIcon);
export default ForwardRef;
