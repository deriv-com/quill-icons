import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSolomonIslandsIcon = (
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
    <path fill='#0051BA' d='M2 0a2 2 0 0 0-2 2v11L24 2a2 2 0 0 0-2-2z' />
    <path fill='#215B33' d='M0 14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2v2L.214 14.902A2 2 0 0 1 0 14' />
    <path fill='#FCD116' d='M.214 14.902 24 4V2L0 13v1c0 .324.077.63.214.902' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M3.052 3.658 2.402 4l.124-.724L2 2.764l.727-.105L3.052 2l.325.658.726.106-.525.513.124.723M7.259 3.658 6.609 4l.124-.724-.526-.512.727-.105L7.259 2l.325.658.726.106-.526.513L7.91 4M3.052 7.658 2.402 8l.124-.724L2 6.764l.727-.105.325-.66.325.66.726.105-.525.513.124.723M7.259 7.658 6.609 8l.124-.724-.526-.512.727-.105.325-.66.325.66.726.105-.526.513L7.91 8M5.155 5.658 4.505 6l.124-.724-.526-.512.727-.105L5.155 4l.325.658.727.106-.526.513.124.723'
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
const ForwardRef = forwardRef(FlagSolomonIslandsIcon);
export default ForwardRef;
