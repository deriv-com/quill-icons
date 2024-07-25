import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySort2pxIcon = (
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
    <g
      fill='#333'
      fillRule='evenodd'
      clipPath='url(#4e93504a43c18676455d22fe298bc858__a)'
      clipRule='evenodd'
    >
      <path d='M4 2a1 1 0 0 1 .711.297l3 3.036A1 1 0 1 1 6.29 6.74L5 5.435V13a1 1 0 1 1-2 0V5.435L1.711 6.739A1 1 0 1 1 .29 5.333l3-3.036A1 1 0 0 1 4 2M12 14a1 1 0 0 0 .711-.297l3-3.036A1 1 0 1 0 14.29 9.26L13 10.565V3a1 1 0 0 0-2 0v7.565L9.711 9.261a1 1 0 0 0-1.422 1.406l3 3.036A1 1 0 0 0 12 14' />
    </g>
    <defs>
      <clipPath id='4e93504a43c18676455d22fe298bc858__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySort2pxIcon);
export default ForwardRef;
