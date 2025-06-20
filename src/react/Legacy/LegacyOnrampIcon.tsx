import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyOnrampIcon = (
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
    <g>
      <path d='M12 0a4 4 0 0 1 4 4v9.5a2.5 2.5 0 0 1-2.336 2.495L13.5 16l-9.46-.001L4 16a4 4 0 0 1-3.995-3.8L0 12a4 4 0 0 1 5.13-3.838l3.032-3.031A4 4 0 0 1 12 0M4 9a3 3 0 1 0 0 6h.03A3 3 0 0 0 4 9m4.6-2.893L6.106 8.599A3.997 3.997 0 0 1 6.646 15H13.5a1.5 1.5 0 0 0 1.493-1.355L15 13.5l.001-6.855a3.997 3.997 0 0 1-6.402-.538M4.407 9.183v.67c.53.176.894.673.894 1.238v.112h-.82v-.112a.485.485 0 1 0-.969 0c0 .27.218.487.485.487a1.308 1.308 0 0 1 .41 2.548v.67h-.819v-.67a1.31 1.31 0 0 1-.895-1.238v-.113h.819v.113c0 .268.218.486.485.486a.486.486 0 0 0 0-.974 1.308 1.308 0 0 1-.409-2.547v-.67zM12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.5 3l.086.007a.5.5 0 0 1 .268.847l-3 3-.07.057a.5.5 0 0 1-.638-.057l-.057-.07a.5.5 0 0 1 .057-.638L5.293 4H4.5l-.09-.008A.5.5 0 0 1 4.5 3zm5.002-1.343v.667h.664v-.667h.664v.667a.997.997 0 0 1 .737 1.668c.168.186.26.426.259.676a.994.994 0 0 1-.996.992v.667h-.664V5.66h-.664v.667h-.664V5.66h-.665v-.668h.665V2.992h-.665v-.667h.665v-.667zm1.328 2.669h-1.328v.667h1.328a.33.33 0 0 0 .332-.333.33.33 0 0 0-.332-.335m0-1.335h-1.328v.668h1.328a.33.33 0 0 0 .332-.334.33.33 0 0 0-.332-.335' />
    </g>
    <defs>
      <clipPath id='988ed13241e97ec1ee7d92181664e4e8__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyOnrampIcon);
export default ForwardRef;
