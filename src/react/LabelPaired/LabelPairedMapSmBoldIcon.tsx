import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.574 4.762c.192.11.301.328.301.52v9.187c0 .273-.191.52-.437.629l-4.594 1.75a.6.6 0 0 1-.438 0L5.375 15.18 1 16.848a.6.6 0 0 1-.602-.082c-.191-.11-.273-.328-.273-.547V7.03c0-.273.164-.492.41-.601L5.13 4.68a.6.6 0 0 1 .437 0l5.032 1.668 4.375-1.668a.6.6 0 0 1 .601.082M1.438 7.496v7.793l3.28-1.258V6.238zm8.53 7.82V7.523L6.032 6.211v7.793zm1.313-.027 3.281-1.258V6.238l-3.28 1.258z' />
    </g>
    <defs>
      <clipPath id='3b719ac7eee4979149d65098acc9cb99__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapSmBoldIcon);
export default ForwardRef;
