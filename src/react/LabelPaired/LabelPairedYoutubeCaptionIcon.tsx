import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeCaptionIcon = (
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
      <path d='M13.14 6.406q.118.54.188 1.242.047.728.07 1.29v1.148q-.023.563-.07 1.266-.071.726-.187 1.265-.281.867-1.149 1.125-.562.117-1.734.188-1.172.046-2.18.07H5.922a131 131 0 0 1-2.18-.07q-1.172-.07-1.734-.188-.867-.258-1.149-1.125-.117-.54-.187-1.265a51 51 0 0 1-.07-1.266V8.938q.023-.563.07-1.29.071-.702.187-1.242.281-.867 1.149-1.148.563-.116 1.734-.188A131 131 0 0 1 5.922 5h2.156q1.008.024 2.18.07 1.172.07 1.734.188.867.28 1.149 1.148m-7.453 5.016L9.04 9.5 5.688 7.602z' />
    </g>
    <defs>
      <clipPath id='d70b1cc4af7c0f1a11444fe4939e6b49__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeCaptionIcon);
export default ForwardRef;
