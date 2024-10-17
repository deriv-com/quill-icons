import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagPalestineIcon = (
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
    <path fill='#000' d='M22 0H2A2 2 0 0 0 .709.473L6.297 5H24V2a2 2 0 0 0-2-2' />
    <path fill='#fff' d='M6.297 11H24V5H6.297L10 8z' />
    <path
      fill='#009639'
      d='M0 14.014A2 2 0 0 0 2 16h20a2 2 0 0 0 2-2v-3H6.297L.71 15.527A2 2 0 0 1 0 14.014'
    />
    <path fill='#ED2E38' d='M0 2v12c0 .612.275 1.16.709 1.527L10 8 .709.473A2 2 0 0 0 0 2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagPalestineIcon);
export default ForwardRef;
