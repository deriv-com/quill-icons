import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignSmRegularIcon = (
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
      <path d='M2.313 7.906v2.844h4.374a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H2.285A10.9 10.9 0 0 1 1.273 16h7.165a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.561a.48.48 0 0 1-.382-.191.42.42 0 0 1 0-.438l.027-.055a9.8 9.8 0 0 0 1.203-4.566H.563a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h.875V7.906a3.273 3.273 0 0 1 3.28-3.281h.192c.356 0 .684.082 1.04.191l2.187.711c.218.082.328.328.273.575-.082.218-.328.328-.574.273l-2.188-.738A2.2 2.2 0 0 0 4.91 5.5H4.72a2.41 2.41 0 0 0-2.407 2.406' />
    </g>
    <defs>
      <clipPath id='130c23393cfec8f77f5cb9d028854e84__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignSmRegularIcon);
export default ForwardRef;
