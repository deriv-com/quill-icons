import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.406 5.25c-.281-.281-.75-.281-1.062 0l-1.688 1.719 2.375 2.375 1.719-1.688c.281-.312.281-.781 0-1.062zM2.594 15.031c-.25.219-.406.531-.5.844l-.875 2.906 2.906-.843c.313-.094.625-.282.844-.532l7.375-7.343-2.406-2.407zm9.062-10.5a1.794 1.794 0 0 1 2.469 0l1.344 1.344a1.794 1.794 0 0 1 0 2.469l-9.781 9.781c-.375.344-.813.625-1.282.75L.625 20a.49.49 0 0 1-.5-.125c-.125-.125-.156-.312-.125-.5l1.125-3.781c.125-.469.406-.906.75-1.281zM7.5 19h10c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-10a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='9a96ad772c1f650335bbf616b07bfaa0__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineMdRegularIcon);
export default ForwardRef;
