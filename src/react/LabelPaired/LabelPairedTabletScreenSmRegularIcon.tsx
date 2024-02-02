import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenSmRegularIcon = (
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
      <path d='M10.875 4.625h-8.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v7h10.5v-7a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246m.875 8.75H1.25V16q0 .383.246.629a.85.85 0 0 0 .629.246h8.75a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629zM2.125 3.75h8.75q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23V5.5q.027-.738.52-1.23.492-.493 1.23-.52m3.063 11.375q.027-.41.437-.437h1.75q.41.027.438.437-.029.41-.438.438h-1.75q-.41-.028-.437-.438' />
    </g>
    <defs>
      <clipPath id='88969f4e87648f78__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenSmRegularIcon);
export default ForwardRef;
