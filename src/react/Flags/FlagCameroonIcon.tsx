import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagCameroonIcon = (
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
    <path fill='#FCD116' d='M16 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6z' />
    <path fill='#CE1126' d='M16 0H8v16h8z' />
    <path fill='#007A5E' d='M2 0h6v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#FCD116'
      fillRule='evenodd'
      d='m12 9.488-1.47.774.28-1.638-1.188-1.16 1.643-.237L12 5.738l.735 1.49 1.643.237-1.19 1.16.28 1.636'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagCameroonIcon);
export default ForwardRef;
