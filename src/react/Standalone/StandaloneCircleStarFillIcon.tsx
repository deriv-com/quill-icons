import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleStarFillIcon = (
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
    <path d='M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m10-5.937a.55.55 0 0 0-.547.351l-1.406 2.852-3.164.468q-.39.08-.508.43-.117.351.156.625l2.266 2.266-.547 3.125a.65.65 0 0 0 .273.625.67.67 0 0 0 .665.039L16 19.859l2.852 1.485a.6.6 0 0 0 .625-.04.65.65 0 0 0 .273-.624l-.547-3.125 2.305-2.227a.78.78 0 0 0 .156-.664.7.7 0 0 0-.508-.43l-3.164-.468-1.445-2.852a.55.55 0 0 0-.547-.351' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleStarFillIcon);
export default ForwardRef;
