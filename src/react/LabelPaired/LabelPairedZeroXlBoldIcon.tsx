import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroXlBoldIcon = (
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
      <path d='M0 15c0-4.125 3.328-7.5 7.5-7.5 4.125 0 7.5 3.375 7.5 7.5v6c0 4.172-3.375 7.5-7.5 7.5A7.46 7.46 0 0 1 0 21zm7.5-5.25c-2.906 0-5.25 2.39-5.25 5.25v6a5.24 5.24 0 0 0 5.25 5.25c2.86 0 5.25-2.344 5.25-5.25v-6c0-2.86-2.39-5.25-5.25-5.25' />
    </g>
    <defs>
      <clipPath id='6cc5f59334e8aae42ffa66ad598697a3__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroXlBoldIcon);
export default ForwardRef;
