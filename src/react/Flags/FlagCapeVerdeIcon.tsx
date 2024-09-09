import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagCapeVerdeIcon = (
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
      fill='#003893'
      fillRule='evenodd'
      d='M22 0H2a2 2 0 0 0-2 2v5h3.287v-.214h1.286V7H8.43v-.214h1.286V7H24V2a2 2 0 0 0-2-2M7.144 5.5H5.858v1.286h1.286z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M3.287 7H0v2h24V7H9.716v1.071H8.43V7H4.573v1.071H3.287z' />
    <path
      fill='#CF2027'
      fillRule='evenodd'
      d='M0 9h24v2H0zm11.001.357H9.716v1.286H11zm-7.714 0H2v1.286h1.286z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M9.716 11.929H8.43V13H4.573v-1.071H3.287V13H0v-2h24v2H9.716z' />
    <path
      fill='#003893'
      fillRule='evenodd'
      d='M8.43 13H4.573v.214H3.287V13H0v1a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-1H9.716v.214H8.43zm-1.286.214H5.858V14.5h1.286z'
      clipRule='evenodd'
    />
    <path
      fill='#F7D116'
      fillRule='evenodd'
      d='M3.287 6.786h1.286V8.07H3.287zM5.858 5.5h1.286v1.286H5.858zM8.43 6.786h1.286V8.07H8.43zm1.286 2.571H11v1.286H9.716zM2 9.357h1.286v1.286H2zM8.43 11.93h1.286v1.285H8.43zm-2.572 1.285h1.286V14.5H5.858zM3.287 11.93h1.286v1.285H3.287z'
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
const ForwardRef = forwardRef(FlagCapeVerdeIcon);
export default ForwardRef;
