import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSurinameIcon = (
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
    <path fill='#377E3F' d='M0 12h24v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#B40A2D' d='M24 5H0v6h24z' />
    <path fill='#fff' d='M24 4H0v1h24zM24 11H0v1h24z' />
    <path fill='#377E3F' d='M2 0h20a2 2 0 0 1 2 2v2H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#EECF1F'
      fillRule='evenodd'
      d='m12 9.645-1.625.855.31-1.81-1.314-1.28 1.816-.263L12 5.5l.813 1.645 1.816.264-1.314 1.283.31 1.808'
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
const ForwardRef = forwardRef(FlagSurinameIcon);
export default ForwardRef;
