import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightMdFillIcon = (
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
      <path d='m12.063 9-.532-.531a5.055 5.055 0 0 0-7.094 0 5.055 5.055 0 0 0 0 7.094 5.055 5.055 0 0 0 7.094 0c.375-.407 1-.407 1.406 0 .376.374.376 1 0 1.406a7.035 7.035 0 0 1-9.906 0 7.035 7.035 0 0 1 0-9.907 7.035 7.035 0 0 1 9.907 0l.562.563V6c0-.531.438-1 1-1 .531 0 1 .469 1 1v4c0 .563-.469 1-1 1h-4c-.562 0-1-.437-1-1 0-.531.438-1 1-1z' />
    </g>
    <defs>
      <clipPath id='281c29d5709ad557b3b6d8e44f1a5817__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightMdFillIcon);
export default ForwardRef;
