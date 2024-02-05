import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.563 5a.49.49 0 0 0-.438.25L4.656 6h4.688l-.469-.75A.49.49 0 0 0 8.438 5zm4.968 1H13.5q.47.031.5.5-.03.47-.5.5h-.562l-.813 11.156a1.96 1.96 0 0 1-.625 1.313q-.562.5-1.375.531h-6.25q-.813-.03-1.375-.531a1.96 1.96 0 0 1-.625-1.313L1.063 7H.5q-.469-.03-.5-.5.031-.469.5-.5h2.969l.812-1.281Q4.751 4.03 5.563 4h2.875q.812.03 1.28.719zm1.406 1H2.063l.812 11.063q.03.406.313.656a.94.94 0 0 0 .687.281h6.25q.406 0 .688-.281a.94.94 0 0 0 .312-.657z' />
    </g>
    <defs>
      <clipPath id='3df2988bb75b1eac7b6219b56555f8ab__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashMdRegularIcon);
export default ForwardRef;
