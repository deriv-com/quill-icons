import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagGeorgiaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M2 0h8v6H0V2a2 2 0 0 1 2-2m2 4 1.2-.2L5 5h1l-.2-1.2L7 4V3l-1.2.2L6 2H5l.2 1.2L4 3zM22 0h-8v6h10V2a2 2 0 0 0-2-2m-5 4 1.2-.2L18 5h1l-.2-1.2L20 4V3l-1.2.2L19 2h-1l.2 1.2L17 3zM0 10v4a2 2 0 0 0 2 2h8v-6zm5.2 2.8L4 13v-1l1.2.2L5 11h1l-.2 1.2L7 12v1l-1.2-.2L6 14H5zM24 14a2 2 0 0 1-2 2h-8v-6h10zm-7-1 1.2-.2L18 14h1l-.2-1.2 1.2.2v-1l-1.2.2.2-1.2h-1l.2 1.2L17 12z'
      clipRule='evenodd'
    />
    <path
      fill='#FD0D1B'
      d='M18.2 3.8 17 4V3l1.2.2L18 2h1l-.2 1.2L20 3v1l-1.2-.2L19 5h-1zM5.2 3.8 4 4V3l1.2.2L5 2h1l-.2 1.2L7 3v1l-1.2-.2L6 5H5zM5.2 12.8 4 13v-1l1.2.2L5 11h1l-.2 1.2L7 12v1l-1.2-.2L6 14H5zM18.2 12.8 17 13v-1l1.2.2L18 11h1l-.2 1.2L20 12v1l-1.2-.2.2 1.2h-1z'
    />
    <path fill='red' d='M24 6v4H14v6h-4v-6H0V6h10V0h4v6z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagGeorgiaIcon);
export default ForwardRef;
