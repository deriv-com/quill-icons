import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 6.75h.937c.313 0 .625.313.625.625A.64.64 0 0 1 4.625 8h-.937C2.476 8 1.5 9.016 1.5 10.188v.937a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.937A3.443 3.443 0 0 1 3.688 6.75M.874 13c.313 0 .625.313.625.625v3.75A.64.64 0 0 1 .875 18a.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625m16.25 0c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625m0-1.25a.617.617 0 0 1-.625-.625v-.937C16.5 9.016 15.484 8 14.313 8h-.938a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.938c1.874 0 3.437 1.563 3.437 3.438v.937a.64.64 0 0 1-.625.625m.625 8.125v.938a3.443 3.443 0 0 1-3.437 3.437h-.938a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.938c1.171 0 2.187-.977 2.187-2.187v-.938c0-.312.273-.625.625-.625.313 0 .625.313.625.625m-16.25 0v.938c0 1.21.977 2.187 2.188 2.187h.937c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.937A3.42 3.42 0 0 1 .25 20.813v-.938c0-.312.273-.625.625-.625.313 0 .625.313.625.625m5.625 4.375a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625zM6.5 7.375c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='f8ed60b5918865be7c7a91ac88206ad2__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderLgRegularIcon);
export default ForwardRef;
