import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleArrowUpRightFillIcon = (
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
    <path d='M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672M20.375 19v-5.937a.95.95 0 0 0-.937-.938h-6.25a.925.925 0 0 0-.938.938c0 .546.39.937.938.937l3.984.04-5.274 5.273a.856.856 0 0 0 0 1.289c.352.39.938.39 1.329 0l5.273-5.274V19c0 .547.39.938.938.938.507 0 .937-.391.937-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleArrowUpRightFillIcon);
export default ForwardRef;
