import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyGuide2pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule='evenodd' clipRule='evenodd'>
      <path d='M6.872 5.849A.75.75 0 0 0 5.75 6.5v4a.75.75 0 0 0 1.122.651l3.5-2a.75.75 0 0 0 0-1.302zM8.488 8.5l-1.238.708V7.792z' />
      <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-1 1.732V11a3 3 0 0 1-3 3h-.382l.276.553a1 1 0 1 1-1.789.894L9.382 14H6.618l-.724 1.447a1 1 0 1 1-1.788-.894L4.382 14H4a3 3 0 0 1-3-3V4.732A2 2 0 0 1 0 3zm14 1H2V2h12zm-1 2H3v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z' />
    </g>
    <defs>
      <clipPath id='dbe3da808e8ae3895dbb63186fc31a97__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyGuide2pxIcon);
export default ForwardRef;
