import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWalletRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M9.125 7.75h15c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-15C8.07 9 7.25 9.86 7.25 10.875v11.25C7.25 23.18 8.07 24 9.125 24h13.75c1.016 0 1.875-.82 1.875-1.875v-8.75c0-1.016-.86-1.875-1.875-1.875h-12.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h12.5A3.134 3.134 0 0 1 26 13.375v8.75a3.11 3.11 0 0 1-3.125 3.125H9.125C7.367 25.25 6 23.883 6 22.125v-11.25A3.11 3.11 0 0 1 9.125 7.75M21 18.688c-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWalletRegularIcon);
export default ForwardRef;
