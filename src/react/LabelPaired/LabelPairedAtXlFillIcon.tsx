import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtXlFillIcon = (
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
      <path d='M12 9c-4.969 0-9 4.031-9 9s4.031 9 9 9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5-6.656 0-12-5.344-12-12C0 11.39 5.344 6 12 6c6.61 0 12 5.39 12 12v1.5c0 2.484-2.016 4.5-4.5 4.5a4.63 4.63 0 0 1-3.469-1.547C15 23.438 13.547 24 12 24c-3.328 0-6-2.672-6-6 0-3.281 2.672-6 6-6 1.266 0 2.484.422 3.469 1.172.281-.235.61-.422 1.031-.422.797 0 1.5.703 1.5 1.5v5.25c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5V18c0-4.969-4.031-9-9-9m3 9c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0C9.563 15.984 9 16.969 9 18c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625' />
    </g>
    <defs>
      <clipPath id='547c9e6ad56bb39b394d52309f9a4ca3__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtXlFillIcon);
export default ForwardRef;
