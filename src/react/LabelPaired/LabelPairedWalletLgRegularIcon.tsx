import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletLgRegularIcon = (
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
      <path d='M3.125 6.75h15c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-15C2.07 8 1.25 8.86 1.25 9.875v11.25C1.25 22.18 2.07 23 3.125 23h13.75c1.016 0 1.875-.82 1.875-1.875v-8.75c0-1.016-.86-1.875-1.875-1.875h-12.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h12.5A3.134 3.134 0 0 1 20 12.375v8.75a3.11 3.11 0 0 1-3.125 3.125H3.125C1.367 24.25 0 22.883 0 21.125V9.875A3.11 3.11 0 0 1 3.125 6.75M15 17.688c-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938' />
    </g>
    <defs>
      <clipPath id='3be94a2994aa918e1587a873f84e79bd__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletLgRegularIcon);
export default ForwardRef;
