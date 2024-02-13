import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeSmBoldIcon = (
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
      <path d='M5.031 4.406V5.5H8.97V4.406q.054-.601.656-.656.602.054.656.656V5.5h1.094q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23V7.25q.027-.738.52-1.23.492-.493 1.23-.52h1.094V4.406q.054-.601.656-.656.602.054.656.656M2.188 9v7q.027.41.437.438h8.75q.41-.028.438-.438V9zM3.5 11.625q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629m6.125 1.75q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246m-3.5-1.75q.054-.602.656-.656h3.063q.601.054.656.656-.055.602-.656.656H6.78q-.601-.054-.656-.656m1.094 1.969q.601.054.656.656-.054.602-.656.656H4.156q-.601-.054-.656-.656.054-.602.656-.656z' />
    </g>
    <defs>
      <clipPath id='afc74717460ac925f7a0f1c6861d6276__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeSmBoldIcon);
export default ForwardRef;
