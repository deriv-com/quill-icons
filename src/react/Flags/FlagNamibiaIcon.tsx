import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagNamibiaIcon = (
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
      fill='#FFE700'
      fillRule='evenodd'
      d='m6.484 6.61-.956-.579L4.976 7l-.535-.973-.964.565.026-1.113-1.113.009.579-.955L2 3.985l.973-.54-.561-.964 1.113.027-.004-1.118.95.579L5.025 1l.535.973.964-.565-.026 1.113 1.113-.009-.579.955.969.548-.973.54.561.964-1.113-.027zm-1.482-.584a2.036 2.036 0 0 0 2.042-2.029 2.03 2.03 0 0 0-2.042-2.025A2.03 2.03 0 0 0 2.96 3.997c0 1.122.916 2.03 2.042 2.03'
      clipRule='evenodd'
    />
    <path fill='#FFE700' d='M6.602 3.998a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0' />
    <path
      fill='#002F6C'
      fillRule='evenodd'
      d='M0 12 19 0 1.866.004A2 2 0 0 0 0 2zm5.528-5.969.956.579-.01-1.118 1.114.027-.561-.965L8 4.015l-.969-.548.579-.955-1.113.009.026-1.113-.964.565L5.024 1l-.552.969-.951-.579.004 1.118-1.113-.027.561.965L2 3.985l.969.548-.579.955 1.113-.009-.026 1.113.964-.565.535.973z'
      clipRule='evenodd'
    />
    <path
      fill='#002F6C'
      fillRule='evenodd'
      d='M7.044 3.997c0 1.122-.916 2.03-2.042 2.03a2.036 2.036 0 0 1-2.042-2.03 2.03 2.03 0 0 1 2.042-2.025c1.13 0 2.042.908 2.042 2.025m-.91 1.132A1.6 1.6 0 1 0 3.87 2.866 1.6 1.6 0 0 0 6.133 5.13'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M19 0h2L.002 13 0 12zM3 16 24 3v1L5 16z' />
    <path
      fill='#C8102E'
      d='M22.236.014 21 0 .002 13l.005 1.167A2 2 0 0 0 1.975 16H3L24 3v-.012l-.01-1.186A2 2 0 0 0 22.236.014'
    />
    <path fill='#009A44' d='M24 4 5 16l17.133-.004A2 2 0 0 0 24 14.003V4' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagNamibiaIcon);
export default ForwardRef;
