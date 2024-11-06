import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagMartiniqueIcon = (
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
    <g clipPath='url(#10029bc20af412447afac4997cb5a456__a)'>
      <path fill='#EF1923' d='M0 2v12c0 .612.275 1.16.709 1.527L12 8 .709.473A2 2 0 0 0 0 2' />
      <path fill='#00A650' d='M2 0A2 2 0 0 0 .709.473L12 8h12V2a2 2 0 0 0-2-2z' />
      <path fill='#231F1E' d='M24 8H12L.709 15.527A2 2 0 0 1 2 16h20a2 2 0 0 0 2-2z' />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='10029bc20af412447afac4997cb5a456__a'>
        <path fill='#fff' d='M0 0h24v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(FlagMartiniqueIcon);
export default ForwardRef;
