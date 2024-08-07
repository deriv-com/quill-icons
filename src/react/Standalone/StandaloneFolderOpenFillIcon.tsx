import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFolderOpenFillIcon = (
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
    <path d='M8.188 15.25 4.75 21.188V10.25c0-1.367 1.094-2.5 2.5-2.5h4.57c.664 0 1.29.273 1.758.742l1.055 1.055c.469.469 1.094.703 1.758.703H21c1.367 0 2.5 1.133 2.5 2.5V14H10.375a2.54 2.54 0 0 0-2.187 1.25m1.093.625c.235-.39.625-.625 1.094-.625H26c.43 0 .86.273 1.055.664.234.39.234.86 0 1.25l-4.375 7.5a1.28 1.28 0 0 1-1.055.586H6c-.469 0-.86-.234-1.094-.625a1.2 1.2 0 0 1 0-1.25z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFolderOpenFillIcon);
export default ForwardRef;
