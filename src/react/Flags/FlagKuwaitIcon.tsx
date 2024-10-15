import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagKuwaitIcon = (
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
      fill='#000'
      d='M0 2v12a2 2 0 0 0 .125.697 2 2 0 0 0 .562.812L7 11V5L.687.491A2 2 0 0 0 0 2'
    />
    <path fill='#000' fillRule='evenodd' d='M.043 14.415' clipRule='evenodd' />
    <path fill='#007B3A' d='M22 0H2C1.498 0 1.039.185.687.491L7 5h17V2a2 2 0 0 0-2-2' />
    <path fill='#fff' d='M24 5H7v6h17z' />
    <path fill='#D0091E' d='M24 11H7L.687 15.509A1.996 1.996 0 0 0 2 16h20a2 2 0 0 0 2-2z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagKuwaitIcon);
export default ForwardRef;
