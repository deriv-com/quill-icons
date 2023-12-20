import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendDownSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M17.066 17.285a.45.45 0 0 1-.601-.191l-2.488-5.032H9.875a.45.45 0 0 1-.41-.218L6.156 5.227 1.316 7.66c-.218.11-.492 0-.601-.191a.449.449 0 0 1 .191-.602l5.25-2.625a.449.449 0 0 1 .602.192l3.363 6.754h4.129c.164 0 .3.109.383.246l2.625 5.25a.449.449 0 0 1-.192.601'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownSmRegularIcon);
export default ForwardRef;
