import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserXlRegularIcon = (
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
      <path d='M15 12q0-1.218-.61-2.25A4.51 4.51 0 0 0 10.5 7.5a4.51 4.51 0 0 0-3.89 2.25A4.34 4.34 0 0 0 6 12q0 1.22.61 2.25a4.51 4.51 0 0 0 3.89 2.25 4.51 4.51 0 0 0 3.89-2.25Q15 13.22 15 12M4.5 12q0-1.641.797-3A6.2 6.2 0 0 1 7.5 6.797a6 6 0 0 1 3-.797 6 6 0 0 1 3 .797A6.2 6.2 0 0 1 15.703 9q.797 1.359.797 3a5.8 5.8 0 0 1-.797 3 6.2 6.2 0 0 1-2.203 2.203 6 6 0 0 1-3 .797 6 6 0 0 1-3-.797A6.2 6.2 0 0 1 5.297 15a5.8 5.8 0 0 1-.797-3m-3 16.5h18q-.094-2.86-2.062-4.781-1.922-1.876-4.782-1.969H8.344q-2.86.094-4.781 1.969Q1.594 25.64 1.5 28.5m-1.5.094q.094-3.516 2.438-5.907 2.39-2.344 5.906-2.437h4.312q3.516.094 5.906 2.438 2.344 2.39 2.438 5.906 0 .609-.422.984-.375.422-.984.422H1.406q-.609 0-.984-.422Q0 29.203 0 28.594' />
    </g>
    <defs>
      <clipPath id='9037a196adbb1748b739935dc2c15419__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserXlRegularIcon);
export default ForwardRef;
