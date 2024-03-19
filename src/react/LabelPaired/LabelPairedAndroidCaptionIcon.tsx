import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.094 10.578a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563.57.57 0 0 0-.563.563c0 .328.258.562.563.562m-6.211 0a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563.57.57 0 0 0-.563.563c0 .328.258.562.563.562m6.422-3.375c1.922 1.055 3.234 3 3.445 5.297H.25a6.62 6.62 0 0 1 3.422-5.297L2.547 5.258a.21.21 0 0 1 0-.235q.07-.14.21-.14c.095 0 .165.07.212.14l1.125 1.97a7.12 7.12 0 0 1 5.789 0l1.125-1.97c.047-.07.117-.14.21-.14q.142 0 .212.14a.21.21 0 0 1 0 .235z' />
    </g>
    <defs>
      <clipPath id='b146b33478de5ce292927754160b5f0b__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidCaptionIcon);
export default ForwardRef;
