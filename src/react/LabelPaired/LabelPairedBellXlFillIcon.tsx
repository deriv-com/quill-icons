import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 6c.797 0 1.5.703 1.5 1.5v.938c3.422.656 6 3.703 6 7.312v.89c0 2.204.797 4.36 2.25 6l.328.376c.422.468.516 1.078.281 1.64-.234.516-.797.844-1.359.844h-18c-.61 0-1.172-.328-1.406-.844a1.52 1.52 0 0 1 .281-1.64l.328-.375C2.156 21 3 18.844 3 16.64v-.891c0-3.61 2.578-6.656 6-7.312V7.5c0-.797.656-1.5 1.5-1.5m2.11 23.156c-.563.563-1.313.844-2.11.844s-1.594-.281-2.156-.844S7.5 27.796 7.5 27h6c0 .797-.328 1.594-.89 2.156' />
    </g>
    <defs>
      <clipPath id='9f98af3db218fe9e008f4b85534fa43e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellXlFillIcon);
export default ForwardRef;
