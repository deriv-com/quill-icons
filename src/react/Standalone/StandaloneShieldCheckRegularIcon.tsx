import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneShieldCheckRegularIcon = (
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
    <path d='m15.492 7.984-6.914 2.93c-.43.156-.742.586-.703 1.055 0 3.672 1.523 10.156 7.617 13.086.313.156.664.156.977 0 6.093-2.93 7.617-9.414 7.656-13.086 0-.469-.312-.86-.742-1.055l-6.914-2.93a1.08 1.08 0 0 0-.977 0m1.485-1.171 6.875 2.93c.859.39 1.523 1.21 1.523 2.226-.04 3.906-1.64 10.976-8.36 14.219a2.4 2.4 0 0 1-2.07 0c-6.718-3.243-8.32-10.313-8.32-14.22-.04-1.015.625-1.835 1.484-2.226l6.914-2.93a2.43 2.43 0 0 1 1.954 0M16 13.688a.925.925 0 0 0-.937.937c0 .547.39.938.937.938.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937m2.188.937a2.19 2.19 0 0 1-1.563 2.11v2.89a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-2.89c-.937-.274-1.562-1.094-1.562-2.11 0-1.172.976-2.187 2.187-2.187 1.172 0 2.188 1.015 2.188 2.187' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneShieldCheckRegularIcon);
export default ForwardRef;
