import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketSmRegularIcon = (
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
      <path d='m13.098 10.695-3.61-3.39q-.054-.055-.11-.055a.214.214 0 0 0-.19.191V9q-.028.41-.438.438H5.469q-.191.027-.219.218v2.188q.027.19.219.219H8.75q.41.027.438.437v1.559q.028.164.19.191.056 0 .11-.055l3.61-3.39q.027-.027.027-.055t-.027-.055m.902.055q0 .41-.3.684l-3.61 3.418q-.3.273-.711.273-.465 0-.766-.3-.3-.302-.3-.766v-1.121H5.469a1 1 0 0 1-.766-.329 1 1 0 0 1-.328-.765V9.656q0-.465.328-.765a1 1 0 0 1 .766-.328h2.843V7.44q0-.465.301-.765.3-.3.766-.301.41 0 .71.3l3.61 3.391q.3.274.301.684M4.813 5.5H2.188a1.43 1.43 0 0 0-.93.383 1.43 1.43 0 0 0-.383.93v7.875q.027.546.383.93.382.355.93.382h2.625q.41.027.437.438-.027.41-.437.437H2.188q-.93-.027-1.56-.629-.6-.63-.628-1.558V6.812q.027-.93.629-1.558.63-.601 1.559-.629h2.625q.41.027.437.438-.027.41-.437.437' />
    </g>
    <defs>
      <clipPath id='396d4415487c252b99e5b9e1cefc3011__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketSmRegularIcon);
export default ForwardRef;
