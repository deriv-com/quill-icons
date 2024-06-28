import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 19c-.562 0-1-.437-1-1 0-.531.438-1 1-1h10c.531 0 1 .469 1 1 0 .563-.469 1-1 1zm5.688-4.281a.964.964 0 0 1-1.407 0l-4-4a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0L5 11.593V6c0-.531.438-1 1-1 .531 0 1 .469 1 1v5.594l2.281-2.281a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406z' />
    </g>
    <defs>
      <clipPath id='01920d706fca13cb25941cb6e4e8ab7f__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineMdFillIcon);
export default ForwardRef;
