import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 6.375a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v1.094l5.36 3.91q.765.519 1.53 0l5.36-3.91V7.25a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zM.875 9.438v4.812q0 .383.246.629a.85.85 0 0 0 .629.246h10.5a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V9.438l-4.84 3.527A2.07 2.07 0 0 1 7 13.402q-.71 0-1.285-.437zM0 7.25q.027-.738.52-1.23.492-.493 1.23-.52h10.5q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23z' />
    </g>
    <defs>
      <clipPath id='5c94cf1cbabca4c3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeSmRegularIcon);
export default ForwardRef;
