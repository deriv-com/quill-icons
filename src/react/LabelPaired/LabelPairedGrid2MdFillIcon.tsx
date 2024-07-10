import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2MdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 6.5v3A1.5 1.5 0 0 1 5.5 11h-3A1.48 1.48 0 0 1 1 9.5v-3A1.5 1.5 0 0 1 2.5 5h3C6.313 5 7 5.688 7 6.5m0 8v3A1.5 1.5 0 0 1 5.5 19h-3A1.48 1.48 0 0 1 1 17.5v-3A1.5 1.5 0 0 1 2.5 13h3c.813 0 1.5.688 1.5 1.5m2-8A1.5 1.5 0 0 1 10.5 5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 9.5zm6 8v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 17.5v-3a1.5 1.5 0 0 1 1.5-1.5h3c.813 0 1.5.688 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='a96403eed3a1c8200eee5d80b87a3501__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2MdFillIcon);
export default ForwardRef;
