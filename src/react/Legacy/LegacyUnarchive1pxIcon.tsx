import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyUnarchive1pxIcon = (
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
    <g clipPath='url(#c6a5529b3f985a789bcaf6ca2ebd7289__a)'>
      <path
        fill='#333'
        d='M14 0a.5.5 0 0 1 .398.197l.05.08 1.435 2.869a.5.5 0 0 1 .081.172l-.017-.042c.044.089.06.184.05.276.006.103.004.218.003.339V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3.891l-.001-.207q0-.07.004-.137A.5.5 0 0 1 .02 3.36l.016-.042a.5.5 0 0 1 .081-.172L1.553.276A.5.5 0 0 1 1.907.01L2 0zm1 4H1v11h14zM8 6l.072.005.056.012.063.02.059.03.062.042.042.037 2 2 .057.07a.5.5 0 0 1-.057.638l-.07.057a.5.5 0 0 1-.638-.057L8.5 7.707V12.5l-.008.09a.5.5 0 0 1-.992-.09V7.707L6.354 8.854l-.07.057a.5.5 0 0 1-.638-.765L7.66 6.135l.057-.046.093-.051.063-.021.075-.014zm5.69-5H2.309l-1 2H14.69z'
      />
    </g>
    <defs>
      <clipPath id='c6a5529b3f985a789bcaf6ca2ebd7289__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyUnarchive1pxIcon);
export default ForwardRef;
