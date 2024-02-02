import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.633 6.758-2.25 2.25q-.258.234-.516 0-.234-.258 0-.516l1.594-1.617H.625Q.273 6.852.25 6.5q.023-.352.375-.375h8.836L7.867 4.508q-.234-.258 0-.516.258-.234.516 0l2.25 2.25q.234.258 0 .516m-8.016 8.25-2.25-2.25q-.234-.258 0-.516l2.25-2.25q.258-.234.516 0 .234.258 0 .516l-1.594 1.617h8.836q.352.023.375.375-.023.352-.375.375H1.539l1.594 1.617q.234.258 0 .516-.258.234-.516 0' />
    </g>
    <defs>
      <clipPath id='90fb68e5bd4f81da44889e219683d342__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftCaptionRegularIcon);
export default ForwardRef;
