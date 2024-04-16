import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyVanillaIcon = (
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
    <g fill='#333'>
      <path
        fillRule='evenodd'
        d='M12.053 1.276A.5.5 0 0 1 12.5 1h3a.5.5 0 0 1 0 1h-2.691L6.447 14.724a.5.5 0 0 1-.888.012L2.227 8.5H.5a.5.5 0 0 1 0-1h2.026a.5.5 0 0 1 .441.264l3.018 5.648z'
        clipRule='evenodd'
      />
      <path d='M11 7.5h4.5a.5.5 0 0 1 0 1h-5zM4 7.5h4l-.5 1h-3z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyVanillaIcon);
export default ForwardRef;
