import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdCaptionBoldIcon = (
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
      <path d='M1.75 5.375a.385.385 0 0 0-.375.375v7.5c0 .21.164.375.375.375h10.5a.385.385 0 0 0 .375-.375v-7.5a.4.4 0 0 0-.375-.375zm-1.5.375c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zm5.367 1.828 1.688 3.375c.14.281.023.61-.258.75-.258.14-.61.024-.75-.258l-.117-.258H4.047l-.117.258a.555.555 0 0 1-.75.258.555.555 0 0 1-.258-.75l1.687-3.375a.58.58 0 0 1 .516-.328.53.53 0 0 1 .492.328m-.492 1.5-.516.985h1.008zm4.313.422a.555.555 0 0 0-.563.563c0 .328.234.562.563.562a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563M10 8.492v-.68c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v3.374a.555.555 0 0 1-.562.563c-.165 0-.305-.047-.399-.164a1.6 1.6 0 0 1-.726.164 1.68 1.68 0 0 1-1.688-1.687c0-.915.75-1.688 1.688-1.688.187 0 .374.047.562.117' />
    </g>
    <defs>
      <clipPath id='624fb45359997985b2be9fdcf0ff6184__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdCaptionBoldIcon);
export default ForwardRef;
