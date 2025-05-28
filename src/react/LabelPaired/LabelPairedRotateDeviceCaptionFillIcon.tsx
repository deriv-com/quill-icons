import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceCaptionFillIcon = (
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
      <path d='M9.938 9.828a1.12 1.12 0 0 1 0 1.594l-2.11 2.133a1.16 1.16 0 0 1-1.594 0L1.992 9.313a1.12 1.12 0 0 1 0-1.594l2.11-2.133a1.16 1.16 0 0 1 1.593 0zM4.43 6.453c.21.188.21.516 0 .727l-.844.843c-.211.211-.54.211-.75 0l-.047-.046-.281.257c-.14.164-.14.399 0 .54l4.242 4.242c.164.14.398.14.54 0l2.132-2.11c.14-.164.14-.398 0-.539L5.18 6.125c-.164-.14-.399-.14-.54 0l-.257.258zm5.25-.469a3.5 3.5 0 0 0-.563-.468l-.187-.141a4 4 0 0 0-.727-.352l-.234-.07c-.07-.023-.117-.047-.188-.047l.563.54-.54.538L5.86 4.016h1.172c.282.023.563.07.82.117l.329.094.28.093c.306.117.587.258.868.422l.235.164c.21.14.445.328.632.54.961.96 1.43 2.202 1.43 3.445h-.75c0-1.055-.398-2.11-1.195-2.907M2.32 13.32c.188.164.375.328.563.47l.187.116c.235.14.47.258.727.352l.258.094c.047.023.117.023.164.046l-.54-.539.54-.539 1.922 1.97H5.25l-.281-.024c-.282 0-.54-.047-.82-.118l-.305-.07-.305-.117a3.5 3.5 0 0 1-.844-.399l-.234-.164a7 7 0 0 1-.656-.539 4.85 4.85 0 0 1-1.43-3.445h.75c0 1.055.398 2.11 1.219 2.906z' />
    </g>
    <defs>
      <clipPath id='0747868a36d6d56cea0d0b31237d54e9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceCaptionFillIcon);
export default ForwardRef;
