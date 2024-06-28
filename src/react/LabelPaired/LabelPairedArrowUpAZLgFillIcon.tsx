import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.398 7.18 3.438 3.75a1.24 1.24 0 0 1-.078 1.758A1.24 1.24 0 0 1 9 12.609l-1.25-1.367V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V11.242L3.96 12.61a1.24 1.24 0 0 1-1.757.079 1.24 1.24 0 0 1-.078-1.758l3.438-3.75c.234-.274.585-.43.937-.43s.664.156.898.43M12.75 18c0-.664.547-1.25 1.25-1.25h5c.508 0 .938.313 1.133.781a1.26 1.26 0 0 1-.274 1.367l-2.851 2.891H19c.664 0 1.25.547 1.25 1.25 0 .664-.586 1.25-1.25 1.25h-5a1.28 1.28 0 0 1-1.172-.781 1.26 1.26 0 0 1 .274-1.367l2.851-2.891H14c-.703 0-1.25-.547-1.25-1.25M16.5 6.75c.469 0 .898.273 1.094.703l2.5 5 .625 1.25a1.24 1.24 0 0 1-.547 1.68 1.24 1.24 0 0 1-1.68-.547l-.273-.586h-3.477l-.273.586a1.24 1.24 0 0 1-1.68.547 1.24 1.24 0 0 1-.547-1.68l.625-1.25 2.5-5c.195-.43.625-.703 1.133-.703m-.82 5.625h1.601l-.781-1.562z' />
    </g>
    <defs>
      <clipPath id='59e93a9680b9d14d2d9a7bf5918e96c4__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZLgFillIcon);
export default ForwardRef;
