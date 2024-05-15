import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyArchive2pxIcon = (
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
    <g fill='#333' clipPath='url(#678c1038d0dc04484b06c335995a280a__a)'>
      <path d='M8 7.25a.75.75 0 0 1 .75.75v2.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V8A.75.75 0 0 1 8 7.25' />
      <path
        fillRule='evenodd'
        d='M1.574 1.336A3 3 0 0 1 4.07 0h7.86a3 3 0 0 1 2.496 1.336l.734 1.102A5 5 0 0 1 16 5.21V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5.211a5 5 0 0 1 .84-2.773zM4.07 2a1 1 0 0 0-.832.445l-.734 1.102A3 3 0 0 0 2.255 4h11.49a3 3 0 0 0-.249-.453l-.734-1.102A1 1 0 0 0 11.93 2zM14 6H2v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='678c1038d0dc04484b06c335995a280a__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyArchive2pxIcon);
export default ForwardRef;
