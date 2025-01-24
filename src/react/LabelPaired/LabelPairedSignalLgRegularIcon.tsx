import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M23.125 6.125v18.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V6.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625M17.5 9.25c.313 0 .625.313.625.625v15a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-15c0-.312.273-.625.625-.625m-4.375 4.375v11.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-11.25c0-.312.273-.625.625-.625.313 0 .625.313.625.625M7.5 16.75c.313 0 .625.313.625.625v7.5a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-7.5c0-.312.273-.625.625-.625m-5 3.75c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='3b86a05ca220b10dc7a1cd58cc7eba87__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalLgRegularIcon);
export default ForwardRef;
