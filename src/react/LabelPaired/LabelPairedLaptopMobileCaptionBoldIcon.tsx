import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 4.625q-.352.023-.375.375v6H8.25v1.5H1.125a1.22 1.22 0 0 1-.797-.328A1.22 1.22 0 0 1 0 11.375q.023-.352.375-.375H1.5V5q.024-.632.445-1.055Q2.368 3.524 3 3.5h7.5q.633.024 1.055.445.421.423.445 1.055v.75h-1.125V5q-.023-.352-.375-.375zm6 3q.024-.468.328-.797.329-.304.797-.328h3.75q.469.024.797.328.304.328.328.797v6.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-3.75a1.22 1.22 0 0 1-.797-.328A1.22 1.22 0 0 1 9 14.375zm1.125 0v6.75h3.75v-6.75z' />
    </g>
    <defs>
      <clipPath id='f49bd6d5f9f6b970fb6be48e0a7c1e2b__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileCaptionBoldIcon);
export default ForwardRef;
