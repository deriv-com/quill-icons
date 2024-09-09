import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyStartTimeIcon = (
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
    <g clipPath='url(#01101f60741774bf5c2580c7eacee015__a)'>
      <path
        fill='#999'
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.333a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.333m0 1.334a3.667 3.667 0 0 1 3.667 3.658c0 1.963-3.397 6.637-3.541 6.835l-.127.173-.125-.173c-.145-.196-3.54-4.876-3.54-6.835a3.667 3.667 0 0 1 3.665-3.658m-.001 1.589c-.919 0-1.663.743-1.663 1.66s.745 1.66 1.663 1.66a1.664 1.664 0 0 0 1.664-1.661c0-.917-.746-1.66-1.664-1.66'
      />
    </g>
    <defs>
      <clipPath id='01101f60741774bf5c2580c7eacee015__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyStartTimeIcon);
export default ForwardRef;
