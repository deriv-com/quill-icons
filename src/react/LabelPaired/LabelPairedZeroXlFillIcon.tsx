import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15c0-4.125 3.328-7.5 7.5-7.5 4.125 0 7.5 3.375 7.5 7.5v6c0 4.172-3.375 7.5-7.5 7.5A7.46 7.46 0 0 1 0 21zm7.5-4.5A4.5 4.5 0 0 0 3 15v6a4.501 4.501 0 0 0 9 0v-6c0-2.484-2.016-4.5-4.5-4.5' />
    </g>
    <defs>
      <clipPath id='c1dc03331be610e1c757d3de730af870__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroXlFillIcon);
export default ForwardRef;
