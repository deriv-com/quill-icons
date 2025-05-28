import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m18.094 13.5-.797-.797a7.583 7.583 0 0 0-10.64 0 7.583 7.583 0 0 0 0 10.64 7.583 7.583 0 0 0 10.64 0c.562-.609 1.5-.609 2.11 0 .562.563.562 1.5 0 2.11a10.553 10.553 0 0 1-14.86 0 10.553 10.553 0 0 1 0-14.86 10.553 10.553 0 0 1 14.86 0l.843.845V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v6c0 .844-.703 1.5-1.5 1.5h-6a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='146fbd39054893d722392cddcab344f0__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightXlFillIcon);
export default ForwardRef;
