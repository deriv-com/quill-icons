import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyOpenPositionIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#6eae19877bb0734276157d26cc3130fe__a)'>
      <path
        fill='#333'
        d='M10.5 0A1.5 1.5 0 0 1 12 1.5V3h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3v1.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0zm0 1h-9a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V13H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7V1.5a.5.5 0 0 0-.5-.5M15 4H4v8h11zm-4.146 1.146 2.5 2.5.011.013.033.039-.044-.052A.5.5 0 0 1 13.5 8v.02l-.005.052L13.5 8a.5.5 0 0 1-.146.354l-2.5 2.5a.5.5 0 0 1-.708-.708L11.791 8.5H5.5a.5.5 0 0 1 0-1h6.293l-1.647-1.646a.5.5 0 0 1 .708-.708'
      />
    </g>
    <defs>
      <clipPath id='6eae19877bb0734276157d26cc3130fe__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyOpenPositionIcon);
export default ForwardRef;
