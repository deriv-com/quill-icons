import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagKazakhstanIcon = (
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
      fill='#00ABC2'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#FFEC2D'
      d='M2 1h1v1H2zM3 2h1v1H3zM2 3h1v1H2zM2 5h1v1H2zM3 6h1v1H3zM3 4h1v1H3zM2 7h1v1H2zM3 8h1v1H3zM2 9h1v1H2zM2 11h1v1H2zM2 13h1v1H2zM3 12h1v1H3zM3 14h1v1H3zM3 10h1v1H3z'
    />
    <path
      fill='#FFEC2D'
      fillRule='evenodd'
      d='M12 8.678c.904 0 1.636-.751 1.636-1.678S12.904 5.322 12 5.322 10.364 6.073 10.364 7 11.096 8.678 12 8.678'
      clipRule='evenodd'
    />
    <path
      fill='#FFEC2D'
      fillRule='evenodd'
      d='M11.332 10 12 8.978 12.668 10l.169-1.218 1.034.624-.363-1.173 1.195.102-.823-.895L15 7l-1.12-.44.823-.895-1.195.102.363-1.173-1.034.624L12.667 4 12 5.022 11.332 4l-.169 1.218-1.033-.624.362 1.173-1.195-.102.823.895L9 7l1.12.44-.823.895 1.195-.102-.363 1.173 1.034-.624zm2.577-3c0 1.081-.855 1.958-1.909 1.958S10.09 8.081 10.09 7s.856-1.958 1.91-1.958 1.91.877 1.91 1.958'
      clipRule='evenodd'
    />
    <path
      fill='#FFEC2D'
      fillRule='evenodd'
      d='m8.5 8 1 2 2.5 1 2.5-1 1-2v2.5l-3.5 1-3.5-1z'
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
const ForwardRef = forwardRef(FlagKazakhstanIcon);
export default ForwardRef;
