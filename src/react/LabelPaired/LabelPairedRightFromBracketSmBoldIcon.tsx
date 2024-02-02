import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketSmBoldIcon = (
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
      <path d='M9.625 7.742V9.22q-.054.601-.656.656H5.688v1.75h3.28q.602.055.657.656v1.477l3.008-3.008zM14 10.75q0 .491-.355.848l-3.172 3.144a1.18 1.18 0 0 1-.903.383q-.52 0-.875-.383a1.3 1.3 0 0 1-.383-.875v-.93H5.688a1.43 1.43 0 0 1-.93-.382 1.43 1.43 0 0 1-.383-.93v-1.75q.027-.547.383-.93.383-.355.93-.383h2.625v-.93a1.3 1.3 0 0 1 .382-.874 1.3 1.3 0 0 1 .875-.383q.547 0 .903.383l3.172 3.144q.355.356.355.848M4.594 5.938H2.406q-.465 0-.765.328a1 1 0 0 0-.328.765v7.438q0 .465.328.765.3.33.765.329h2.188q.601.054.656.656-.054.601-.656.656H2.406q-1.012-.027-1.695-.71Q.027 15.48 0 14.468V7.03Q.027 6.02.71 5.336q.685-.684 1.696-.711h2.188q.601.054.656.656-.054.601-.656.657' />
    </g>
    <defs>
      <clipPath id='393d8f7a45b4cdc27a42ddbd2f941d9d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketSmBoldIcon);
export default ForwardRef;
