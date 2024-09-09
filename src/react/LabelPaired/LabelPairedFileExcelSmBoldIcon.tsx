import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 16c0 .246.19.438.437.438h7A.45.45 0 0 0 9.438 16V8.125H7.25a.864.864 0 0 1-.875-.875V5.063H2a.45.45 0 0 0-.437.437zM2 3.75h4.512c.465 0 .902.191 1.23.52l2.488 2.488c.329.328.52.765.52 1.23V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m2.46 6.398 1.04 1.286 1.012-1.286a.63.63 0 0 1 .902-.136c.3.246.356.656.11.93L6.32 12.5l1.23 1.586a.63.63 0 0 1-.136.902.625.625 0 0 1-.902-.11L5.5 13.595l-1.012 1.285c-.246.3-.656.355-.93.11a.625.625 0 0 1-.109-.903L4.652 12.5 3.45 10.941a.604.604 0 0 1 .11-.902.604.604 0 0 1 .902.11' />
    </g>
    <defs>
      <clipPath id='8586fdf20d2a8278563ff8fab366fe28__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelSmBoldIcon);
export default ForwardRef;
