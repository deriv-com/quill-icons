import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineMdBoldIcon = (
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
      <path d='M14.25 5.75V9.5H15a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-3a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.75V6.813l-.531.156a.734.734 0 0 1-.938-.469c-.125-.406.063-.812.469-.937l1.5-.5a.7.7 0 0 1 .688.093.76.76 0 0 1 .312.594M4.469 18.781l-3-3c-.313-.281-.313-.75 0-1.062.281-.281.75-.281 1.062 0l1.719 1.75V5.75A.74.74 0 0 1 5 5a.76.76 0 0 1 .75.75v10.719l1.719-1.719a.684.684 0 0 1 1.031 0 .684.684 0 0 1 0 1.031l-3 3a.684.684 0 0 1-1.031 0M13.25 16c.438 0 .844-.219 1.063-.625a1.27 1.27 0 0 0 0-1.25 1.25 1.25 0 0 0-1.063-.625c-.469 0-.875.25-1.094.625a1.27 1.27 0 0 0 0 1.25c.219.406.625.625 1.094.625m-.562 1.469A2.78 2.78 0 0 1 10.5 14.75c0-1.5 1.219-2.75 2.75-2.75 1.5 0 2.75 1.25 2.75 2.75 0 .688-.25 1.313-.656 1.813l-1.781 2.187c-.25.313-.72.344-1.063.094-.312-.25-.344-.719-.094-1.063z' />
    </g>
    <defs>
      <clipPath id='67b417650fad13f1def17d16b0ceda08__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineMdBoldIcon);
export default ForwardRef;
