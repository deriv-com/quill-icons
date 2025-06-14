import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDerivIcon = (
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
      <path d='M7.991 15.95h-2.21c-1.332 0-2.502-.52-3.295-1.465-.808-.962-1.121-2.24-.883-3.596l.184-1.052c.478-2.696 3.06-4.888 5.757-4.888h2.23l.752-4.265L14.475.05l-2.157 12.227c-.357 2.026-2.298 3.673-4.327 3.673m-.447-10c-2.235 0-4.376 1.821-4.772 4.06l-.184 1.052c-.186 1.06.05 2.047.664 2.78.6.714 1.498 1.107 2.53 1.107h2.21c1.565 0 3.065-1.277 3.341-2.847L13.246 1.26l-1.859.3-.773 4.39zm.378 7.341H6.58c-.68 0-1.282-.268-1.692-.757-.417-.497-.58-1.152-.46-1.844l.117-.657c.242-1.362 1.498-2.428 2.86-2.428h2.917l-.751 4.263c-.143.812-.851 1.423-1.648 1.423m-.518-4.686c-.862 0-1.721.734-1.876 1.603l-.116.655c-.068.396.017.761.24 1.028.218.257.547.4.927.4h1.343c.302 0 .606-.273.662-.596l.545-3.09z' />
    </g>
    <defs>
      <clipPath id='87347c390a10b88896048519da83e717__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyDerivIcon);
export default ForwardRef;
