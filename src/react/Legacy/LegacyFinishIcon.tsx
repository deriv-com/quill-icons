import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyFinishIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#d54a025105b227340b642c463ca0c019__a)'>
      <path
        fill='#4BB4B3'
        d='M1 0h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-5l-2 2-2-2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1'
      />
      <path
        fill='#fff'
        d='M3.5 1a.5.5 0 0 1 .5.5V2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4v2.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5M13 7h-2v2h2zM9 7H7v2h2zm2-2H9v2h2zM7 5H5v2h2zm2-2H7v2h2zm4 0h-2v2h2z'
      />
    </g>
    <defs>
      <clipPath id='d54a025105b227340b642c463ca0c019__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyFinishIcon);
export default ForwardRef;
