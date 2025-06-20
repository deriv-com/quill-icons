import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedSmBoldIcon = (
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
      <path d='M13.781 10.75c0 3.473-2.597 6.316-5.906 6.727v-1.313c2.598-.41 4.594-2.68 4.594-5.414a5.47 5.47 0 0 0-4.594-5.387v-1.34c3.309.438 5.906 3.282 5.906 6.727m-9.98-4.43-.957-.93a6.9 6.9 0 0 1 3.281-1.367v1.34a5.2 5.2 0 0 0-2.324.957M2.543 7.55a5.46 5.46 0 0 0-.957 2.325H.273c.137-1.203.63-2.324 1.34-3.254zm0 6.4-.93.956a6.6 6.6 0 0 1-1.34-3.281h1.313c.137.875.465 1.668.957 2.324m1.258 1.257c.656.465 1.449.82 2.324.957v1.313a6.6 6.6 0 0 1-3.281-1.34zm1.558-8.094a.68.68 0 0 1 .684.055l4.375 3.062c.191.11.273.329.273.52 0 .219-.082.438-.273.547l-4.375 3.062a.68.68 0 0 1-.684.055c-.191-.11-.328-.355-.328-.601V7.687c0-.218.137-.464.328-.574m.985 1.86v3.582l2.57-1.805z' />
    </g>
    <defs>
      <clipPath id='558705a0483597ceab9ecf61d94b645a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedSmBoldIcon);
export default ForwardRef;
