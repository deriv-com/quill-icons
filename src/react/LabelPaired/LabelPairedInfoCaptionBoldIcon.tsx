import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={18}
    viewBox='0 0 5 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 5.188a.97.97 0 0 1 .468-.82 1 1 0 0 1 .938 0q.445.28.469.82a.97.97 0 0 1-.47.82 1 1 0 0 1-.937 0 .97.97 0 0 1-.469-.82m-.938 3q.047-.516.563-.563H2.5q.516.047.563.563v6.187h1.124q.516.047.563.563-.047.514-.562.562H.813q-.516-.047-.563-.562.047-.516.563-.563h1.125V8.75h-.75q-.516-.047-.563-.562' />
    </g>
    <defs>
      <clipPath id='c3cfc38465009072__a'>
        <path d='M0 0h5v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoCaptionBoldIcon);
export default ForwardRef;
