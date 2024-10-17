import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyArrowRight2pxIcon = (
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
    <g>
      <path d='M7.293.293a1 1 0 0 0 0 1.414L12.586 7 1 7a1 1 0 0 0 0 2l11.586-.001-5.293 5.294a1 1 0 1 0 1.414 1.414l7-7 .073-.082.007-.008-.08.09a1 1 0 0 0 .282-.559A1 1 0 0 0 16 8v-.02l-.004-.07L16 8a1 1 0 0 0-.146-.52 1 1 0 0 0-.147-.187l-7-7a1 1 0 0 0-1.414 0' />
    </g>
    <defs>
      <clipPath id='c37e7c0f81b4788ebeddbf821628bff2__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyArrowRight2pxIcon);
export default ForwardRef;
