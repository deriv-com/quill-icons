import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineCaptionRegularIcon = (
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
      <path d='M10.328 4.438q-.398-.33-.797 0L8.242 5.703l1.805 1.805 1.265-1.29q.33-.397 0-.796zM2.195 11.75a1.7 1.7 0 0 0-.375.656l-.633 2.156 2.157-.632q.375-.117.656-.375l5.508-5.508-1.805-1.805zm6.797-7.852q.399-.375.938-.375.515 0 .914.375l1.008 1.008q.375.399.375.914 0 .54-.375.938l-7.336 7.336a2.2 2.2 0 0 1-.938.562l-2.836.82q-.234.07-.375-.093-.164-.14-.094-.352l.82-2.836a2.1 2.1 0 0 1 .587-.96zM5.875 14.75h7.5q.352.023.375.375-.023.352-.375.375h-7.5q-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='98b24f304c5535c48093f3766876ba33__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineCaptionRegularIcon);
export default ForwardRef;
