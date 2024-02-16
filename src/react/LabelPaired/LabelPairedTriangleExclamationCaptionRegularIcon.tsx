import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.82 13.344a.45.45 0 0 0-.07.234q.047.399.422.422h9.656q.375-.024.422-.422a.6.6 0 0 0-.047-.234L6.493 5.28Q6.303 5.001 6 5a.52.52 0 0 0-.469.281zm-.656-.375 4.711-8.063Q5.273 4.274 6 4.25q.727.024 1.125.656l4.71 8.063q.165.28.165.61a1.2 1.2 0 0 1-1.172 1.171H1.172A1.2 1.2 0 0 1 0 13.578q0-.328.164-.61M6 7.25q.352.023.375.375v3Q6.352 10.977 6 11q-.352-.023-.375-.375v-3q.023-.352.375-.375m-.562 5.25q.045-.516.562-.562.516.045.563.562-.048.515-.563.563-.516-.048-.562-.563' />
    </g>
    <defs>
      <clipPath id='d3a75b324bb84a98b14509a86b79446d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationCaptionRegularIcon);
export default ForwardRef;
