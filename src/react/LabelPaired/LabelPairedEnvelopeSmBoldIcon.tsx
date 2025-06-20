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
      <path d='M1.75 6.813a.45.45 0 0 0-.437.437v.629l4.703 3.855a1.526 1.526 0 0 0 1.941 0l4.73-3.855V7.25a.47.47 0 0 0-.437-.437zm-.437 2.761v4.676c0 .246.19.438.437.438h10.5a.45.45 0 0 0 .438-.438V9.574l-3.883 3.172c-1.067.875-2.57.875-3.61 0zM0 7.25C0 6.293.766 5.5 1.75 5.5h10.5c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75C.766 16 0 15.234 0 14.25z' />
    </g>
    <defs>
      <clipPath id='e7c5bdb4c61190285a4494383789d5b7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeSmBoldIcon);
export default ForwardRef;
