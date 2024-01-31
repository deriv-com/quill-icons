import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroSmRegularIcon = (
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
      <path d='M13.125 10.75a6.3 6.3 0 0 0-.82-3.062 6.3 6.3 0 0 0-2.242-2.243 6.12 6.12 0 0 0-6.126 0 6.3 6.3 0 0 0-2.242 2.242 6.3 6.3 0 0 0-.82 3.063 6.3 6.3 0 0 0 .82 3.063 6.3 6.3 0 0 0 2.242 2.242 6.12 6.12 0 0 0 6.126 0 6.3 6.3 0 0 0 2.242-2.242q.792-1.395.82-3.063M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m3.5.438h.656a3 3 0 0 1-.027-.41q0-.247.027-.466H3.5q-.41-.027-.437-.437.027-.41.437-.437h.93A3 3 0 0 1 5.55 8.18a2.94 2.94 0 0 1 1.669-.492h1.12q.411.027.438.437-.027.41-.437.438H7.219q-1.122.027-1.75.874h2.406q.41.028.438.438-.029.41-.438.438H5.059q-.055.218-.055.464 0 .22.055.41h2.816q.41.028.438.438-.029.41-.438.438h-2.46q.655.875 1.804.93h1.12q.411.026.438.437-.027.382-.437.437H7.219a3.15 3.15 0 0 1-1.696-.52 3 3 0 0 1-1.093-1.284H3.5q-.41-.028-.437-.438.027-.41.437-.437' />
    </g>
    <defs>
      <clipPath id='70c2d5ef6ebe7cd6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroSmRegularIcon);
export default ForwardRef;
