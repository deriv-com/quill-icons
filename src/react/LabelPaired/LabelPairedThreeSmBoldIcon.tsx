import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.281q.054-.601.656-.656h7q.438.027.602.41.165.41-.137.711l-4.074 3.91h1.094q1.53.027 2.543 1.067 1.039 1.011 1.066 2.543-.027 1.53-1.066 2.543-1.013 1.038-2.543 1.066H2.777q-.82 0-1.476-.437a2.87 2.87 0 0 1-1.067-1.122l-.027-.109q-.219-.574.273-.875.575-.219.875.273l.055.11q.465.82 1.367.848h2.489q.984-.029 1.613-.684.655-.63.684-1.613-.029-.985-.684-1.614-.63-.656-1.613-.683H2.53q-.437-.027-.601-.41-.165-.41.136-.711l4.075-3.91H.78Q.18 5.882.125 5.28' />
    </g>
    <defs>
      <clipPath id='63f9b0dcbc264c64a97dba2321b4c611__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeSmBoldIcon);
export default ForwardRef;
