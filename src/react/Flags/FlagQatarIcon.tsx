import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagQatarIcon = (
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
      fill='#8A1538'
      d='M6.5 0H22a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6.503l2.444-.89-2.444-.887 2.442-.89-2.442-.89 2.442-.886-2.442-.89 2.444-.89-2.444-.887L8.945 8l-2.442-.89 2.442-.887-2.442-.89 2.444-.89-2.444-.886 2.442-.89-2.442-.89L8.947.89z'
    />
    <path
      fill='#fff'
      d='m6.503 16 2.444-.89-2.444-.887 2.442-.89-2.442-.89 2.442-.886-2.442-.89 2.444-.89-2.444-.887L8.945 8l-2.442-.89 2.442-.887-2.442-.89 2.444-.89-2.444-.886 2.442-.89-2.442-.89L8.947.89 6.5 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z'
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
const ForwardRef = forwardRef(FlagQatarIcon);
export default ForwardRef;
