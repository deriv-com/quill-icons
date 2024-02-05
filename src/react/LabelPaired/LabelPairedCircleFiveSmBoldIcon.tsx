import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveSmBoldIcon = (
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
      <path d='M7 5.063q-1.56 0-2.844.765a5.7 5.7 0 0 0-2.078 2.078 5.64 5.64 0 0 0-.765 2.844q0 1.504.765 2.844a5.7 5.7 0 0 0 2.078 2.078q1.286.765 2.844.765 1.56 0 2.844-.765 1.286-.738 2.078-2.078.765-1.34.765-2.844t-.765-2.844q-.794-1.34-2.078-2.078A5.45 5.45 0 0 0 7 5.062M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93M5.688 7.25H8.53q.602.054.656.656-.054.601-.656.657H6.234l-.218 1.175 1.695.192a2.18 2.18 0 0 1 1.367.71q.52.603.547 1.45-.027.93-.629 1.531-.63.601-1.531.629H6.48q-1.202-.027-1.886-1.012l-.11-.164q-.273-.52.192-.902.52-.274.902.191l.11.164q.3.41.792.41h.985a.82.82 0 0 0 .601-.246.82.82 0 0 0 .246-.601q-.054-.711-.765-.848l-2.379-.273a.58.58 0 0 1-.438-.274.68.68 0 0 1-.136-.492l.437-2.406q.136-.52.657-.547' />
    </g>
    <defs>
      <clipPath id='13f2c19866add50ce239bfcbd4cb2869__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveSmBoldIcon);
export default ForwardRef;
