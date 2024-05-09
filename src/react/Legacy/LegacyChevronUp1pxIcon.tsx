import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyChevronUp1pxIcon = (
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
    <path
      fill='#333'
      fillRule='evenodd'
      d='M7.646 5.146a.5.5 0 0 1 .708 0l5.5 5.5a.5.5 0 0 1-.708.708L8 6.207l-5.146 5.147a.5.5 0 0 1-.708-.708z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyChevronUp1pxIcon);
export default ForwardRef;
