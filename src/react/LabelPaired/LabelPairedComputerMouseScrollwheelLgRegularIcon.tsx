import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.75 19.25v-7.5c0-2.734-2.266-5-5-5h-2.5c-2.773 0-5 2.266-5 5v7.5c0 2.773 2.227 5 5 5h2.5c2.734 0 5-2.227 5-5M0 11.75A6.243 6.243 0 0 1 6.25 5.5h2.5c3.438 0 6.25 2.813 6.25 6.25v7.5a6.243 6.243 0 0 1-6.25 6.25h-2.5A6.22 6.22 0 0 1 0 19.25zm8.125-1.875v2.5A.64.64 0 0 1 7.5 13a.617.617 0 0 1-.625-.625v-2.5c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='3fc207d9f396c4f4e3fc0ebf1e706d62__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelLgRegularIcon);
export default ForwardRef;
