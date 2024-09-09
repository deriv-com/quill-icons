import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagDominicaIcon = (
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
      fill='#006C3D'
      d='M2 0h7v4a5 5 0 0 0-1 1H0V2a2 2 0 0 1 2-2M8 11H0v3a2 2 0 0 0 2 2h7v-4a5 5 0 0 1-1-1M15 12v4h7a2 2 0 0 0 2-2v-3h-8a5 5 0 0 1-1 1M16 5h8V2a2 2 0 0 0-2-2h-7v4c.379.284.716.621 1 1'
    />
    <path
      fill='#fff'
      d='M15 0h-2v3.1c.739.15 1.419.463 2 .9zM16.9 9a5 5 0 0 1-.9 2h8V9zM15 12a5 5 0 0 1-2 .9V16h2zM8 11a5 5 0 0 1-.9-2H0v2z'
    />
    <path
      fill='#333'
      d='M16.9 9H24V7h-7.1a5 5 0 0 1 0 2M13 12.9a5 5 0 0 1-2 0V16h2zM7.1 9H0V7h7.1a5 5 0 0 0 0 2M11 3.1a5 5 0 0 1 2 0V0h-2z'
    />
    <path
      fill='#FFCD00'
      d='M24 7V5h-8c.437.581.75 1.261.9 2zM11 12.9a5 5 0 0 1-2-.9v4h2zM7.1 7H0V5h8a5 5 0 0 0-.9 2M9 4a5 5 0 0 1 2-.9V0H9z'
    />
    <path
      fill='#D6172A'
      fillRule='evenodd'
      d='M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0m-4.249-2.009H11.25v4.018h1.502zm-.268-2.285h-1v1h1zm-1 7.588h1v1h-1zm-1.622-6.5h-1v1h1zm5.277 0h-1v1h1zM9.08 7.421h-1v1h1zm6.84 0h-1v1h1zM9.86 10.048h-1v1h1zm5.277 0h-1v1h1z'
      clipRule='evenodd'
    />
    <path fill='#955DCC' d='M11.249 5.991h1.502v4.018H11.25z' />
    <path
      fill='#006C3D'
      d='M12.483 3.706h-1v1h1zM12.483 11.294h-1v1h1zM9.861 4.794h-1v1h1zM14.138 4.794h1v1h-1zM9.08 7.421h-1v1h1zM14.92 7.421h1v1h-1zM9.861 10.048h-1v1h1zM14.138 10.048h1v1h-1z'
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
const ForwardRef = forwardRef(FlagDominicaIcon);
export default ForwardRef;
