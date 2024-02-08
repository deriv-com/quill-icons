import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarSmBoldIcon = (
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
      <path d='M4.531 4.406V5.5H8.47V4.406q.054-.601.656-.656.602.054.656.656V5.5h1.094q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23V7.25q.027-.738.52-1.23.492-.493 1.23-.52h1.094V4.406q.054-.601.656-.656.602.054.656.656M1.688 9v7q.027.41.437.438h8.75q.41-.028.438-.438V9z' />
    </g>
    <defs>
      <clipPath id='7b0f036a5d1e5dadbaca47028dede7a1__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarSmBoldIcon);
export default ForwardRef;
