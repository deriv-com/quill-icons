import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={22}
    viewBox='0 0 6 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 5.5q0-.383.246-.629A.85.85 0 0 1 3 4.625q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629M.813 8.563q.027-.411.437-.438H3q.41.027.438.438V16h1.75q.41.027.437.438-.027.41-.437.437H.813q-.411-.027-.438-.437.027-.411.438-.438h1.75V9H1.25q-.41-.027-.437-.437' />
    </g>
    <defs>
      <clipPath id='44f726c8324e77bfa851b1b3f570d676__a'>
        <path d='M0 0h6v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmRegularIcon);
export default ForwardRef;
