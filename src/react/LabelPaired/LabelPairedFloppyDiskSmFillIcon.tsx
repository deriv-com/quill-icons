import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 4.625h6.617c.465 0 .93.191 1.258.52l2.105 2.105c.329.328.52.793.52 1.258v6.617c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75m0 2.625V9c0 .492.383.875.875.875h5.25A.88.88 0 0 0 9.125 9V7.25a.9.9 0 0 0-.875-.875H3a.88.88 0 0 0-.875.875M6.5 11.625c-.629 0-1.203.355-1.531.875-.301.547-.301 1.23 0 1.75.328.547.902.875 1.531.875.602 0 1.176-.328 1.504-.875.3-.52.3-1.203 0-1.75-.328-.52-.902-.875-1.504-.875' />
    </g>
    <defs>
      <clipPath id='7a8d6a1d913fa9056210137e989b0f0b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskSmFillIcon);
export default ForwardRef;
