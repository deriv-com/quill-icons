import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaySmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.563 15.563 7.875-4.813-7.876-4.812zM.933 4.789q.657-.355 1.313.027l7.875 4.813q.601.383.629 1.121-.027.738-.629 1.121l-7.875 4.813q-.656.383-1.312.027-.657-.383-.684-1.148V5.938q.027-.766.684-1.149' />
    </g>
    <defs>
      <clipPath id='3f126bd67bad89e3__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaySmBoldIcon);
export default ForwardRef;
