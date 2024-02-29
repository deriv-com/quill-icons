import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarSmRegularIcon = (
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
      <path d='M3.438 3.75q.41.027.437.438V5.5h5.25V4.188q.027-.411.438-.438.41.027.437.438V5.5h.875q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23V7.25q.027-.738.52-1.23.492-.493 1.23-.52H3V4.188q.027-.411.438-.438M11.75 9H1.25v7q0 .383.246.629a.85.85 0 0 0 .629.246h8.75a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629zm-.875-2.625h-8.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v.875h10.5V7.25a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246' />
    </g>
    <defs>
      <clipPath id='2d9f3264e42cf98773f3c7d3f9dd3461__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarSmRegularIcon);
export default ForwardRef;
