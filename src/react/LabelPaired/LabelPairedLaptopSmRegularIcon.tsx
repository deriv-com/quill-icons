import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 5.5H3.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v7H2v-7q.027-.738.52-1.23.492-.493 1.23-.52h10.5q.738.027 1.23.52.493.492.52 1.23v7h-.875v-7a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246M2.355 16h13.29q.902-.055 1.175-.875H1.18q.273.82 1.175.875M.25 14.77q.054-.465.52-.52h16.46q.465.055.52.52-.027.902-.602 1.503-.6.575-1.503.602H2.355q-.901-.027-1.476-.602-.601-.6-.629-1.503' />
    </g>
    <defs>
      <clipPath id='a2dcd1616fd597ddfbb4618b6d2fc321__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopSmRegularIcon);
export default ForwardRef;
