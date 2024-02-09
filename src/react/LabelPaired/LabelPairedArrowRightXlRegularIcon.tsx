import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m20.766 18.516-8.25 8.25q-.516.468-1.032 0-.468-.516 0-1.032l6.938-6.984H.75Q.047 18.704 0 18q.047-.704.75-.75h17.672l-6.938-6.984q-.468-.516 0-1.032.516-.468 1.032 0l8.25 8.25q.468.516 0 1.032' />
    </g>
    <defs>
      <clipPath id='7406968b8c37cb73cef284dcc1da79b9__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightXlRegularIcon);
export default ForwardRef;
