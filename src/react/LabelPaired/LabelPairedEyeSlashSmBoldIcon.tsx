import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.29 3.914 3.062 2.379C5.582 5.363 7.113 4.625 9 4.625c2.188 0 3.965 1.012 5.25 2.215 1.285 1.176 2.133 2.598 2.543 3.582a.98.98 0 0 1 0 .683c-.355.875-1.094 2.133-2.187 3.227l2.87 2.27c.301.218.356.628.11.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903.604.604 0 0 1 .903-.109m4.128 3.227 1.258.984A3.5 3.5 0 0 1 9 7.25c1.914 0 3.5 1.586 3.5 3.5 0 .602-.137 1.148-.41 1.613l1.476 1.149c.957-.93 1.614-1.996 1.942-2.762-.356-.82-1.094-1.969-2.16-2.953-1.121-1.04-2.57-1.86-4.348-1.86-1.395 0-2.57.493-3.582 1.204m5.605 4.402c.11-.246.165-.52.165-.793A2.194 2.194 0 0 0 9 8.563h-.055c.028.164.055.3.055.437 0 .3-.082.547-.191.793zM12.445 16A7.16 7.16 0 0 1 9 16.875c-2.215 0-3.992-.984-5.277-2.187-1.285-1.204-2.133-2.626-2.543-3.583a.98.98 0 0 1 0-.683C1.453 9.793 1.89 9 2.52 8.18L3.53 9a8.6 8.6 0 0 0-1.066 1.75c.383.82 1.094 1.996 2.16 2.98 1.121 1.04 2.57 1.832 4.375 1.832.82 0 1.586-.164 2.297-.464zm-2.406-1.887a4.4 4.4 0 0 1-1.066.137 3.507 3.507 0 0 1-3.5-3.5c0-.055.027-.137.027-.219l1.531 1.203c.274.575.82 1.012 1.477 1.149z' />
    </g>
    <defs>
      <clipPath id='41676f2c5ffae7acb6c19c398384781d__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashSmBoldIcon);
export default ForwardRef;
