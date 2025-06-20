import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.922 6.469a1.445 1.445 0 0 1 2.11 0l4.5 4.5c.609.562.609 1.547 0 2.11l-4.5 4.5c-.563.608-1.548.608-2.11 0l-4.5-4.5a1.445 1.445 0 0 1 0-2.11zM3.75 10.875v7.547c0 .797.281 1.547.844 2.11l2.39 2.39c.422.375 1.032.469 1.454.14.609-.375.703-1.265.187-1.78l-.703-.704-1.5-1.5a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l1.5 1.5.702.704 1.22 1.172a5.32 5.32 0 0 1 1.546 3.75v3.656A2.25 2.25 0 0 1 11.25 30H8.11c-.797 0-1.547-.281-2.11-.844L1.313 24.47A4.55 4.55 0 0 1 0 21.28V10.875A1.85 1.85 0 0 1 1.875 9a1.88 1.88 0 0 1 1.875 1.875m22.5 0A1.88 1.88 0 0 1 28.125 9 1.88 1.88 0 0 1 30 10.875v10.406a4.55 4.55 0 0 1-1.312 3.188L24 29.156c-.562.563-1.36.844-2.156.844H18.75a2.22 2.22 0 0 1-2.25-2.25v-3.656c0-1.407.516-2.766 1.5-3.75l1.219-1.172.703-.703 1.5-1.5a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11l-1.5 1.5-.704.702c-.515.516-.422 1.407.188 1.782.422.328 1.03.234 1.453-.141l2.39-2.39c.563-.563.891-1.313.891-2.11v-7.547' />
    </g>
    <defs>
      <clipPath id='412eb4238dc4f86fc4f890c15297a9d8__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondXlFillIcon);
export default ForwardRef;
