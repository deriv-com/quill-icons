import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortXlBoldIcon = (
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
      <path d='M3.328 14.25h8.344L7.5 10.078zm5.25-6.328 6 6q.657.75.328 1.64-.422.891-1.406.938h-12q-.984-.047-1.406-.937-.329-.891.328-1.641l6-6A1.56 1.56 0 0 1 7.5 7.5q.61 0 1.078.422M3.328 21.75 7.5 25.922l4.172-4.172zm5.25 6.328A1.56 1.56 0 0 1 7.5 28.5q-.61 0-1.078-.422l-6-6q-.657-.75-.328-1.64.422-.891 1.406-.938h12q.984.047 1.406.938.329.89-.328 1.64z' />
    </g>
    <defs>
      <clipPath id='db884a3872b2a6ba__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortXlBoldIcon);
export default ForwardRef;
