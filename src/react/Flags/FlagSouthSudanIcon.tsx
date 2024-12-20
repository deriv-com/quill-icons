import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSouthSudanIcon = (
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
    <path fill='#000' d='M22 0H2A2 2 0 0 0 .709.473L7.5 5H24V2a2 2 0 0 0-2-2' />
    <path fill='#E22028' d='M9 10h15V6H9l3 2z' />
    <path fill='#fff' d='M9 6h15V5H7.5zM7.5 11H24v-1H9z' />
    <path
      fill='#059437'
      d='M0 14.014A2 2 0 0 0 2 16h20a2 2 0 0 0 2-2v-3H7.5L.709 15.527A2 2 0 0 1 0 14.014'
    />
    <path
      fill='#00B6F2'
      fillRule='evenodd'
      d='M0 14V2C0 1.388.275.84.709.473L12 8 .709 15.527A2 2 0 0 1 0 14m2.723-4.121 1.461-.78 1.468.772-.28-1.636 1.199-1.152-1.652-.245-.735-1.49-.726 1.497-1.643.237 1.188 1.16z'
      clipRule='evenodd'
    />
    <path
      fill='#FFE51A'
      fillRule='evenodd'
      d='m4.184 9.098-1.461.78.28-1.636-1.188-1.16 1.643-.237.726-1.497.735 1.49 1.652.245-1.199 1.152.28 1.636'
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
const ForwardRef = forwardRef(FlagSouthSudanIcon);
export default ForwardRef;
