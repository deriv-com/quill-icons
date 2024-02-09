import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGooglePlaySmIcon = (
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
      <path d='m8.887 10.148 1.64-1.64-7.656-4.403zM1.285 3.75l7.028 7-7.028 7q-.574-.3-.601-.957V4.707q.027-.655.601-.957m11.621 6.18q.41.3.41.82t-.382.82l-1.641.957-1.777-1.777L11.293 9zM2.871 17.395l6.016-6.043 1.64 1.64z' />
    </g>
    <defs>
      <clipPath id='3936a24afe8df6d997d3d8bc363ee813__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlaySmIcon);
export default ForwardRef;
