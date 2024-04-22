import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyHandleLessIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#ef7c2bdbdadd17d1f0a82653b425c859__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M31.775 21.291a1.5 1.5 0 0 1-2.066.483L16 13.266l-13.709 8.51a1.5 1.5 0 0 1-1.582-2.55l14.5-9a1.5 1.5 0 0 1 1.582 0l14.5 9a1.5 1.5 0 0 1 .483 2.066'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='ef7c2bdbdadd17d1f0a82653b425c859__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyHandleLessIcon);
export default ForwardRef;
