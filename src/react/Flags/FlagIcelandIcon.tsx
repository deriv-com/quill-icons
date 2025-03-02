import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagIcelandIcon = (
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
      fill='#02529C'
      d='M10 0h12a2 2 0 0 1 2 2v4H10zM6 0H2a2 2 0 0 0-2 2v4h6zM0 10v4a2 2 0 0 0 2 2h4v-6zM10 16h12a2 2 0 0 0 2-2v-4H10z'
    />
    <path fill='#fff' d='M10 0H9v7h15V6H10zM7 0H6v6H0v1h7zM6 16h1V9H0v1h6zM9 16h1v-6h14V9H9z' />
    <path fill='#DC1E35' d='M9 0H7v7H0v2h7v7h2V9h15V7H9z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagIcelandIcon);
export default ForwardRef;
