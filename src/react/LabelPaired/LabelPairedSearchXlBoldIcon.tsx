import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchXlBoldIcon = (
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
      <path d='M17.25 15.75c0-2.672-1.453-5.11-3.75-6.469-2.344-1.36-5.203-1.36-7.5 0-2.344 1.36-3.75 3.797-3.75 6.469A7.46 7.46 0 0 0 6 22.266c2.297 1.359 5.156 1.359 7.5 0 2.297-1.36 3.75-3.797 3.75-6.516m-1.453 7.688A9.82 9.82 0 0 1 9.75 25.5C4.36 25.5 0 21.14 0 15.75 0 10.406 4.36 6 9.75 6c5.344 0 9.75 4.406 9.75 9.75a9.9 9.9 0 0 1-2.11 6.094l6.282 6.234c.422.469.422 1.172 0 1.594-.469.469-1.172.469-1.594 0z' />
    </g>
    <defs>
      <clipPath id='a9aa2ff57f0ce672741f3aa0bc0329ac__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchXlBoldIcon);
export default ForwardRef;
