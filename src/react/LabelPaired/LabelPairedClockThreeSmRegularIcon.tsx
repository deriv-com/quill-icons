import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClockThreeSmRegularIcon = (
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
      <path d='M13.125 10.75a6.3 6.3 0 0 0-.82-3.062 6.3 6.3 0 0 0-2.242-2.243 6.12 6.12 0 0 0-6.126 0 6.3 6.3 0 0 0-2.242 2.242 6.3 6.3 0 0 0-.82 3.063 6.3 6.3 0 0 0 .82 3.063 6.3 6.3 0 0 0 2.242 2.242 6.12 6.12 0 0 0 6.126 0 6.3 6.3 0 0 0 2.242-2.242q.792-1.395.82-3.063M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m6.563-3.937q.027-.411.437-.438.41.027.438.438v3.5h2.625q.41.027.437.437-.027.41-.437.438H7q-.41-.028-.437-.438z' />
    </g>
    <defs>
      <clipPath id='b9932bcbebf49064__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClockThreeSmRegularIcon);
export default ForwardRef;
