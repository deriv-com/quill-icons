import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeSmRegularIcon = (
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
      <path d='M3.938 3.75q.41.027.437.438V5.5h5.25V4.188q.027-.411.438-.438.41.027.437.438V5.5h.875q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23V7.25q.027-.738.52-1.23.492-.493 1.23-.52H3.5V4.188q.027-.411.438-.438M12.25 9H1.75v7q0 .383.246.629a.85.85 0 0 0 .629.246h8.75a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629zm-.875-2.625h-8.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v.875h10.5V7.25a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246m0 4.813q-.027.41-.437.437H6.562q-.41-.027-.437-.437.027-.411.438-.438h4.375q.41.027.437.438m-3.937 3.937H3.063q-.411-.027-.438-.437.027-.411.438-.438h4.374q.411.027.438.438-.027.41-.437.437M3.5 11.188q.027.41.438.437.41-.027.437-.437-.027-.411-.437-.438-.411.027-.438.438m.438 1.312q-.74-.027-1.149-.656a1.4 1.4 0 0 1 0-1.313q.41-.629 1.148-.656.74.027 1.149.656.329.657 0 1.313-.41.629-1.149.656m6.124 2.625q.411-.027.438-.437-.027-.411-.437-.438-.411.027-.438.438.027.41.438.437m1.313-.437q-.027.738-.656 1.148a1.4 1.4 0 0 1-1.313 0q-.629-.41-.656-1.149.027-.738.656-1.148a1.4 1.4 0 0 1 1.313 0q.629.41.656 1.149' />
    </g>
    <defs>
      <clipPath id='d2bf5a5cf8ad082e530c51fcd68fd2b2__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeSmRegularIcon);
export default ForwardRef;
