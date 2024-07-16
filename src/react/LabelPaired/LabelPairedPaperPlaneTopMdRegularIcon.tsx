import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={24}
    viewBox='0 0 17 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.594 6.469A1.05 1.05 0 0 1 .75 5.312c.281-.28.75-.375 1.125-.218l14 6c.375.156.625.531.625.906 0 .406-.25.781-.625.938l-14 6a1.02 1.02 0 0 1-1.125-.25 1 1 0 0 1-.156-1.125L3.375 12zM4.25 12.5 1.5 18l12.813-5.5zm10.063-1L1.5 6l2.75 5.5z' />
    </g>
    <defs>
      <clipPath id='145708d5ffff7f44e8ccd0d1ab4e4cf7__a'>
        <path d='M0 0h17v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopMdRegularIcon);
export default ForwardRef;
