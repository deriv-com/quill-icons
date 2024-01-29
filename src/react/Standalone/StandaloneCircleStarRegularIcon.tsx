import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleStarRegularIcon = (
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
    <path d='M16 7.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.25 14.195 7.25 16.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q13.617 25.211 16 25.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.383 7.789 16 7.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m.547-15.586 1.445 2.852 3.164.468a.7.7 0 0 1 .508.43.78.78 0 0 1-.156.664l-2.305 2.227.547 3.125a.65.65 0 0 1-.273.625.6.6 0 0 1-.625.039L16 19.859l-2.812 1.485a.67.67 0 0 1-.665-.04.65.65 0 0 1-.273-.624l.547-3.125-2.266-2.266q-.273-.273-.156-.625a.61.61 0 0 1 .469-.43l3.164-.468 1.445-2.852a.55.55 0 0 1 .547-.351q.39 0 .547.351m-1.563 3.711a.72.72 0 0 1-.468.352l-2.227.312 1.602 1.602a.63.63 0 0 1 .195.547l-.39 2.226 1.992-1.055q.312-.156.585 0l2.032 1.055-.39-2.227a.69.69 0 0 1 .155-.546l1.64-1.602-2.226-.312q-.351-.08-.468-.352L16 12.594z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleStarRegularIcon);
export default ForwardRef;
