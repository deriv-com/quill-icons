import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTradeTypeMultipliersIcon = (
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
      <path
        fillRule='evenodd'
        d='M13.138 2.155A.5.5 0 0 1 13.5 2h2a.5.5 0 0 1 0 1h-1.786L3.362 13.845A.5.5 0 0 1 3 14H.5a.5.5 0 0 1 0-1h2.286z'
        clipRule='evenodd'
      />
      <path d='m6.09 6.642.692-.725L3.37 2.164A.5.5 0 0 0 3 2H.5a.5.5 0 0 0 0 1h2.279zM9.462 10.351l.692-.725L13.221 13H15.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.37-.164z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyTradeTypeMultipliersIcon);
export default ForwardRef;
