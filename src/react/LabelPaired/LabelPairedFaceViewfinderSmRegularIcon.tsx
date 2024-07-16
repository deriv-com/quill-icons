import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderSmRegularIcon = (
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
      <path d='M1.313 3.75h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H1.313a.45.45 0 0 0-.438.438v2.625a.45.45 0 0 1-.437.437A.43.43 0 0 1 0 7.688V5.063C0 4.352.574 3.75 1.313 3.75m11.375 0c.71 0 1.312.602 1.312 1.313v2.625a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V5.063a.47.47 0 0 0-.437-.438h-2.626a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438zM0 16.438v-2.625a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v2.624c0 .247.191.438.438.438h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H1.313A1.296 1.296 0 0 1 0 16.438m12.688 1.312h-2.626a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438h2.624a.45.45 0 0 0 .438-.437v-2.625a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v2.624c0 .739-.602 1.313-1.312 1.313M6.562 9.656c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656.356 0 .657.3.657.656m1.532.656a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656M7 7.25A3.54 3.54 0 0 0 3.965 9a3.48 3.48 0 0 0 0 3.5A3.48 3.48 0 0 0 7 14.25c1.23 0 2.379-.656 3.008-1.75a3.48 3.48 0 0 0 0-3.5C9.378 7.934 8.23 7.25 7 7.25m0 7.875a4.35 4.35 0 0 1-3.8-2.187 4.32 4.32 0 0 1 0-4.376A4.41 4.41 0 0 1 7 6.376c1.559 0 2.98.848 3.773 2.188a4.32 4.32 0 0 1 0 4.374A4.34 4.34 0 0 1 7 15.126m-1.148-3.719c.218.41.656.656 1.148.656.465 0 .902-.246 1.121-.656.137-.191.383-.273.602-.136.218.109.273.382.164.601-.383.629-1.094 1.094-1.887 1.094-.82 0-1.531-.465-1.914-1.094-.11-.219-.055-.492.164-.601a.433.433 0 0 1 .602.136' />
    </g>
    <defs>
      <clipPath id='1ec772202ab5d07ead52fd958a777d8f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderSmRegularIcon);
export default ForwardRef;
