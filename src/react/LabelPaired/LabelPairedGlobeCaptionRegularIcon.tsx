import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 14.75c.375 0 .938-.328 1.43-1.336a7.3 7.3 0 0 0 .586-1.664H3.984c.118.633.329 1.195.563 1.664C5.039 14.422 5.602 14.75 6 14.75M3.844 11h4.289c.07-.469.117-.96.117-1.5 0-.516-.047-1.008-.117-1.5h-4.29c-.07.492-.093.984-.093 1.5 0 .54.023 1.031.094 1.5m.14-3.75h4.032a7 7 0 0 0-.586-1.64C6.938 4.601 6.375 4.25 6 4.25c-.398 0-.96.352-1.453 1.36a6.1 6.1 0 0 0-.563 1.64M8.906 8c.047.492.094.984.094 1.5 0 .54-.047 1.031-.094 1.5h2.11c.14-.469.234-.96.234-1.5 0-.516-.094-1.008-.234-1.5zm1.828-.75a5.33 5.33 0 0 0-3.07-2.719c.492.657.89 1.617 1.102 2.719zm-7.523 0c.234-1.102.61-2.062 1.102-2.719a5.33 5.33 0 0 0-3.07 2.719zM.96 8C.82 8.492.75 8.984.75 9.5c0 .54.07 1.031.21 1.5h2.134C3.024 10.531 3 10.04 3 9.5c0-.516.023-1.008.094-1.5zm6.703 6.492a5.3 5.3 0 0 0 3.07-2.742H8.766c-.211 1.125-.61 2.063-1.102 2.742m-3.351 0c-.493-.68-.868-1.617-1.102-2.742H1.242a5.3 5.3 0 0 0 3.07 2.742M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3' />
    </g>
    <defs>
      <clipPath id='9759aceffa3e79f504341c5cf725ff7d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeCaptionRegularIcon);
export default ForwardRef;
