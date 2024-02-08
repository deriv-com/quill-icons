import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileSmBoldIcon = (
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
      <path d='M3.75 5.063q-.41.027-.437.437v7h6.562v1.75H1.563a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93q.027-.41.438-.437H2v-7q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23v.875h-1.312V5.5q-.028-.41-.438-.437zm7 3.5q.027-.547.383-.93.383-.356.93-.383h4.374q.547.027.93.383.356.382.383.93v7.874a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383h-4.375a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93zm1.313 0v7.874h4.374V8.563z' />
    </g>
    <defs>
      <clipPath id='55c2f9514512e1125e958d775b5e0112__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileSmBoldIcon);
export default ForwardRef;
