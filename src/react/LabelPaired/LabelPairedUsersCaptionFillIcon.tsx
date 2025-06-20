import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 3.5c.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.875c-.351.585-.96.937-1.617.937-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.875c.35-.563.96-.938 1.64-.938M12 3.5c.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.875A1.89 1.89 0 0 1 12 7.25c-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.875c.35-.563.96-.938 1.64-.938M0 10.508A2.49 2.49 0 0 1 2.484 8h1.008c.375 0 .727.094 1.055.234-.047.164-.047.352-.047.516 0 .914.375 1.71 1.008 2.25H.492A.48.48 0 0 1 0 10.508M9.492 11H9.47c.633-.54 1.008-1.336 1.008-2.25 0-.164 0-.352-.024-.516.305-.14.656-.234 1.031-.234h1.008A2.51 2.51 0 0 1 15 10.508a.5.5 0 0 1-.516.492zM5.25 8.75c0-.797.422-1.523 1.125-1.945a2.27 2.27 0 0 1 2.25 0c.68.422 1.125 1.148 1.125 1.945 0 .82-.445 1.547-1.125 1.969a2.27 2.27 0 0 1-2.25 0A2.27 2.27 0 0 1 5.25 8.75M3 14.89a3.12 3.12 0 0 1 3.117-3.14H8.86A3.14 3.14 0 0 1 12 14.89c0 .329-.281.61-.633.61H3.61A.605.605 0 0 1 3 14.89' />
    </g>
    <defs>
      <clipPath id='c6c4aa7986715f9a8a358b1c3287a1f7__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersCaptionFillIcon);
export default ForwardRef;
