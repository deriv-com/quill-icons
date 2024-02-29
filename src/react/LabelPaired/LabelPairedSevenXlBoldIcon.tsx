import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.625Q.095 7.595 1.125 7.5h12.75q.657 0 .984.563.282.562 0 1.124L3.61 27.938q-.609.845-1.546.422-.844-.61-.376-1.547L11.908 9.75H1.124Q.095 9.657 0 8.625' />
    </g>
    <defs>
      <clipPath id='b2766d74aca6a3b1c96b8db65e18fc7d__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenXlBoldIcon);
export default ForwardRef;
