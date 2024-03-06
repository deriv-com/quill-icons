import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownXlBoldIcon = (
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
      <path d='m7.5 25.922 4.172-4.172H3.328zm-1.078 2.156-6-6q-.657-.75-.328-1.64.422-.891 1.406-.938h12q.984.047 1.406.938.329.89-.328 1.64l-6 6A1.56 1.56 0 0 1 7.5 28.5q-.61 0-1.078-.422' />
    </g>
    <defs>
      <clipPath id='5dd13f260dcc6f8068e077347f359e68__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownXlBoldIcon);
export default ForwardRef;
