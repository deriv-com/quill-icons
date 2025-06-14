import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderSmBoldIcon = (
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
      <path d='M0 5.281c0-.82.684-1.531 1.531-1.531H3.72c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H1.53a.216.216 0 0 0-.218.218V7.47c0 .383-.301.656-.657.656A.63.63 0 0 1 0 7.469zm9.625-.875c0-.355.273-.656.656-.656h2.188c.82 0 1.531.71 1.531 1.531V7.47c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.28c0-.11-.11-.218-.22-.218h-2.187a.63.63 0 0 1-.656-.657M.656 13.375c.356 0 .657.3.657.656v2.188c0 .136.082.218.218.218H3.72c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.53A1.53 1.53 0 0 1 0 16.219V14.03c0-.355.273-.656.656-.656m12.688 0c.355 0 .656.3.656.656v2.188c0 .847-.71 1.531-1.531 1.531H10.28a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h2.188c.11 0 .219-.082.219-.218V14.03c0-.355.273-.656.656-.656M6.563 9.656c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656.356 0 .657.3.657.656m1.53.656a.63.63 0 0 1-.655-.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656M7 7.688a3.07 3.07 0 0 0-2.652 1.53 2.94 2.94 0 0 0 0 3.063A3.01 3.01 0 0 0 7 13.812a3 3 0 0 0 2.625-1.53 2.94 2.94 0 0 0 0-3.063C9.078 8.289 8.094 7.688 7 7.688m0 7.437a4.35 4.35 0 0 1-3.8-2.187 4.32 4.32 0 0 1 0-4.376A4.41 4.41 0 0 1 7 6.376c1.559 0 2.98.848 3.773 2.188a4.32 4.32 0 0 1 0 4.374A4.34 4.34 0 0 1 7 15.126m-1.148-3.719c.218.41.656.656 1.148.656.465 0 .902-.246 1.121-.656.137-.191.383-.273.602-.136.218.109.273.382.164.601-.383.629-1.094 1.094-1.887 1.094-.82 0-1.531-.465-1.914-1.094-.11-.219-.055-.492.164-.601a.433.433 0 0 1 .602.136' />
    </g>
    <defs>
      <clipPath id='def2148d4757c1ea1ad67fd96c97fed7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderSmBoldIcon);
export default ForwardRef;
