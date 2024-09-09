import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagAlandIslandsIcon = (
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
    <path fill='#DA0E15' d='M24 9V7H11V0H9v7H0v2h9v7h2V9z' />
    <path fill='#FFD300' d='M24 9v1H12v6h-1V9zM24 7V6H12V0h-1v7zM9 0H8v6H0v1h9zM0 9h9v7H8v-6H0z' />
    <path
      fill='#0064AD'
      d='M12 0h10a2 2 0 0 1 2 2v4H12zM8 0H2a2 2 0 0 0-2 2v4h8zM0 10v4a2 2 0 0 0 2 2h6v-6zM12 16h10a2 2 0 0 0 2-2v-4H12z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagAlandIslandsIcon);
export default ForwardRef;
