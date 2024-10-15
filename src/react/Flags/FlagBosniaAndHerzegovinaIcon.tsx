import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagBosniaAndHerzegovinaIcon = (
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
      fill='#001C98'
      d='M22 16H2a2 2 0 0 1-2-2V2C0 1.388.275.84.709.473L23.29 15.527c-.348.295-.799.473-1.291.473'
    />
    <path
      fill='#FC0'
      d='M2 0h20a2 2 0 0 1 2 2v12c0 .612-.275 1.16-.709 1.527L.71.473C1.057.178 1.508 0 2 0'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M2 3h1v1H2zm3 2h1v1H5zm3 2h1v1H8zm3 2h1v1h-1zm3 2h1v1h-1zm3 2h1v1h-1z'
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
const ForwardRef = forwardRef(FlagBosniaAndHerzegovinaIcon);
export default ForwardRef;
