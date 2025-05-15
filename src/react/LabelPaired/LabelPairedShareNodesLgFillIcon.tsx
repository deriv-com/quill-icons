import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14 14.25a3.83 3.83 0 0 1-2.617-1.016L7.71 15.07c0 .117.039.274.039.43 0 .195-.04.313-.04.469l3.673 1.836A3.86 3.86 0 0 1 14 16.75a3.751 3.751 0 0 1 0 7.5c-2.07 0-3.75-1.68-3.75-3.75v-.43l-3.672-1.836A3.8 3.8 0 0 1 4 19.25a3.751 3.751 0 0 1 0-7.5c.977 0 1.914.43 2.578 1.055l3.672-1.836V10.5a3.751 3.751 0 0 1 7.5 0c0 2.07-1.68 3.75-3.75 3.75' />
    </g>
    <defs>
      <clipPath id='ca10e0fe09e973828a3cd5493b32fca5__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesLgFillIcon);
export default ForwardRef;
