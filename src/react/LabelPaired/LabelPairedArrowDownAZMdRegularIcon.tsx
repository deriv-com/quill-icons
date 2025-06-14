import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZMdRegularIcon = (
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
      <path d='m8.344 15.875-3 3a.53.53 0 0 1-.719 0l-3-3a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L4.5 17.312V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11.813l2.125-2.157a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719m5.094-10.594 2 4v.031l.5.97a.513.513 0 0 1-.22.687c-.25.125-.562 0-.687-.219l-.344-.75h-3.406l-.344.75a.513.513 0 0 1-.687.219.513.513 0 0 1-.219-.688l.5-.969v-.03l2-4A.54.54 0 0 1 13 5c.188 0 .344.125.438.281M13 6.625 11.781 9h2.406zM11 13h4c.188 0 .344.125.438.313a.425.425 0 0 1-.063.5L12.031 18H15c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.485.485 0 0 1-.469-.281.55.55 0 0 1 .063-.532L13.938 14H11a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='0409dd4353ffab46b75a7568404d6e18__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZMdRegularIcon);
export default ForwardRef;
