import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyAdsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule='evenodd' clipRule='evenodd'>
      <path d='M1.5 7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM0 7.5A1.5 1.5 0 0 1 1.5 6h13A1.5 1.5 0 0 1 16 7.5v7a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5z' />
      <path d='M5.5 9a.5.5 0 0 1 .416.223l2 3A.5.5 0 0 1 7.5 13h-4a.5.5 0 0 1-.416-.777l2-3A.5.5 0 0 1 5.5 9m-1.066 3h2.132L5.5 10.401zM8 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M1 4.5A1.5 1.5 0 0 1 2.5 3h11A1.5 1.5 0 0 1 15 4.5V5h-1v-.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V5H1zM3 1.5A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5V2h-1v-.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V2H3z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyAdsIcon);
export default ForwardRef;
