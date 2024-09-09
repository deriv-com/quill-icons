import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagEgyptIcon = (
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
    <path fill='#333' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path
      fill='#fff'
      d='M11.305 9.968h.429V9.35L11.6 9.18zM12.266 9.351v.617h.43L12.4 9.18zM11.21 7.407c-.033 1.04.79 1.596.79 1.596s.823-.557.79-1.596c0 0-.507-.083-.79-.532-.283.449-.79.532-.79.532'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M0 5h24v6H0zm13.118 1.668a.363.363 0 0 1 .479.345v2.689l-.644-.644.303.91h.34v.532h-3.193v-.532h.34l.304-.91-.644.644v-2.69c0-.247.243-.422.479-.344l.466.156.16-.792h-.572l.432-.532h.413c.393 0 .724.28.788.667l.107.648z'
      clipRule='evenodd'
    />
    <path
      fill='#F0C727'
      d='M13.597 7.013a.363.363 0 0 0-.479-.345l-.442.147-.107-.648a.796.796 0 0 0-.788-.667h-.413l-.432.532h.572l-.16.792-.466-.156a.363.363 0 0 0-.479.345v2.689l.644-.644-.303.91h-.34v.532h3.192v-.532h-.34l-.303-.91.643.644zm-1.863 2.955h-.43l.296-.788.134.171zm.532 0V9.35l.134-.171.295.788zM12 9.003s-.823-.557-.79-1.596c0 0 .507-.083.79-.532.283.449.79.532.79.532.033 1.04-.79 1.596-.79 1.596'
    />
    <path fill='#CD1127' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagEgyptIcon);
export default ForwardRef;
