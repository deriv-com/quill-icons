import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeSmBoldIcon = (
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
      <path d='M1.75 6.813q-.41.027-.437.437v.602l4.73 3.882q.437.33.957.329a1.6 1.6 0 0 0 .984-.329l4.704-3.882V7.25q-.028-.41-.438-.437zm-.437 2.734v4.703q.027.41.437.438h10.5q.41-.028.438-.438V9.547l-3.883 3.2a2.9 2.9 0 0 1-3.61 0zM0 7.25q.027-.738.52-1.23.492-.493 1.23-.52h10.5q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23z' />
    </g>
    <defs>
      <clipPath id='763b24b1ab00a938eba2ecf245b2870c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeSmBoldIcon);
export default ForwardRef;
