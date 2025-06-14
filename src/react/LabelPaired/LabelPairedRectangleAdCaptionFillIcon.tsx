import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdCaptionFillIcon = (
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
      <path d='M1.75 4.25h10.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5m3.867 3.328a.53.53 0 0 0-.492-.328.58.58 0 0 0-.516.328l-1.687 3.375a.555.555 0 0 0 .258.75c.28.14.61.024.75-.258l.117-.258H6.18l.117.258c.14.282.492.399.75.258a.555.555 0 0 0 .258-.75zm-.492 1.5.492.985H4.61zm4.313.422a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563M10 8.492a1.6 1.6 0 0 0-.562-.117c-.938 0-1.688.773-1.688 1.688 0 .937.75 1.687 1.688 1.687.257 0 .492-.047.726-.164.094.117.234.164.399.164a.555.555 0 0 0 .562-.562V7.812a.57.57 0 0 0-.562-.562.555.555 0 0 0-.563.563z' />
    </g>
    <defs>
      <clipPath id='3c424675fefeb4e57b1b715961474cc3__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdCaptionFillIcon);
export default ForwardRef;
