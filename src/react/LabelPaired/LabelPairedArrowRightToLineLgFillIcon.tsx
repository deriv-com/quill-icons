import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.75 9.25v12.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9.25c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-5.39 7.148-5 5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l2.851-2.891H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h6.953l-2.851-2.852a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l5 5c.508.468.508 1.289 0 1.757' />
    </g>
    <defs>
      <clipPath id='0f8a9cf4d60c4dce58db1149ea4b107d__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineLgFillIcon);
export default ForwardRef;
