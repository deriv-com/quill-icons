import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.602 5.89a1.205 1.205 0 0 1 1.757 0l3.75 3.75c.508.47.508 1.29 0 1.758l-3.75 3.75a1.205 1.205 0 0 1-1.757 0l-3.75-3.75a1.205 1.205 0 0 1 0-1.757zM3.125 9.564v6.289c0 .664.234 1.289.703 1.757l1.992 1.993c.352.312.86.39 1.211.117.508-.313.586-1.055.157-1.485l-.586-.586-1.25-1.25a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l1.25 1.25.586.586 1.016.976c.82.82 1.289 1.953 1.289 3.125v3.047c0 1.055-.86 1.875-1.875 1.875H6.758c-.664 0-1.29-.234-1.758-.703L1.094 20.89A3.8 3.8 0 0 1 0 18.234V9.563C0 8.703.664 8 1.563 8c.859 0 1.562.703 1.562 1.563m18.75 0c0-.86.703-1.563 1.563-1.563C24.297 8 25 8.703 25 9.563v8.671c0 .977-.39 1.953-1.094 2.657L20 24.797c-.469.469-1.133.703-1.797.703h-2.578a1.85 1.85 0 0 1-1.875-1.875v-3.047c0-1.172.43-2.305 1.25-3.125l1.016-.976.586-.586 1.25-1.25a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-1.25 1.25-.586.586c-.43.43-.351 1.172.157 1.485.351.273.86.195 1.21-.117l1.993-1.993a2.49 2.49 0 0 0 .742-1.757V9.563' />
    </g>
    <defs>
      <clipPath id='411d4966eed95d082df6c9651f58b344__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondLgFillIcon);
export default ForwardRef;
