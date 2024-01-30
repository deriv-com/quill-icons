import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeSmRegularIcon = (
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
      <path d='M1.75 5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V9h12.25V6.375a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zM.875 9.875v5.25q0 .383.246.629A.85.85 0 0 0 1.75 16h10.5a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-5.25zM0 6.375q.027-.738.52-1.23.492-.493 1.23-.52h10.5q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23z' />
    </g>
    <defs>
      <clipPath id='c391559c3c0bc4cbc72c351348915ecc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeSmRegularIcon);
export default ForwardRef;
