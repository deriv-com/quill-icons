import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v8.75q0 .383.246.629a.85.85 0 0 0 .629.246h8.75a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-8.75a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm-1.75.875q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23zm9.05 2.926-3.5 3.5q-.3.273-.6 0l-1.75-1.75q-.275-.3 0-.602.3-.273.6 0l1.45 1.422 3.2-3.172q.3-.273.6 0 .274.3 0 .602' />
    </g>
    <defs>
      <clipPath id='5383fe06edfcf566dbf7c107474391db__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckSmRegularIcon);
export default ForwardRef;
