import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyWonTest2Icon = (
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
      fill='#4BB4B3'
      fillRule='evenodd'
      d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m3.854-10.854a.5.5 0 0 0-.708 0L6.5 9.793 4.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyWonTest2Icon);
export default ForwardRef;
