import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersCaptionBoldIcon = (
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
      <path d='M3.375 7.25c-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.875c.35-.563.96-.938 1.64-.938.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.875c-.351.585-.96.937-1.617.937m8.625 0c-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.875c.35-.563.96-.938 1.64-.938.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.875A1.89 1.89 0 0 1 12 7.25M0 10.508A2.49 2.49 0 0 1 2.484 8h1.008c.375 0 .727.094 1.055.234-.047.164-.047.352-.047.516 0 .914.375 1.71 1.008 2.25H.492A.48.48 0 0 1 0 10.508M9.492 11H9.47a2.93 2.93 0 0 0 .984-2.766c.305-.14.656-.234 1.031-.234h1.008A2.51 2.51 0 0 1 15 10.508a.5.5 0 0 1-.516.492zM7.5 7.625c-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.124a1.122 1.122 0 0 0 1.945 0c.21-.328.21-.773 0-1.124-.211-.329-.563-.563-.961-.563M7.5 11c-.82 0-1.547-.422-1.969-1.125a2.27 2.27 0 0 1 0-2.25C5.953 6.945 6.68 6.5 7.5 6.5c.797 0 1.523.445 1.945 1.125.399.703.399 1.57 0 2.25C9.023 10.578 8.297 11 7.5 11m-1.383 1.875c-.937 0-1.71.656-1.945 1.5h6.633c-.235-.844-1.008-1.5-1.946-1.5zm0-1.125H8.86A3.14 3.14 0 0 1 12 14.89c0 .352-.281.61-.633.61H3.61A.605.605 0 0 1 3 14.89a3.12 3.12 0 0 1 3.117-3.14' />
    </g>
    <defs>
      <clipPath id='05cf59d3fe4ba1f495448fe2626bf5a2__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersCaptionBoldIcon);
export default ForwardRef;
