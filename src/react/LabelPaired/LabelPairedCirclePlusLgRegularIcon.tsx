import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCirclePlusLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 6.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C3.984 22.609 6.836 24.25 10 24.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C15.976 8.43 13.124 6.75 10 6.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-.625-6.25v-3.125H6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.125V11.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.125h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.125v3.125a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='016ce71f1c63923b1e501ec2636642e9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCirclePlusLgRegularIcon);
export default ForwardRef;
