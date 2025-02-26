import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={18}
    viewBox='0 0 3 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 11.938a1.312 1.312 0 0 1 1.125 1.969 1.26 1.26 0 0 1-1.125.656c-.492 0-.914-.235-1.148-.657A1.313 1.313 0 0 1 1.5 11.937m0-3.75a1.313 1.313 0 0 1 1.125 1.969 1.26 1.26 0 0 1-1.125.656c-.492 0-.914-.235-1.148-.657A1.313 1.313 0 0 1 1.5 8.187M2.813 5.75A1.313 1.313 0 0 1 .843 6.898C.422 6.664.187 6.242.187 5.75c0-.469.235-.89.657-1.125A1.313 1.313 0 0 1 2.813 5.75' />
    </g>
    <defs>
      <clipPath id='d6552cca025bf00e878fbb28c070cfb5__a'>
        <path d='M0 0h3v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalCaptionFillIcon);
export default ForwardRef;
