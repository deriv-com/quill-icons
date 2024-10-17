import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagPanamaIcon = (
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
    <path fill='#fff' d='M12 0H2a2 2 0 0 0-2 2v6h12v8h10a2 2 0 0 0 2-2V8H12z' />
    <path fill='#DA121A' d='M12 0v8h12V2a2 2 0 0 0-2-2z' />
    <path fill='#072357' d='M12 16V8H0v6a2 2 0 0 0 2 2z' />
    <path
      fill='#072357'
      fillRule='evenodd'
      d='M6 5.316 4.7 6l.248-1.448-1.051-1.024 1.453-.21L6 2l.65 1.316 1.453.212-1.051 1.025L7.3 6'
      clipRule='evenodd'
    />
    <path
      fill='#DA121A'
      fillRule='evenodd'
      d='M18 13.316 16.7 14l.248-1.448-1.051-1.024 1.453-.21L18 10l.65 1.316 1.453.212-1.051 1.025L19.3 14'
      clipRule='evenodd'
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
const ForwardRef = forwardRef(FlagPanamaIcon);
export default ForwardRef;
