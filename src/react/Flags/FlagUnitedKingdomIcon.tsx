import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagUnitedKingdomIcon = (
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
      fill='#0D47A1'
      d='M0 2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M0 2a2 2 0 0 1 2-2h1.606L10 4.263V0h4v4.263L20.395 0H22a2 2 0 0 1 2 2v.404L18.606 6H24v4h-5.394L24 13.596V14a2 2 0 0 1-2 2h-1.606L14 11.737V16h-4v-4.263L3.606 16H2a2 2 0 0 1-2-2v-.404L5.394 10H0V6h5.394L0 2.404z'
    />
    <path fill='#F44336' d='M10.759 0v6.726H0v2.522h10.759V16h2.482V9.248H24V6.726H13.241V0z' />
    <path
      fill='#F44336'
      d='M22.764.151 14.07 5.885h1.52L23.495.672c-.2-.225-.449-.404-.73-.52M23.72 15.023l-7.483-4.934h-1.52l8.423 5.554c.235-.163.433-.375.58-.62M1.198 15.833l8.71-5.744h-1.52L.482 15.302c.194.227.439.41.716.53M.243 1.044l7.34 4.841h1.52L.793.405a2 2 0 0 0-.55.64'
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
const ForwardRef = forwardRef(FlagUnitedKingdomIcon);
export default ForwardRef;
