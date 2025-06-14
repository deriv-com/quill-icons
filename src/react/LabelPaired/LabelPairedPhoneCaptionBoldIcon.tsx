import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneCaptionBoldIcon = (
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
      <path d='m8.79 9.969 2.624 1.125c.422.164.656.61.563 1.054l-.563 2.625c-.094.422-.492.75-.914.75-.164 0-.305-.023-.445-.023-.235 0-.47-.023-.68-.047A10.5 10.5 0 0 1 0 5a.95.95 0 0 1 .727-.914l2.625-.563a.92.92 0 0 1 1.054.563L5.531 6.71c.164.375.07.82-.258 1.078l-.96.797a7.3 7.3 0 0 0 2.601 2.601l.797-.96a.904.904 0 0 1 1.078-.258m1.546 4.406.492-2.32-2.344-1.008-.68.844c-.35.422-.96.539-1.452.257a8.37 8.37 0 0 1-3-3 1.15 1.15 0 0 1 .257-1.453l.844-.68-1.008-2.343-2.32.492a9.335 9.335 0 0 0 9.21 9.211' />
    </g>
    <defs>
      <clipPath id='6c8367232d7b1426c17ca0d2de77b09f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneCaptionBoldIcon);
export default ForwardRef;
