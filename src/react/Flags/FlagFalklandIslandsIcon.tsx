import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagFalklandIslandsIcon = (
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
    <path fill='#012169' d='M12 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8h12z' />
    <path fill='#042C90' d='M0 8h12V0H2a2 2 0 0 0-2 2z' />
    <path
      fill='#fff'
      d='M5 0v2.131L1.815.008C1.042.08.396.59.13 1.288L2.697 3H0v2h2.697L0 6.798V8h1.803L5 5.869V8h2V5.869L10.197 8H12V6.798L9.303 5H12V3H9.303L12 1.202V0h-1.803L7 2.131V0z'
    />
    <path fill='#F44336' d='M5.5 0v3.5H0v1h5.5V8h1V4.5H12v-1H6.5V0z' />
    <path
      fill='#F44336'
      d='m11.55 0-4.5 3h.9L12 .3V0zM0 8h.45l4.5-3h-.9L0 7.7zM.524.65 4.05 3h.902L.923.315A2 2 0 0 0 .524.65M7.95 5 12 7.7V8h-.45l-4.5-3z'
    />
    <path
      fill='#338AF3'
      d='M15.004 4v4.619c0 .703.292 1.254.695 1.68.885.935 2.301 1.263 2.301 1.263s1.418-.328 2.304-1.264c.403-.425.696-.976.696-1.68V4h-6z'
    />
    <path
      fill='#EEE'
      d='M18 7.445c-.75 0-.75.672-1.5.672s-.746-.672-1.5-.672V8.62c.754 0 .754.672 1.5.672s.75-.672 1.5-.672.75.672 1.5.672.746-.672 1.5-.672V7.44c-.754 0-.754.672-1.5.672-.75 0-.75-.672-1.5-.672zm0-2.355c-.75 0-.75.672-1.5.672s-.746-.672-1.5-.672v1.178c.754 0 .754.672 1.5.672s.75-.672 1.5-.672.75.672 1.5.672.746-.672 1.5-.672V5.09c-.754 0-.754.672-1.5.672-.75 0-.75-.672-1.5-.672'
    />
    <path
      fill='#FFDA44'
      d='M15.004 10.298v1.68h.857v.422h4.281v-.423h.854v-1.679h-.692c-.886.936-2.304 1.264-2.304 1.264s-1.416-.328-2.301-1.264z'
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
const ForwardRef = forwardRef(FlagFalklandIslandsIcon);
export default ForwardRef;
