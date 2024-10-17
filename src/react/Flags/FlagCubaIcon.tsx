import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagCubaIcon = (
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
    <g clipPath='url(#4f135a7c6b9000c1f590aaf91bd9b2f5__a)'>
      <path fill='#002A8F' d='M2 0A2 2 0 0 0 .709.473L4.5 3H24V2a2 2 0 0 0-2-2z' />
      <path fill='#fff' d='M4.5 13H24V3H4.5L12 8z' />
      <path
        fill='#002A8F'
        d='M9 10h15V6H9l3 2zM4.5 13 .709 15.527A2 2 0 0 1 2 16h20a2 2 0 0 0 2-2v-1z'
      />
      <path
        fill='#E6223A'
        fillRule='evenodd'
        d='M0 14V2C0 1.388.275.84.709.473L12 8 .709 15.527A2 2 0 0 1 0 14m2.994-5.766-.28 1.637 1.47-.773 1.468.773-.28-1.636 1.19-1.16-1.643-.237-.735-1.49-.735 1.49-1.643.236z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='m4.184 9.098-1.47.773.28-1.637-1.188-1.16 1.643-.237.735-1.489.735 1.49 1.643.237-1.19 1.16.28 1.636'
        clipRule='evenodd'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='4f135a7c6b9000c1f590aaf91bd9b2f5__a'>
        <path fill='#fff' d='M0 0h24v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(FlagCubaIcon);
export default ForwardRef;
