import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLiveChatOutlineIcon = (
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
    <path d='M13.5 5A2.5 2.5 0 0 1 16 7.5v7l-.007.086a.5.5 0 0 1-.847.268L13.294 13H6.5l-.164-.005A2.5 2.5 0 0 1 4 10.5a.5.5 0 0 1 1 0A1.5 1.5 0 0 0 6.5 12h7l.079.006a.5.5 0 0 1 .275.14L15 13.292V7.5l-.007-.144A1.5 1.5 0 0 0 13.5 6a.5.5 0 0 1 0-1m-4-4A2.5 2.5 0 0 1 12 3.5v3A2.5 2.5 0 0 1 9.5 9H2.706L.854 10.854a.5.5 0 0 1-.847-.268L0 10.5v-7A2.5 2.5 0 0 1 2.5 1zm0 1h-7A1.5 1.5 0 0 0 1 3.5v5.792l1.146-1.146a.5.5 0 0 1 .275-.14L2.5 8h7A1.5 1.5 0 0 0 11 6.5v-3A1.5 1.5 0 0 0 9.5 2m-4 3a.5.5 0 0 1 .09.992L5.5 6h-2a.5.5 0 0 1-.09-.992L3.5 5zm3-2a.5.5 0 0 1 .09.992L8.5 4h-5a.5.5 0 0 1-.09-.992L3.5 3z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyLiveChatOutlineIcon);
export default ForwardRef;
