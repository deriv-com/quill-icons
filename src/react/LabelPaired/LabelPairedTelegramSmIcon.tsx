import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramSmIcon = (
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
      <path d='M7 3.969q1.887.027 3.418.93a6.77 6.77 0 0 1 2.434 2.433q.902 1.53.93 3.418-.028 1.887-.93 3.418a6.8 6.8 0 0 1-2.434 2.434q-1.53.901-3.418.93-1.887-.029-3.418-.93a6.77 6.77 0 0 1-2.434-2.434q-.901-1.53-.93-3.418.028-1.887.93-3.418a6.77 6.77 0 0 1 2.434-2.434q1.53-.901 3.418-.93m3.145 4.62v-.273a.4.4 0 0 0-.11-.191.53.53 0 0 0-.273-.082q-.137 0-.657.191-.491.165-1.859.739-.984.41-3.965 1.695-.465.192-.492.383 0 .273.574.41.083 0 .164.027.246.11.547.164.3.082.492.082.329.029.739-.246 2.761-1.887 2.87-1.914.056-.027.137.028.055.08.028.109-.055.136-.602.629-.519.519-.957.93-.273.218-.3.273l-.165.164q-.273.219-.328.438-.081.19.328.492.41.246.739.465.327.246.793.546l.218.165q.41.327.848.328.3.027.465-.684l.273-1.559q.165-.93.301-1.832.136-.93.192-1.476' />
    </g>
    <defs>
      <clipPath id='93bba7ba6c7120a1b38112c47f549498__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramSmIcon);
export default ForwardRef;
