import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 3.5h3.75v3c0 .422.328.75.75.75h3V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m4.5 0 3 3H6zM1.5 5.375c0 .21.164.375.375.375h1.5a.385.385 0 0 0 .375-.375A.4.4 0 0 0 3.375 5h-1.5a.385.385 0 0 0-.375.375m0 1.5c0 .21.164.375.375.375h1.5a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-1.5a.385.385 0 0 0-.375.375m3 1.688a.385.385 0 0 0-.375.374v.422c-.21.024-.398.094-.586.188-.305.187-.539.492-.539.96 0 .423.234.704.516.868.257.164.562.258.82.328h.047c.281.094.515.164.68.281.14.07.164.164.164.258.023.164-.047.258-.165.328a.87.87 0 0 1-.562.117c-.281 0-.54-.093-.844-.187-.07-.023-.117-.047-.164-.07-.21-.047-.422.047-.492.234-.047.211.047.422.234.492.047 0 .118.024.164.047.211.07.446.164.727.211v.399c0 .21.164.374.375.374a.385.385 0 0 0 .375-.374v-.399a1.5 1.5 0 0 0 .586-.21c.305-.188.539-.517.539-.962-.023-.445-.258-.726-.54-.914-.257-.164-.585-.258-.843-.328h-.023c-.305-.094-.516-.164-.68-.258-.14-.094-.164-.164-.164-.234 0-.14.047-.235.188-.305.14-.094.351-.14.539-.14.234.023.492.07.75.14.21.047.421-.07.468-.281a.374.374 0 0 0-.258-.445c-.187-.047-.375-.094-.562-.118v-.421a.4.4 0 0 0-.375-.376' />
    </g>
    <defs>
      <clipPath id='abe3655af20ca1ce0f50a17c17aef740__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarCaptionFillIcon);
export default ForwardRef;
