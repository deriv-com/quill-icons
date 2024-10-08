import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagNorthernMarianaIslandsIcon = (
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
      fill='#0071BC'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M11.975 4.133a3.86 3.86 0 0 1 3.802 3.071.2.2 0 0 0 .002.06q.078.38.079.767a3.857 3.857 0 0 1-7.637.75 3.93 3.93 0 0 1 .203-2.237 3.86 3.86 0 0 1 3.55-2.41M8.529 8A3.477 3.477 0 0 1 12 4.516 3.477 3.477 0 0 1 15.47 8 3.477 3.477 0 0 1 12 11.484 3.477 3.477 0 0 1 8.53 8'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M12 3.355A4.64 4.64 0 0 0 7.368 8 4.64 4.64 0 0 0 12 12.645 4.64 4.64 0 0 0 16.632 8 4.64 4.64 0 0 0 12 3.355m4.148 5.557a4.25 4.25 0 0 1-2.496 3.007 4.245 4.245 0 0 1-5.897-3.892 4.24 4.24 0 0 1 2.593-3.946 4.245 4.245 0 0 1 5.897 3.95q0 .415-.077.824a.2.2 0 0 1-.02.057'
      clipRule='evenodd'
    />
    <path
      fill='#FCEA2B'
      fillRule='evenodd'
      d='M16.05 7.78c.107-.001.194.085.195.192a4.245 4.245 0 1 1-8.49.055.194.194 0 1 1 .387-.001 3.858 3.858 0 1 0 7.716-.05c-.001-.108.085-.195.192-.196'
      clipRule='evenodd'
    />
    <path
      fill='#D22F27'
      fillRule='evenodd'
      d='M13.455 4.418a3.858 3.858 0 0 0-5.313 3.608.193.193 0 0 1-.192.194.194.194 0 0 1-.195-.193 4.24 4.24 0 0 1 2.593-3.946 4.245 4.245 0 0 1 5.897 3.89.194.194 0 0 1-.193.196.193.193 0 0 1-.194-.192 3.86 3.86 0 0 0-2.403-3.557'
      clipRule='evenodd'
    />
    <path
      fill='#5C9E31'
      fillRule='evenodd'
      d='M8.058 7.036c.105.02.174.121.154.226a3.9 3.9 0 0 0 .009 1.519.194.194 0 0 1-.38.077 4.3 4.3 0 0 1-.01-1.669.194.194 0 0 1 .227-.153M15.93 7.036a.194.194 0 0 1 .229.151c.111.55.115 1.117.01 1.668a.194.194 0 0 1-.381-.072 3.9 3.9 0 0 0-.009-1.519.194.194 0 0 1 .152-.228'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M11.81 5.585a.2.2 0 0 1 .38 0l.439 1.35a.2.2 0 0 0 .19.138h1.419a.2.2 0 0 1 .117.362l-1.148.834a.2.2 0 0 0-.072.223l.438 1.35a.2.2 0 0 1-.308.223l-1.148-.834a.2.2 0 0 0-.235 0l-1.147.834a.2.2 0 0 1-.308-.223l.438-1.35a.2.2 0 0 0-.072-.223l-1.148-.834a.2.2 0 0 1 .117-.362h1.42a.2.2 0 0 0 .19-.138z'
    />
    <path
      fill='#9B9B9A'
      d='M13.41 14.667h-2.82a.5.5 0 0 1-.493-.583l.674-4.045 1.111-.808a.2.2 0 0 1 .236 0l1.11.808.675 4.045a.5.5 0 0 1-.493.583M12.731 7.053a.2.2 0 0 1-.102-.118l-.439-1.35a.2.2 0 0 0-.38 0l-.439 1.35a.2.2 0 0 1-.102.118l.003-.017a.5.5 0 0 0-.008-.204l-.22-.877a.5.5 0 0 1 .485-.622h.942a.5.5 0 0 1 .485.622l-.22.877a.5.5 0 0 0-.008.204z'
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
const ForwardRef = forwardRef(FlagNorthernMarianaIslandsIcon);
export default ForwardRef;
