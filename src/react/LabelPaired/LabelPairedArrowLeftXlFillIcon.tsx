import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftXlFillIcon = (
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
      <path d='m.422 16.969 7.5-7.5a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11L5.108 16.5H19.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H5.11l4.921 4.969c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0l-7.5-7.5a1.445 1.445 0 0 1 0-2.11' />
    </g>
    <defs>
      <clipPath id='e28205c3d4bbd6ff5c725be661cfc585__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftXlFillIcon);
export default ForwardRef;
