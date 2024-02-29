import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankSmRegularIcon = (
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
      <path d='m7.219 3.805 6.344 3.61q.41.246.437.737a.82.82 0 0 1-.246.602.82.82 0 0 1-.602.246H.848a.82.82 0 0 1-.602-.246A.82.82 0 0 1 0 8.152a.87.87 0 0 1 .438-.738l6.343-3.61a.47.47 0 0 1 .438 0m1.176 4.32h4.675L7 4.68.93 8.125h4.675q-.136-.301-.136-.656.027-.656.437-1.094.438-.41 1.094-.437.656.027 1.094.437.41.437.437 1.094 0 .355-.136.656M7 6.813q-.602.054-.656.656.054.601.656.656.602-.054.656-.656-.054-.601-.656-.657m-5.25 6.562v-3.5h.875v3.5h2.188v-3.5h.875v3.5h2.625v-3.5h.874v3.5h2.188v-3.5h.875v3.5q.41.027.438.438-.028.41-.438.437H1.75q-.41-.027-.437-.437.027-.411.437-.438m-.656 1.75h11.812q.411.027.438.438-.027.41-.438.437H1.094q-.411-.027-.438-.437.027-.411.438-.438m-.657 1.75h13.126q.41.027.437.438-.027.41-.437.437H.438q-.411-.027-.438-.437.027-.411.438-.438' />
    </g>
    <defs>
      <clipPath id='5821e3c6ae8cc6abe61cc5ec5ce01819__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankSmRegularIcon);
export default ForwardRef;
