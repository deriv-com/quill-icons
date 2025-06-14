import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.438C0 5.93.39 5.5.938 5.5a.95.95 0 0 1 .937.938v18.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937zM6.875 8h11.25C19.141 8 20 8.86 20 9.875v2.5c0 1.055-.86 1.875-1.875 1.875H6.875A1.85 1.85 0 0 1 5 12.375v-2.5C5 8.859 5.82 8 6.875 8m0 8.75h6.25c1.016 0 1.875.86 1.875 1.875v2.5C15 22.18 14.14 23 13.125 23h-6.25A1.85 1.85 0 0 1 5 21.125v-2.5c0-1.016.82-1.875 1.875-1.875' />
    </g>
    <defs>
      <clipPath id='8a5502825f5ed422424eda99180e2c3f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftLgFillIcon);
export default ForwardRef;
