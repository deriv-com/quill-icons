import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortXlFillIcon = (
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
      <path d='M6.422 7.969a1.445 1.445 0 0 1 2.11 0l6 6c.421.422.562 1.078.327 1.64-.234.563-.75.938-1.359.938h-12c-.61 0-1.172-.375-1.406-.938a1.52 1.52 0 0 1 .328-1.64zm0 20.11-6-6a1.52 1.52 0 0 1-.328-1.642A1.54 1.54 0 0 1 1.5 19.5h12c.563 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64l-6 6c-.562.61-1.547.61-2.11 0' />
    </g>
    <defs>
      <clipPath id='4bd59aa91b55bb414010ee1648da85a2__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortXlFillIcon);
export default ForwardRef;
