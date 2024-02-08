import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightSmRegularIcon = (
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
      <path d='m12.488 11.05-4.812 4.813q-.3.275-.602 0-.273-.3 0-.601l4.047-4.075H.813q-.411-.027-.438-.437.027-.41.438-.437H11.12L7.074 6.238q-.273-.3 0-.601.3-.274.602 0l4.812 4.812q.274.3 0 .602' />
    </g>
    <defs>
      <clipPath id='32162e640e2012639c278c0862627b83__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightSmRegularIcon);
export default ForwardRef;
