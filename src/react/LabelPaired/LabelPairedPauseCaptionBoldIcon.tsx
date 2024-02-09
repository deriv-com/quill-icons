import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 6.125v6.75H2.5v-6.75zm-1.125 0q.024-.468.328-.797.329-.304.797-.328H2.5q.469.024.797.328.304.328.328.797v6.75a1.22 1.22 0 0 1-.328.797A1.22 1.22 0 0 1 2.5 14H1.375a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zm5.25 0v6.75h1.125v-6.75zm-1.125 0q.024-.468.328-.797.328-.304.797-.328h1.125q.469.024.797.328.304.328.328.797v6.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328H5.5a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797z' />
    </g>
    <defs>
      <clipPath id='ae58a917c6941c078347e338a0112303__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseCaptionBoldIcon);
export default ForwardRef;
