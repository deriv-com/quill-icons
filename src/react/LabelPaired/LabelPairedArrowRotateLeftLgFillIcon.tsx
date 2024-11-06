import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.883 11.75h1.992c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-5c-.703 0-1.25-.547-1.25-1.25V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v2.031l.664-.703a8.794 8.794 0 0 1 12.383 0 8.794 8.794 0 0 1 0 12.383 8.794 8.794 0 0 1-12.383 0c-.469-.508-.469-1.29 0-1.758.508-.508 1.29-.508 1.758 0a6.32 6.32 0 0 0 8.867 0 6.32 6.32 0 0 0 0-8.867 6.32 6.32 0 0 0-8.867 0z' />
    </g>
    <defs>
      <clipPath id='5b62eed68f920cca853c31fa71ab0b4d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftLgFillIcon);
export default ForwardRef;
