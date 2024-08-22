import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 5.5H3.75a.88.88 0 0 0-.875.875v7H2v-7c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75v7h-.875v-7a.9.9 0 0 0-.875-.875M2.328 16h13.317a1.23 1.23 0 0 0 1.175-.875H1.152c.164.52.63.875 1.176.875M.25 14.797c0-.3.219-.547.52-.547h16.433c.3 0 .547.246.547.547 0 1.148-.957 2.078-2.105 2.078H2.328A2.077 2.077 0 0 1 .25 14.797' />
    </g>
    <defs>
      <clipPath id='accd494e27624fdd54ba2a0aa94d159c__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopSmRegularIcon);
export default ForwardRef;
