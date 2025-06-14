import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZMdRegularIcon = (
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
      <path d='m5.344 5.156 3 3a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L5.5 6.719V18.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V6.719L2.344 8.875a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3-3a.53.53 0 0 1 .719 0M11 13h4c.188 0 .344.125.438.313a.425.425 0 0 1-.063.5L12.031 18H15c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.485.485 0 0 1-.469-.281c-.094-.157-.062-.375.063-.532L13.938 14H11a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m2-8c.188 0 .344.125.438.281l2 4v.031l.5.97a.513.513 0 0 1-.22.687.513.513 0 0 1-.687-.219l-.344-.75h-3.406l-.344.75a.513.513 0 0 1-.687.219c-.219-.125-.344-.438-.219-.688l.5-.969v-.03l2-4A.54.54 0 0 1 13 5m-1.219 4h2.406L13 6.625z' />
    </g>
    <defs>
      <clipPath id='2a7fb4eab2e0e00d4139eae72975c110__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZMdRegularIcon);
export default ForwardRef;
