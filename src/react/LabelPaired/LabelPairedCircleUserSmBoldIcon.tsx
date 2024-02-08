import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSmBoldIcon = (
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
      <path d='M11.129 14.688q1.504-1.586 1.559-3.938-.056-2.406-1.668-4.02Q9.406 5.117 7 5.062q-2.406.056-4.02 1.668-1.613 1.614-1.667 4.02.055 2.351 1.585 3.938a3.36 3.36 0 0 1 1.258-1.586q.848-.575 1.969-.602h1.75q1.121.027 1.969.602.874.601 1.285 1.585m-1.121.874h.027a2.37 2.37 0 0 0-.765-1.257q-.575-.465-1.395-.492h-1.75q-.82.027-1.395.492a2.22 2.22 0 0 0-.738 1.258q1.313.847 3.008.874 1.695-.027 3.008-.875M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93m0-7.437q.63-.028.957-.547.273-.548 0-1.094-.328-.52-.957-.547-.63.027-.957.547-.273.546 0 1.094.329.519.957.547M4.594 9.219Q4.648 7.85 5.797 7.14q1.203-.657 2.406 0 1.149.71 1.203 2.078-.054 1.367-1.203 2.078-1.203.656-2.406 0-1.149-.711-1.203-2.078' />
    </g>
    <defs>
      <clipPath id='1a7b13449a3f8924a99ea298d4b184d8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSmBoldIcon);
export default ForwardRef;
