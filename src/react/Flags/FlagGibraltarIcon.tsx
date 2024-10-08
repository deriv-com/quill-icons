import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagGibraltarIcon = (
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
    <path fill='#DA000C' d='M11.25 11v1H9.5v2h3.25v-3H24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3z' />
    <path
      fill='#fff'
      d='M22 0H2a2 2 0 0 0-2 2v9h11.25v-.114A2.5 2.5 0 0 1 10 10H5V5H4V3h2v1h1V3h2v2H8v1h2.5V4h-1V2h2v1h1V2h2v2h-1v2H16V5h-1V3h2v1h1V3h2v2h-1v5h-5c-.31.413-.746.727-1.25.886V11H24V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#DA000C'
      d='M19 10h-5a2.5 2.5 0 1 0-4 0H5V5H4V3h2v1h1V3h2v2H8v1h2.5V4h-1V2h2v1h1V2h2v2h-1v2H16V5h-1V3h2v1h1V3h2v2h-1z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M13 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
      clipRule='evenodd'
    />
    <path
      fill='#FFDA44'
      fillRule='evenodd'
      d='M14.5 8.5a2.5 2.5 0 1 0-3.25 2.386V12H9.5v2h3.25v-3.114A2.5 2.5 0 0 0 14.5 8.5m-2.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
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
const ForwardRef = forwardRef(FlagGibraltarIcon);
export default ForwardRef;
