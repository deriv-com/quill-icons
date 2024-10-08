import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagEritreaIcon = (
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
    <path fill='#0BAC24' d='M22 0H2A2 2 0 0 0 .709.473L24 8V2a2 2 0 0 0-2-2' />
    <path fill='#3D8ADD' d='M22 16H2a2 2 0 0 1-1.291-.473L24 8v6a2 2 0 0 1-2 2' />
    <path fill='#EC0334' d='M0 2v12c0 .612.275 1.16.709 1.527L24 8 .709.473A2 2 0 0 0 0 2' />
    <path
      fill='#FFC800'
      fillRule='evenodd'
      d='M8.83 7.815c0-1.255-1.02-2.275-2.275-2.73C5.3 5.54 4.28 6.56 4.28 7.816c0 1.101.783 2.018 1.82 2.23V6.904c0-.25.211-.454.455-.454a.45.45 0 0 1 .455.454v3.14a2.28 2.28 0 0 0 1.82-2.229m.91 0c0-1.759-1.426-3.184-3.185-2.73-1.759-.454-3.185.971-3.185 2.73a3.185 3.185 0 1 0 6.37 0'
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
const ForwardRef = forwardRef(FlagEritreaIcon);
export default ForwardRef;
