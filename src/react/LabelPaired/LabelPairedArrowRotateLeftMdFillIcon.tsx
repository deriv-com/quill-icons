import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.906 9H5.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-4c-.562 0-1-.437-1-1V6c0-.531.438-1 1-1 .531 0 1 .469 1 1v1.625l.531-.562a7.035 7.035 0 0 1 9.907 0 7.036 7.036 0 0 1 0 9.906 7.035 7.035 0 0 1-9.907 0c-.375-.407-.375-1.032 0-1.407.406-.406 1.031-.406 1.406 0a5.055 5.055 0 0 0 7.094 0 5.055 5.055 0 0 0 0-7.093 5.055 5.055 0 0 0-7.094 0z' />
    </g>
    <defs>
      <clipPath id='a2f266492c0cb5f016abaa6b2b140db0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftMdFillIcon);
export default ForwardRef;
